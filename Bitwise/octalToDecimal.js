const n = 127;  //octal number

function octalToDecimal(n) {
    let decimalEquivalent=0, i=0;
    while (n>0) {
        let digit = n%10;
        let base = 8**i;
        decimalEquivalent += digit * base;
        i += 1;
        n = Math.floor(n/10);
    }
    return decimalEquivalent;
}

console.log(`${n}(octal) => ${octalToDecimal(n)}(decimal)`);