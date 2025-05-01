const names = ["ram","shayam","golu","molu"];  //array of names of persons
const heights = [180,169,196,172];  //array of heights of persons

// we need to return the array of names in descending order by height.


function sorted() {
    const n = names.length;
    const map = new Map();
    const sortedNames = new Array(n);

    // store height -> name mapping
    for (let i=0; i<n; i++){
        map.set(heights[i],names[i]);
    }

    // sort heights in ascending order
    heights.sort((a,b)=>a-b);

    // traverse from the end to get descending order of heights
    let j=0;
    for(let i=n-1;i>=0;i--){
        sortedNames[j++] = map.get(heights[i]);
    }

    return sortedNames;
 }
console.log(`${sorted()}`);
