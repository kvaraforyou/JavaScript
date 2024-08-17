let  array = ['2', '3', '1', '4', '5']

console.log('searching the 3');

let found = false;


for (let i of array) {
    if (i === '3') {
        found= true;
        break
    }
}

console.log(found, 'we found 3')