import React from 'react';


function ToggleColoring(coloringInput) {
    let styling
    if (typeof coloringInput === "string") {
        styling = document.getElementById(`${coloringInput}-header`) 
    } else if (typeof coloringInput === 'object') {
        styling = document.getElementById(`${coloringInput.bookshelf_title}`)
    }

    if (styling.name === 'checked') {
        styling.classList.remove('filtered')
        styling.name = `not-checked`
    } else if (styling.name === `not-checked`) {
        styling.classList.add('filtered')
        styling.setAttribute('name', 'checked')
    }
        
}

export default ToggleColoring

