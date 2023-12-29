const modals: NodeListOf<Element> = document.querySelectorAll(".modals")
const numbers: NodeListOf<Element> = document.querySelectorAll(".numbers")
const input: HTMLInputElement = document.querySelector(".display")

const handleClick = () => {
	modals.forEach((modal: Element) => {
		modal.addEventListener("click", () => {
			const operator: string = modal.textContent || ""
			if (operator === "C") {
				input.value = ""
			} else if (operator === "+/-") {
				input.value = (parseFloat(input.value) * -1).toString()
			} else if (operator === "%") {
				input.value = (parseFloat(input.value) / 100).toString()
			} else if (operator === "+") {
				input.value += " + "
			} else if (operator === "-") {
				input.value += " - "
			} else if (operator === "x") {
				input.value += " * "
			} else if (operator === "/") {
				input.value += " / "
			} else if (operator === ".") {
				input.value += "."
			} else if (operator === "=") {
				const result: any = eval(input.value)
				input.value = result.toString()
			}
		})
	})

	numbers.forEach((number: Element) => {
		number.addEventListener("click", () => {
			input.value += number.textContent || ""
		})
	})
}

handleClick()
