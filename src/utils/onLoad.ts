export const createLoadObserver = (/** @type {() => void} */ handler) => {
    let waiting = 0

    const onload = (/** @type {{ addEventListener: (arg0: string, arg1: () => void) => void; }} */ el) => {
        waiting++
        el.addEventListener('load', () => {
            waiting--
            if (waiting === 0) {
                handler()
            }
        })
    }

    return onload
}
