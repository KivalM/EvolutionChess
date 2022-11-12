use chess::{BitBoard, Board, BoardStatus, ChessMove, Color, MoveGen, Piece, Square};
use std::{cmp, str::FromStr};
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn test() -> String {
    "Test".to_string()
}

fn piece_score(pos: &Board) -> i32 {
    let white_pieces_bb = pos.color_combined(Color::White);
    let black_pieces_bb = pos.color_combined(Color::Black);
    let rook_bb = pos.pieces(Piece::Rook);
    let pawn_bb = pos.pieces(Piece::Pawn);
    let knight_bb = pos.pieces(Piece::Knight);
    let bishop_bb = pos.pieces(Piece::Bishop);
    let queen_bb = pos.pieces(Piece::Queen);

    let white_score = 5 * (white_pieces_bb & rook_bb).popcnt()
        + (white_pieces_bb & pawn_bb).popcnt()
        + 3 * (white_pieces_bb & bishop_bb).popcnt()
        + 9 * (white_pieces_bb & queen_bb).popcnt()
        + 3 * (white_pieces_bb & knight_bb).popcnt();

    let black_score = 5 * (black_pieces_bb & rook_bb).popcnt()
        + (black_pieces_bb & pawn_bb).popcnt()
        + 3 * (black_pieces_bb & bishop_bb).popcnt()
        + 9 * (black_pieces_bb & queen_bb).popcnt()
        + 3 * (black_pieces_bb & knight_bb).popcnt();

    (white_score as i32) - (black_score as i32)
}

fn format_best_move(m: &ChessMove) -> String {
    format!("{} {}", &m.get_source(), &m.get_dest())
}

fn position_evaluation(position: &Board) -> i32 {
    // Handle the checkmate and stalemate cases.
    if position.status() != BoardStatus::Ongoing {
        if position.status() == BoardStatus::Stalemate {
            return 0;
        } else {
            // The current position is checkmate for the player to move. The
            // player to move has lost.
            if position.side_to_move() == Color::White {
                return -10000;
            } else {
                return 10000;
            }
        }
    }

    // The factor of 10 is to ensure that piece count considerations have a
    // much higher effect on the evaluation of a given board state than
    // positional evaluations.
    10 * piece_score(position) + central_control(position)
}

/// Generate a value representing the control over the centre that both sides
/// have in the given position.
fn central_control(position: &Board) -> i32 {
    // Bitboards for the central four squares.
    let e4_bb = BitBoard::from_square(Square::E4);
    let d4_bb = BitBoard::from_square(Square::D4);
    let e5_bb = BitBoard::from_square(Square::E5);
    let d5_bb = BitBoard::from_square(Square::D5);
    let cc_score = ((position.color_combined(Color::White) & e4_bb).popcnt() as i32)
        + ((position.color_combined(Color::White) & d4_bb).popcnt() as i32)
        + ((position.color_combined(Color::White) & e5_bb).popcnt() as i32)
        + ((position.color_combined(Color::White) & d5_bb).popcnt() as i32)
        + -((position.color_combined(Color::Black) & e4_bb).popcnt() as i32)
        + -((position.color_combined(Color::Black) & d4_bb).popcnt() as i32)
        + -((position.color_combined(Color::Black) & e5_bb).popcnt() as i32)
        + -((position.color_combined(Color::Black) & d5_bb).popcnt() as i32);

    cc_score
}
fn minimax_alpha_beta(
    position: Board,
    depth: u32,
    alpha: i32,
    beta: i32,
    player_color: Color,
) -> i32 {
    if (depth == 0) || position.status() != BoardStatus::Ongoing {
        return position_evaluation(&position);
    };

    let legal_moves = MoveGen::new_legal(&position);
    if player_color == Color::White {
        let mut tracking_alpha = alpha;
        let mut max_eval = -10000;
        for legal_move in legal_moves {
            let eval = minimax_alpha_beta(
                position.make_move_new(legal_move),
                depth - 1,
                tracking_alpha,
                beta,
                Color::Black,
            );
            max_eval = cmp::max(eval, max_eval);
            tracking_alpha = cmp::max(tracking_alpha, eval);
            if beta <= tracking_alpha {
                break;
            }
        }
        max_eval
    } else {
        let mut tracking_beta = beta;
        let mut min_eval = 10000;
        for legal_move in legal_moves {
            let eval = minimax_alpha_beta(
                position.make_move_new(legal_move),
                depth - 1,
                alpha,
                tracking_beta,
                Color::White,
            );
            min_eval = cmp::min(eval, min_eval);
            tracking_beta = cmp::min(tracking_beta, eval);
            if tracking_beta <= alpha {
                break;
            }
        }
        min_eval
    }
}

/// Exposed to javascript to perform move calculation.
pub fn get_best_move_minimax_alpha_beta(current_position: &str, depth: u32) -> String {
    // Parse current position into Board object.
    let current_position = Board::from_str(current_position).unwrap_or_else(|error| {
        panic!("Hit error parsing fen: {:?}", error);
    });

    // Create iterator for candidate moves.
    let candidate_moves = MoveGen::new_legal(&current_position);
    // Option for holding the a chess move and the resulting eval.
    let mut best_move: Option<(ChessMove, i32)> = None;

    // Iterate through the candidate moves getting an eval for every one, retain
    // the best one.

    // TODO - currently alpha and beta are reset after each invocation of minimax_alpha_beta.
    // We could dramatically reduce the amount we had to calculate by fixing this.
    for candidate_move in candidate_moves {
        let new_position = current_position.make_move_new(candidate_move);
        let eval = minimax_alpha_beta(
            new_position,
            depth,
            -10000,
            10000,
            new_position.side_to_move(),
        );

        // Check whether the candidate move is the best found.
        if let Some((_, top_eval)) = best_move {
            if (current_position.side_to_move() == Color::White && eval > top_eval)
                || (current_position.side_to_move() == Color::Black && eval < top_eval)
            {
                best_move = Some((candidate_move, eval));
            }
        } else {
            best_move = Some((candidate_move, eval))
        }
    }

    let (best_move, _) = best_move.unwrap();

    format_best_move(&best_move)
}
