function findCard(cards, wantedCard = 'Tuz') {
    console.log('vedzebt ' + wantedCard);


    let found = false;
   
    for (let card of cards) {
        console.log(`colonidan amovida karti ${card}`);
        if (card === wantedCard) {
            found = true;
            break;
        }
    }
     console.log(found ? 
        `vipovet ${wantedCard}! :)` : 
        `kolonashi araa ${wantedCard} :(`);
}

let myCards = ['2', 'karol', 'Tuz', '25', '7']

findCard(myCards);

findCard(myCards,  '37');

