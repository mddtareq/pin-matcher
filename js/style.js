//initialize button
const generatePin = document.getElementById('generate-pin');
const generator = document.getElementById('generator');
const match = document.getElementById('match');
const notMatch = document.getElementById('not-match');
const displayNumbers = document.getElementById('type-pin');
const tryLeft = document.getElementById('chance');
const submit = document.getElementById('submit');

//initialize numbers button
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const back = document.getElementById('back');
const clear = document.getElementById('clear');

//display none for pin match or not match block
match.style.display = "none";
notMatch.style.display = "none";

//generator value
generatePin.addEventListener('click', function () {
    const generatedNumber = pinGenerator();
    document.getElementById('generator').value = generatedNumber;
});

//numbers button to display
one.addEventListener('click', function () {
    const oneValue = parseFloat(document.getElementById('one').innerText);
    addInput(oneValue);
})
two.addEventListener('click', function () {
    const twoValue = parseFloat(document.getElementById('two').innerText);
    addInput(twoValue);
})
three.addEventListener('click', function () {
    const threeValue = parseFloat(document.getElementById('three').innerText);
    addInput(threeValue);
})
four.addEventListener('click', function () {
    const fourValue = parseFloat(document.getElementById('four').innerText);
    addInput(fourValue);
})
five.addEventListener('click', function () {
    const fiveValue = parseFloat(document.getElementById('five').innerText);
    addInput(fiveValue);
})
six.addEventListener('click', function () {
    const sixValue = parseFloat(document.getElementById('six').innerText);
    addInput(sixValue);
})
seven.addEventListener('click', function () {
    const sevenValue = parseFloat(document.getElementById('seven').innerText);
    addInput(sevenValue);
})
eight.addEventListener('click', function () {
    const eightValue = parseFloat(document.getElementById('eight').innerText);
    addInput(eightValue);
})
nine.addEventListener('click', function () {
    const nineValue = parseFloat(document.getElementById('nine').innerText);
    addInput(nineValue);
})
zero.addEventListener('click', function () {
    const zeroValue = parseFloat(document.getElementById('zero').innerText);
    addInput(zeroValue);
})

//remove the last index from display text
back.addEventListener('click', function () {
    const updatedPin = (displayNumbers.value).slice(0, -1);
    displayNumbers.value = updatedPin;
})

//remove the whole text from display
clear.addEventListener('click', function () {
    displayNumbers.value = "";
})

//compare the two input field to produce result
submit.addEventListener('click', function () {
    if (generator.value.length > 0 || displayNumbers.value.length > 0) {
        if (generator.value === displayNumbers.value) {
            match.style.display = "block";
            notMatch.style.display = "none";
        }
        else {
            notMatch.style.display = "block";
            match.style.display = "none";
            chanceRemaining();
        }
    }
    else {
        match.style.display = "none";
        notMatch.style.display = "none";
    }
});

//numbers button to display
function addInput(number) {
    const currentValue = document.getElementById('type-pin').value;
    const currentValueSize = currentValue.length;
    if (currentValueSize < 4) {
        displayNumbers.value = currentValue + number;
    }
}

//4 digit random generator
function pinGenerator() {
    return Math.floor(Math.random() * (9999 - 1000)) + 1000;
}
//calculate chance and disabled submit button;
function chanceRemaining() {
    let currentChance = parseFloat(tryLeft.innerText);
    const updatedChance = currentChance - 1;
    if (currentChance > 0) {
        tryLeft.innerText = updatedChance;
        if(updatedChance==0){
            submit.disabled = true;
            submit.style.color="black";
            submit.style.background="#dddddd";
        }
    }
}
