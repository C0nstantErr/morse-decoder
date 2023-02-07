const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const decoder = {
    ['10']: '.',
    ['11']: '-'
};

function decode(expr) {
    const binaryWords = expr.split('**********'); 
    const result = [];

    for (let i = 0; i < binaryWords.length; i++) { 
        const binaryLetters = []; 
        let word = '';

        for (let k = 0; k < binaryWords[i].length; k += 10) { 
          binaryLetters.push(binaryWords[i].slice(k, k + 10));
        }

        for (let letter of binaryLetters) {
            let morseLetter = '';
            for (let j = 0; j < letter.length; j += 2) {
                let sign = letter.slice(j, j + 2);
                if (sign in decoder) {
                    morseLetter += decoder[sign];
                }
            }

            for (let key in MORSE_TABLE) {
                if (key === morseLetter) {
                    word += MORSE_TABLE[key];
                    break;
                }
            }
        }
        result.push(word);
    }
    return result.join(' ');
}

module.exports = {
    decode
}