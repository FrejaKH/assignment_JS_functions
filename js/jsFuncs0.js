

let amount = prompt("Insert an amount");
console.log(amount);


// Returns amount including vat given an amount as input - version 1
function addVat1 () {

    let vat = 1.25;
    let amountIncVat = amount*vat;
    console.log(amountIncVat);
    
}

addVat1();


// Returns amount including vat given an amount as input - version 2
function addVat2 () {

    vat = 25;
    amountIncVat = Number(amount) + (Number(amount)*vat/100);
    console.log(amountIncVat);
    
}

addVat2();


// Returns amount excluding vat given an amount as input - version 1
function subVat1 () {
    vat = 0.75;
    let amountExcVat = amount*vat;
    console.log(amountExcVat);
}

subVat1();

// Returns amount excluding vat given an amount as input - version 2
function subVat2 () {
    vat = 25;
    let amountExcVat = Number(amount) - (Number(amount)*vat/100);
    console.log(amountExcVat);
}

subVat2();


// Returns the vat from the given amount.
function calcVat () {
    vat = 25;
    let calculateVat = amount*vat/100;
    console.log(calculateVat);
}

calcVat();





