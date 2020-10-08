/*----- constants -----*/

/*----- app's state (variables) -----*/
let subtotal = 0;
let output = 0;
let result = 0;
let operator = '';


/*----- cached element references -----*/
const $keypadEl = $('#keypad');
const $squareEls = $('.square');
const $buttonEl = $('.btn');
const $outputEl = $('.output');
const $operatorEl = $('.operator');
const $equalsEl = $('.equals');
const $numberEl = $('.number');
/*----- event listeners -----*/
$numberEl.on('click', handleCalc);
$operatorEl.on('click', handleOperator);
$equalsEl.on('click', handleEquals);
/*----- functions -----*/

//calculates values based on user input
function handleInit() {

}

function handleCalc(evt) {
    const position = evt.target.dataset.index;
    if (position){
        subtotal = parseInt(position);
        // console.log(`subtotal = ${subtotal}`);
        if (operator !== '') {
            console.log('we have an operator');
            if (operator === '+') {
                addition();
            } else if (operator === '-') {
                subtraction();
            }
        }
        render(subtotal);
    } 
}

//render function displays output
function render(number) {
    $outputEl.text(number);
    
}

function addition() {
        result += subtotal;
    
    render(result);
}

function handleOperator(opEvt) {
    const ops = opEvt.target.dataset.operator;
    operator = ops;
    console.log(operator);
}


function handleEquals() {

}

// function subtraction() {

// }

// function multiplication() {

// }