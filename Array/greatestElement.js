let arr = [8,13,69,96,31,80];

var greatest = -Infinity, index = -1;
for (let i=0; i<arr.length; i++){
    if (arr[i] > greatest) {
        greatest = arr[i];
        index = i;
    }
}
console.log(`Greatest element in Array : ${arr} is ${greatest} stored at index ${index}`);

