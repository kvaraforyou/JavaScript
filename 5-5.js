function getAges(yearsOfBirth) {
    let currentYear = new Date().getFullYear();
    
    let ages = yearsOfBirth.map(year => currentYear - year);

    return ages;
}

let yearsOfBirth = [1998, 2000, 1985];
let ages = getAges(yearsOfBirth);
console.log(ages);