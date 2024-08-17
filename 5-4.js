function findCardIndex(cards, wantedCard = 'Tuz'){
    console.log('vedzebt kolonashi ' + wantedCard);

    let foundIndex = -1;
   
    for (let index in cards) {
        let card = cards[index];
        console.log(`colonidan amovida karti ${card}`);
        if (card === wantedCard) {
            foundIndex = index;
            break;
        }
    }
    console.log(foundIndex > -1 ?
        `vipovet ${wantedCard}! :)` : 
        `kolonashi araa ${wantedCard} :(`);
        return foundIndex
}
let myCards = ['2', 'Tuz', '5', '7', 'karol']

let aceIndex  = findCardIndex(myCards);
let jackIndex =  findCardIndex(myCards, '42')

console.log(aceIndex);
console.log(jackIndex)


