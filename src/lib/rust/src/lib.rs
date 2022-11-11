use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn test() -> String {
    "Test".to_string()
}
