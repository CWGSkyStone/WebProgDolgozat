/*
* File: app.js
* Author: Szabó József
* Copyright: 2026, Szabó József
* Group: Szoft I/N
* Date: 2026-03-25
* Github: https://github.com/CWGSkyStone/WebProgDolgozat
* Licenc: MIT
*/

const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const weightIndex = document.querySelector('#weightIndex');
const form = document.querySelector('#inputForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = weightInput.value;
    const height = heightInput.value;
    const weightIndexValue = weight / (height * height);
    weightIndex.value = weightIndexValue
});