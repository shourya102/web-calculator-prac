const screen = document.getElementById("screen");
const button = document.getElementsByTagName("button");
let previous = 0;
let prev_op = "";
let op_count = 0;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        readButton(button[i]);
    });
}

function readButton(but) {
    const op = but.innerText;
    switch (op) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            writeToScreen(op);
            break;
        case "+":
        case "-":
        case "÷":
        case "×":
            arithmetic(op);
            break;
        case "C":
            screen.innerText = "0";
            previous = 0;
            prev_op = "";
            op_count = 0;
            break;
        case "BC":
            backspace();
            break;
        default:
            but.innerText = 20;
    }
}

function writeToScreen(str) {
    if (screen.innerText.length === 1 && screen.innerText === "0")
        screen.innerText = "";
    if (op_count === 2) {
        screen.innerText = "";
        op_count = 1;
    }
    screen.innerText = screen.innerText + str;
}

function arithmetic(str) {
    if (previous === 0) {
        previous = parseInt(screen.innerText);
        screen.innerText = "0";
        prev_op = str;
        op_count++;
    } else {
        switch (prev_op) {
            case "+":
                screen.innerText = (previous + parseInt(screen.innerText)).toString();
                break;
            case "-":
                screen.innerText = (previous - parseInt(screen.innerText)).toString();
                break;
            case "÷":
                screen.innerText = (previous / parseInt(screen.innerText)).toString();
                break;
            case "×":
                screen.innerText = (previous * parseInt(screen.innerText)).toString();
                break;
        }
        previous = parseInt(screen.innerText);
        prev_op = str;
        op_count++;
    }
}

function backspace() {
    if (screen.innerText !== "0") {
        if (screen.innerText.length === 1)
            screen.innerText = "0";
        else
            screen.innerText = screen.innerText.substring(0, screen.innerText.length - 1);
    }
}

function equals() {

}