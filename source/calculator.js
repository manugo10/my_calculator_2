let pow3 = document.querySelector("#pow3");
let pow4 = document.querySelector("#pow4");
pow3.addEventListener("click", function () {
    let value = document.querySelector("#number1");
    value.value = pow(value.value, 3);
});
pow4.addEventListener("click", function () {
    let value = document.querySelector("#number1");
    value.value = pow(value.value, 4);
});
// @ return pow  
function pow(value, pow) {
    return Math.pow(value, pow);
}