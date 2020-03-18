'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function reducer(total,num) {
        return total + num;
    }

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    var bactual = (bill.reduce((total,item) => total + item ) - bill[k])/2;
    
    if(bactual == b) {
        console.log('Bon Appetit');
    }else {
        console.log(Math.abs(bactual - b));
    }


}

function main() {
    const nk = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

    bonAppetit(bill, k, b);
}
