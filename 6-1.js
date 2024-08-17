// ------------------------------------------------1
function getOlderUser(user1, user2){
     
    if (user1.age > user2.age) {
       return user1.name
    }
    else {
        return user2.name
    }
      
}

let user1={
    name: 'Игорь',
    age: 17
   }

   let user2={
    name: 'Оля',
    age: 21
   }

let result = getOlderUser(user1, user2)

console.log(result)

// ------------------------------------------------2

function getOlderUserArray(allUsers) {
    if (allUsers.length === 0) {
        return null; 
    }

    let olderUser = allUsers[0]; 

    for (let i = 1; i < allUsers.length; i++) {
        if (allUsers[i].age > olderUser.age) {
            olderUser = allUsers[i];
        }
    }

    return olderUser;
}

let allUsers = [
    { name: 'Валя', age: 11 },
    { name: 'Таня', age: 24 },
    { name: 'Рома', age: 21 },
    { name: 'Надя', age: 34 },
    { name: 'Антон', age: 7 }
];

let result2 = getOlderUserArray(allUsers);
console.log(result2);