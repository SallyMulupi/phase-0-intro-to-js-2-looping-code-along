// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);
const string = ["Sally", "Keith", "Eugene"];
const action = 'suprise';

function writeCards(string, action) {

    let peopleNames = [];
    for (let i = 0; i < string.length; i++) {
        peopleNames.push(`Thank you so much guys, ${string[i]}, for the lovely and adorable  ${action} gift!`);
    }
    return peopleNames;
    debugger;
}
console.log(writeCards(string));

function countDown(x) {
    while (x > -1) {
        console.log(x)
        x--;
    }
}