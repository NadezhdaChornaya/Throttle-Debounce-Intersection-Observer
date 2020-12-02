console.dir(_);

const onScroll = () => {
    console.log("Hello!");
}

// window.addEventListener("scroll", onScroll);
window.addEventListener("scroll", _.throttle(onScroll, 1000));

// ============================================================

const onInput = () => {
    console.log("input event!");
}
// document.querySelector("input").addEventListener("input", onInput);
document.querySelector("input").addEventListener("input", _.debounce(onInput, 1000));

// =============================================================
