const btn = document.querySelector(".btn");
const inner = document.querySelector(".inner");

btn.addEventListener("click", () => {
    const innerShow = document.querySelector(".inner.show");
    if (innerShow) {
        inner.style.width = "3rem";
    } else {
        inner.style.width = "30rem";
    }
    inner.classList.toggle("show");
});
