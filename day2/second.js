const fs = require('fs')
const input = fs.readFileSync('day2/data.txt', 'utf-8')
                .trim()
                .split('\n')

actionMap = {
    'A': 'R',
    'B': 'P',
    'C': 'S',
}

whatBeatsMap = {
    'R': 'S',
    'P': 'R',
    'S': 'P'
}

whatIsBeatenByMap = {
    'R': 'P',
    'P': 'S',
    'S': 'R'
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
    wantedOutcome = moves[1]
    let myMove = ''
    if(wantedOutcome == 'X') myMove = whatBeatsMap[theirMove] // I lose
    if(wantedOutcome == 'Y') myMove = theirMove // We draw
    if(wantedOutcome == 'Z') myMove = whatIsBeatenByMap[theirMove] // I win

    totPoints += getWinPoints(theirMove, myMove) + valueMap[myMove]
    
})

console.log(totPoints)
