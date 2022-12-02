const fs = require('fs')
const input = fs.readFileSync('day2/data.txt', 'utf-8')
                .trim()
                .split('\n')

actionMap = {
    'A': 'R',
    'B': 'P',
    'C': 'S',
    'X': 'R',
    'Y': 'P',
    'Z': 'S'
}

beatsMap = {
    'R': 'S',
    'P': 'R',
    'S': 'P'
}

valueMap = {
    'R': 1,
    'P': 2,
    'S': 3
}

function getWinPoints(theirMove, myMove) {
    if(myMove == theirMove) return 3;
    if(beatsMap[myMove] === theirMove) return 6;
    return 0;
}
let totPoints = 0;
input.forEach(line => {
    moves = line.split(' ')
    theirMove = actionMap[moves[0]]
    myMove = actionMap[moves[1]]

    totPoints += getWinPoints(theirMove, myMove) + valueMap[myMove]
    
})

console.log(totPoints)
