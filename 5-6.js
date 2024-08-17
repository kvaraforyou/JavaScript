function getAge(yearOfBirth) {
    let currentYear = new Date().getFullYear();
 
    let age = currentYear - yearOfBirth
 
    return age
 
 }
 
 let yearOfBirth = [1998]
 
 let age = getAge(yearOfBirth)
 
 console.log(age)
 
 // ---------------------------------------------------2
 
 function filter(whiteList, blackList ) {
 
     let filteredList = [];
 
     for (let email of whiteList) {
       if(!blackList.includes(email)) {
          filteredList.push(email);
       }
     }
    return filteredList
 }
 
 let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
 
 let blackList = ['jsfunc@mail.ru','goodday@day.ru']
 
 let result = filter(whiteList, blackList );
 
 console.log(result)
 
 // ---------------------------------------------------3
 
  function arrSort(sortMassive) {
 
 
    for (let i=0; i < arrSort.length; i++){
       for (let i = 0; i < sortMassive.length; i++) {
          for (let j = 0; j < sortMassive.length - 1; j++) {
              if (sortMassive[j] > sortMassive[j + 1]) {
                  let temp = sortMassive[j];
                  sortMassive[j] = sortMassive[j + 1];
                  sortMassive[j + 1] = temp;
              }
          }
      }
    }
 
   return sortMassive;
  }
 
  let sortMassive = [12,33,3,44,100]
 
 let arr = arrSort(sortMassive)
 
 console.log(arr)