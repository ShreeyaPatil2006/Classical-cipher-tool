function atbash(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode('Z'.charCodeAt(0) - (char.charCodeAt(0) - 'A'.charCodeAt(0)));
        } 
        else if (char >= 'a' && char <= 'z') {
            result += String.fromCharCode('z'.charCodeAt(0) - (char.charCodeAt(0) - 'a'.charCodeAt(0)));
        } 
        else {
            result += char;
        }
    }
    return result;
}


function caesar(text, shift, decrypt = false) {
    if (decrypt) {
        shift = 26 - shift; 
    }
    
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0));
        }
        else if (char >= 'a' && char <= 'z') {
            result += String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + shift) % 26) + 'a'.charCodeAt(0));
        }
        else {
            result += char;
        }
    }
    return result;
}


function rot13(text) {
    return caesar(text, 13);
}

function toggleShiftInput() {
    let cipherType = document.getElementById('cipherType').value;
    let shiftGroup = document.getElementById('shiftGroup');
    
    if (cipherType === 'caesar') {
        shiftGroup.classList.add('show');
    } else {
        shiftGroup.classList.remove('show');
    }
    
}



function encrypt() {
    let input = document.getElementById('inputText').value;
    let cipherType = document.getElementById('cipherType').value;
    
    if (input.trim() === '') {
        alert('Please enter text to encrypt!');
        return;
    }
    
    let output = '';
    
    if (cipherType === 'atbash') {
        output = atbash(input);
    } else if (cipherType === 'caesar') {
        let shift = parseInt(document.getElementById('shiftValue').value);
        if (isNaN(shift) || shift < 1 || shift > 25) {
            alert('Please enter a valid shift value (1-25)');
            return;
        }
        output = caesar(input, shift, false);
    } else if (cipherType === 'rot13') {
        output = rot13(input);
    }
    
    displayResult(output, 'Encrypted');
}

function decrypt() {
    let input = document.getElementById('inputText').value;
    let cipherType = document.getElementById('cipherType').value;
    
    if (input.trim() === '') {
        alert('Please enter text to decrypt!');
        return;
    }
    
    let output = '';
    
    if (cipherType === 'atbash') {
        output = atbash(input); 
    } else if (cipherType === 'caesar') {
        let shift = parseInt(document.getElementById('shiftValue').value);
        if (isNaN(shift) || shift < 1 || shift > 25) {
            alert('Please enter a valid shift value (1-25)');
            return;
        }
        output = caesar(input, shift, true); 
    } else if (cipherType === 'rot13') {
        output = rot13(input); 
    }
    
    displayResult(output, 'Decrypted');
}

function displayResult(text, type) {
    document.getElementById('resultLabel').textContent = type + ':';
    document.getElementById('result').textContent = text;
    document.getElementById('resultGroup').classList.add('active');
}


window.onload = function() {
};