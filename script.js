
const btn = document.getElementById('generate');
const result = document.getElementById('result');
let numberOfDigits = 0;
let numberOfCharacters = 0;

btn.addEventListener('click', (e) => {
    generateID();
})

const generateID = () => {
    numberOfDigits = 0;
    numberOfCharacters = 0;
    let id = "###########";
    for (let i=0;i<id.length;i++) {
        if(characterOrDigit() === 'digit' && numberOfDigits<=4) {
            id = id.toString().replace('#', getDigit());
        } else if(numberOfCharacters <=4) {
            id = id.toString().replace('#', getCharacter());
        } else {
            id = id.toString().replace('#', getDigit());
        }
    }
    result.innerText = id;
}

const characterOrDigit = () => {
    if(Math.floor(Math.random() * 2 + 1) === 1) {
        numberOfDigits += 1;
        return 'digit';
    } else {
        numberOfCharacters += 1;
        return 'character';
    }
}

const getDigit = () => {
    return String.fromCharCode(Math.floor(Math.random() * (58-48) + 48));
}

const getCharacter = () => {
    return String.fromCharCode(Math.floor(Math.random() * (123-97) + 97));
}
