const fs = require('fs')
const input = fs.readFileSync('data.txt', 'utf-8')
                .trim()
                .split('\n')


let currentElfWeight = 0
let maxElfWeight = 0 
input.forEach(line => {
    if(line == "") {
       if(currentElfWeight > maxElfWeight) {
        maxElfWeight = currentElfWeight
       } 
       currentElfWeight = 0
    } else {
        currentElfWeight += parseInt(line)
    }
});

console.log(maxElfWeight)