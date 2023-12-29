const modals = document.querySelectorAll(".modals");
const numbers = document.querySelectorAll(".numbers");
const input = document.querySelector(".display");
const handleClick = () => {
    modals.forEach((modal) => {
        modal.addEventListener("click", () => {
            const operator = modal.textContent || "";
            if (operator === "C") {
                input.value = "";
            }
            else if (operator === "+/-") {
                input.value = (parseFloat(input.value) * -1).toString();
            }
            else if (operator === "%") {
                input.value = (parseFloat(input.value) / 100).toString();
            }
            else if (operator === "+") {
                input.value += " + ";
            }
            else if (operator === "-") {
                input.value += " - ";
            }
            else if (operator === "x") {
                input.value += " * ";
            }
            else if (operator === "/") {
                input.value += " / ";
            }
            else if (operator === ".") {
                input.value += ".";
            }
            else if (operator === "=") {
                const result = eval(input.value);
                input.value = result.toString();
            }
        });
    });
    numbers.forEach((number) => {
        number.addEventListener("click", () => {
            input.value += number.textContent || "";
        });
    });
};
handleClick();
