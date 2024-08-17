function findCardIndex(cards, wantedCard = 'Tuz'){
    console.log('vedzebt kolonashi ' + wantedCard);

   
   
    for (let index in cards) {
        let card = cards[index];
        console.log(`colonidan amovida karti ${card}`);
        if (card === wantedCard) {
            console.log( `vipovet ${wantedCard}! :)`)
            return index;
         
        }
    }
    console.log( `kolonashi araa ${wantedCard} :(`);
        return -1
}
let cards = ['2', 'Tuz', '5', '7', 'karol']

let aceIndex  = findCardIndex(cards);
let jackIndex =  findCardIndex(cards, '42')

console.log(aceIndex);
console.log(jackIndex)