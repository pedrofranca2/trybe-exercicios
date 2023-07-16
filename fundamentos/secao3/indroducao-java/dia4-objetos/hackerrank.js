function compareTriplets(a, b) {
let alice = 0;
let bob = 0;

for (let index = 0; index < a.length; index++) {
    if (a[index] > b[index]) {
        alice += 1;
    } else if (b[index] > a[index]) {
        bob += 1;
    } 

    }
    return [alice, bob];
    
}

console.log(compareTriplets([4,5,6],[4,5,8]));