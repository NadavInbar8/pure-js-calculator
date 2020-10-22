let result = 0;
let firstInput = null;
let secondInput = null;
let iterator;
let inputArr= [];

let calcScreen = document.querySelector(".screen");
function updateScreen(input){
    calcScreen.innerText = input;
}

function numClick(number){
    inputArr = inputArr.map(n => n*10);
    inputArr.push(number);
    firstInput= sumArr(inputArr);
    updateScreen(firstInput);
}

function backClick(number){
    inputArr = inputArr.map(n => n/10);
    inputArr.pop(number);
    firstInput= sumArr(inputArr);
    updateScreen(firstInput);
}

function sumArr(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function iteratorClick(char){
    if ( firstInput !== null && secondInput !== null) {
        console.log("im second itertator");
        secondInput = executeIterator(secondInput,firstInput,iterator);
        updateScreen(secondInput);
    }
    else {
        secondInput = firstInput;
        firstInput = 0;
    }
    iterator = char;

    inputArr = [];
}

function executeIterator(num1, num2, iterator){
    let res = 0;
    switch(iterator){
        case '+':
            res=num1+num2;
            break;
        case '-':
            res=num1-num2;
            break;
        case '/':
            res=num1/num2;
            break;
        case '*':
            res=num1*num2;
            break;
    }
    return res;
}

function resClick(){
    let res = executeIterator(secondInput,firstInput,iterator);
    console.log(res);
    updateScreen(res);
    reset();
}

function reset(){
    firstInput = 0;
    secondInput = 0;
    iterator = '';
    inputArr = [];
}

function cBtn(){
    reset();
    updateScreen(0);
}