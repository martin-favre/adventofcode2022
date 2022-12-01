const fs = require('fs')
const input = fs.readFileSync('day1/data.txt', 'utf-8')
    .trim()
    .split('\n')
    
let currentElfWeight = 0
let elvesWeight = []
input.forEach(line => {
    if (line == "") {
        elvesWeight.push(currentElfWeight)
        currentElfWeight = 0
    } else {
        currentElfWeight += parseInt(line)
    }
});
elvesWeight.sort((a, b) => b-a);
console.log(elvesWeight[0]+elvesWeight[1]+elvesWeight[2])