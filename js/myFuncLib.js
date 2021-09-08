

// Funktion der giver et tilfældigt tal mellem 1 og 2
function coinFlipping () {
    let x = Math.random();
    x = Math.floor(x*2+1);
    return x;
}

console.log(coinFlipping());



// Funktion der giver et tilfældigt tal mellem 1 og 6
function rollDice () {
    let y = Math.random();
    y = Math.floor(y*6+1);
    return y;
}

console.log(rollDice());


// Funktion der giver et tilfældigt tal mellem 1 og 100
function turnSpindle () {
    let z = Math.random();
    z = Math.floor(z*100+1);
    return z;
}

console.log(turnSpindle());