function razzle(lawyer='Billy', target="'em") {
    console.log(`${lawyer} razzle-dazzles ${target}`);
}

function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol='*'){
    return function(adj='special'){
        return `You are ${symbol}${adj}${symbol}!`
    }
}