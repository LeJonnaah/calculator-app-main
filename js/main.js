'use strict'

// Variables

const calculator = document.querySelector('.calculator')
const button = document.querySelector('.calculator__button')
const display = document.querySelector('.calculator__display')

// Functions

function calculate (firstNumber, operator, secondNumber) {
    firstNumber = parseFloat(firstNumber)
    secondNumber = parseFloat(secondNumber)

    if (operator === 'add') return firstNumber + secondNumber
    if (operator === 'subtract') return firstNumber - secondNumber
    if (operator === 'multiply') return firstNumber * secondNumber
    if (operator === 'divide') return firstNumber / secondNumber
}



// Event Listeners


calculator.addEventListener('click', e => {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent

    if (!action) {
        console.log('number key!')
    }

    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) {
        console.log('operator key!')
    }

    if (action === 'decimal') {
        console.log('decimal key!')
    }

    if (action === 'clear') {
        console.log('clear key!')
    }

    if (action === 'calculate') {
        console.log('equal key!')
    }
})
