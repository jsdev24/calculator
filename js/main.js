
let screen = document.getElementById("display");
let wasResult = false;

let btnPressed = element => {
    let buttonValue = element.innerHTML;

    if (buttonValue == "+" || buttonValue == "*" || buttonValue == "/") {
        if (screen.value == "") {
            buttonValue = "";
        }
    }

    if (buttonValue == "+" 
        || buttonValue == "-" 
        || buttonValue == "*" 
        || buttonValue == "/") {
        preventSymbolDuplicaton();
    }

    preventDecimalDuplication(buttonValue);

    if (wasResult == true 
        && buttonValue != "+" 
        && buttonValue != "-" 
        && buttonValue != "*" 
        && buttonValue != "/") {
        screen.value = "";
        wasResult = false;
    } else {
        wasResult = false;
    }

    screen.value += buttonValue;
}


let preventSymbolDuplicaton = () => {
    let lastChar = screen.value[screen.value.length - 1];
    if (lastChar == "+" 
        || lastChar == "-"
        || lastChar == "*" 
        || lastChar == "/") {
        screen.value = screen.value.substring(0, screen.value.length - 1);
    }
}


let preventDecimalDuplication = buttonValue => {
    if(buttonValue == "." && screen.value[screen.value.length - 1] == ".") {
        screen.value = screen.value.substring(0, screen.value.length - 1);
    }
}


let result = () => {
    let lastChar = screen.value[screen.value.length - 1];

    if (lastChar != "+" 
        && lastChar != "-" 
        && lastChar != "x" 
        && lastChar != "/" 
        && lastChar != "." 
        && screen.value != "") {
        screen.value = eval(screen.value);
        wasResult = true;
    }

}

let allClear = () => screen.value = "";

let clearChar = () => screen.value = screen.value.substring(0, screen.value.length - 1);
