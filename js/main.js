'use strict'

// Variables

const calculator = document.querySelector('.calculator')
const button = document.querySelector('.calculator__button')
const displayContent = document.querySelector('.calculator__display-text')

// Functions

const writeInDisplay = (keyContent) => {
    displayContent.textContent += keyContent
}

const deleteLastChar = () => {
    displayContent.textContent = displayContent.textContent.slice(0, -1)
}

const clearDisplay = () => {
    displayContent.textContent = ''
}

const calculate = () => {
    displayContent.textContent = eval(displayContent.textContent)
}

// Event Listeners

calculator.addEventListener('click', e => {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    
    if (action === 'number') {
        writeInDisplay(keyContent)
    }
    
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
        ) {
            writeInDisplay(keyContent)
    }

    if (action === 'delete') {
        deleteLastChar()
    }

    if (action === 'reset') {
        clearDisplay()
    }

    if (action === 'calculate') {
        calculate()
    }
})