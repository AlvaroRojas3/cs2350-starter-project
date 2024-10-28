//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"



function getMax(x, y, z){
    return Math.max(x, y, z)
}
    let largest = getMax(13, 45, 234)

console.log(largest)


function getMin(x, y, z){
    return Math.min(x, y, z)
}
    let smallest = getMin(12, 56, 3)

console.log(smallest)


function getMean(x, y, z){
    let sum = x + y+ z 
    let mean = sum / 3
    return mean
}

console.log(getMean(18, 4, 5))


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


