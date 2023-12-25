const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const increaseDecrease = document.querySelector(".increase-decrease");

plus.addEventListener("click", () => {
    increaseDecrease.innerHTML++
})
minus.addEventListener("click", () => {
    increaseDecrease.innerHTML--
})