let pow2 = document.querySelector("#pow2");
let pow3 = document.querySelector("#pow3");
let pow4 = document.querySelector("#pow4");
let sin = document.querySelector("#sinx");
pow3.addEventListener("click", function () {
    let value = document.querySelector("#number1");
    value.value = pow(value.value, 3);
});
pow4.addEventListener("click", function () {
    let value = document.querySelector("#number1");
    value.value = pow(value.value, 4);
});

sin.addEventListener("click", function () {
    let value = document.querySelector("#number1");
    value.value = Math.sin(value.value);
});

pow2.addEventListener("click", function () {
    let value = document.querySelector("#number1");
    value.value = Math.pow(value.value, 2);
});
// @ return pow  
function pow(value, pow) {
    return Math.pow(value, pow);
}
