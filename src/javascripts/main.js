//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"



function getMax(x, y, z){
    return Math.max(x, y, z)
}
    let largest = getMax(1, 2, 3, 4 ,5)

console.log(largest)


function getMin(x, y, z){
    return Math.min(x, y, z)
}
    let smallest = getMin(1, 2, 3, 4, 5)

console.log(smallest)


function getMean(x, y, z){
    let sum = x + y+ z 
    let mean = sum / 3
    return mean
}

console.log(getMean(18, 4, 8))


function compareWord(word1, word2){
    if (word1 === word2) {
        return 0;
    } 

    if (word1 > word2) {
        return 1;
    } 

    else {
        return -1;
    }
}

console.log(compareWord('axe', 'axe'));
console.log(compareWord('sword', 'axe'));
console.log(compareWord('axe', 'sword'));


function getCharPerLine(str, indent){
    let output = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === ' ') {
            continue
        }
        if (indent) {
            output += ' '.repeat(i) + char + '\n';
        } 
        else {
            output += char + '\n';
        }
    }
    return output.trim();
}

console.log(getCharPerLine("Hello World!", false))
console.log(getCharPerLine("Hello World!", true))


function arrow(size){
    let output = '';
    let i = 1;

    while (i <= size) {
        for (let j = 0; j < i; j++) {
            output += '*';
        }
        output += '\n';
        i++;
    }

    i = size - 1;
    while (i > 0) {
        for (let j = 0; j < i; j++) {
            output += '*';
        }
        output += '\n';
        i--;
    }

    return output;
}

console.log(arrow(3))
console.log(arrow(7))

