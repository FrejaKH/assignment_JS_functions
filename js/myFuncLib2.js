
// Function that converts celsius temperatures to Fahrenheit
function C2F (c) {

    let Fahrenheit = ((9/5)*c)+32;
    return Fahrenheit;

}

console.log(C2F(10));


// Function that converts Fahrenheit to celsius
function F2C (f) {

    let Celcius = (5/9)*(f-32);
    return Celcius;

}

console.log(F2C(50));