let elBody = document.querySelector("body");
elBody.style.backgroundColor = "black"
let elbuttoninput = document.querySelector(".button__input");
elbuttoninput.addEventListener("change", () => {
    if (elbuttoninput.checked) {
        elBody.style.backgroundColor = "white";
    } else {
        elBody.style.backgroundColor = "black";
    }
});
