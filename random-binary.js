
//Create array with [i <= xxxx] numbers of binary code. Loop and push, loop and push, loop and push
let binArray = [];
for (let i = 0; i <= 1000; i++) {
    function dec2bin(x) {
        // >>> Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off, and shifting in 0s from the left. 
        return (x >>> 0).toString(2);
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
    }
    binArray.push(dec2bin(i));
}
console.log(binArray);

//run the loop 100 times for 100 outputs at once
for (let i = 0; i < 100; i++) {
    //creat a random number between 0 and 1000
    let random = Math.floor(Math.random() * 1001);
    let binary;

    // the random number will be both the switch and the case and also the index number in the binary array and we assign it to the binary variable and then log binary to the console.
    switch (random) {
        case (random):
            binary = `${random} = ${binArray[random]}`;
            break;
        default:
            binary = "Something went wrong";
    }
    console.log(binary);
}


