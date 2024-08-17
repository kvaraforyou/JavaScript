// В переменную password запишите строку с любым произвольным паролем. 

let password = '*******'

if (password.length > 4 || password === '-' || password === '_' ) {
    console.log('Пароль надёжный')
} else {
    console.log('Пароль недостаточно надёжный')
}

// ....................................................2

let userName = 'giOrgi';
let userSurname = 'kvaraTskhelia';

let formatUserName = userName.substring(0, 1).toUpperCase() + userName.substring(1).toLowerCase();
let formatUserSurname = userSurname.substring(0, 1).toUpperCase() + userSurname.substring(1).toLowerCase();


console.log(formatUserName) 
console.log(formatUserSurname) 


// ....................................................3

let number = 25;

if (number % 2 === 0 ) {
    console.log('Число чётное');
} else  {
    console.log('Число нечётное')
}
