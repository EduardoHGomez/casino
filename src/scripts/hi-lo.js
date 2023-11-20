const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
]
let balance = 1000;
class Deck {
    constructor (cards = freshDeck()){
        this.cards = cards;
    }

    get numberOfCards (){
        return this.cards.length;
    }

    pop() {
        return this.cards.shift()
    }

    shuffle (){
        for (let i = this.numberOfCards -1; i>0;i--){
            const newIndex = Math.floor(Math.random() * (i+1));
            const tmp = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = tmp;
        }
    }
}

class Card {
    constructor (suit, value){
        this.suit = suit;
        this.value = value;
    }

    get color(){
        return this.suit === '♣' || this.suit === '♠' ? 'black' : 'red';
    }

    getHTML (){
        const cardDiv = document.createElement('div');
        cardDiv.innerText = this.suit;
        cardDiv.classList.add('card', this.color);
        cardDiv.dataset.value = `${this.value} ${this.suit}`;
        cardDiv.id = 'cartaDinamica';
        return cardDiv;
    }
}

function freshDeck (){
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card (suit, value);
        })
    })
}


////////////////////////////////



const computerCardSlot = document.querySelector('.computer-card-slot');
const cantidadHiLo = document.getElementById('cantidadHiLo');
// const valorCantidadHiLo = cantidadHiLo.value;


const deck = new Deck ();
deck.shuffle();
computerCardSlot.appendChild(deck.cards[0].getHTML());
console.log(deck.cards);

const tagGanador = document.getElementById('tagGanador');
tagGanador.textContent = 'Balance: ' + balance;
const btnMayor = document.getElementById('btnMayor');
btnMayor.addEventListener('click', function () {    
    balance = balance-cantidadHiLo.value;
    if(deck.cards.length === 1){
        alert('Ya no hay cartas');
        return;
    }
    let cartaVieja = deck.pop().value;
    let cartaNueva = deck.cards[0].value;
    if (cartaVieja == 'J' || cartaVieja == 'Q' || cartaVieja == 'K' || cartaVieja == 'A'){
        switch (cartaVieja){
            case 'J':
                cartaVieja = 11;
                break;
            case 'Q':
                cartaVieja = 12;
                break;
            case 'K':
                cartaVieja = 13;
                break;
            case 'A':
                cartaVieja = 1;
                break
        }
    }
    if (cartaNueva == 'J' || cartaNueva == 'Q' || cartaNueva == 'K' || cartaNueva == 'A'){
        switch (cartaNueva){
            case 'J':
                cartaNueva = 11;
                break;
            case 'Q':
                cartaNueva = 12;
                break;
            case 'K':
                cartaNueva = 13;
                break;
            case 'A':
                cartaNueva = 1;
                break
        }
    }
    if(cartaNueva>=cartaVieja){
        let posibilidadesArriba = (cartaVieja/13)+1;
        balance = balance + (cantidadHiLo.value * posibilidadesArriba);
        balance = balance.toFixed(2);
        tagGanador.textContent = 'Balance: ' + balance;
    }else{
        tagGanador.textContent = 'Balance: ' + balance;
    }
    computerCardSlot.removeChild(cartaDinamica);
    computerCardSlot.appendChild(deck.cards[0].getHTML());
    cantidadHiLo.value = '';
});

const btnMenor = document.getElementById('btnMenor');
btnMenor.addEventListener('click', function () {
    balance = balance-cantidadHiLo.value;
    if(deck.cards.length === 1){
        alert('Ya no hay cartas');
        return;
    }
    let cartaVieja = deck.pop().value;
    let cartaNueva = deck.cards[0].value;
    if (cartaVieja == 'J' || cartaVieja == 'Q' || cartaVieja == 'K' || cartaVieja == 'A'){
        switch (cartaVieja){
            case 'J':
                cartaVieja = 11;
                break;
            case 'Q':
                cartaVieja = 12;
                break;
            case 'K':
                cartaVieja = 13;
                break;
            case 'A':
                cartaVieja = 1;
                break
        }
    }
    if (cartaNueva == 'J' || cartaNueva == 'Q' || cartaNueva == 'K' || cartaNueva == 'A'){
        switch (cartaNueva){
            case 'J':
                cartaNueva = 11;
                break;
            case 'Q':
                cartaNueva = 12;
                break;
            case 'K':
                cartaNueva = 13;
                break;
            case 'A':
                cartaNueva = 1;
                break
        }
    }
    if(cartaNueva<=cartaVieja){
        let posibilidadesAbajo = ((13-(cartaVieja-1))/13)+1;
        balance = balance + (cantidadHiLo.value * posibilidadesAbajo);
        balance = balance.toFixed(2);
        tagGanador.textContent = 'Balance: ' + balance;
    }else{
        // balance = balance - cantidadHiLo.value;
        tagGanador.textContent = 'Balance: ' + balance;
    }
    
    computerCardSlot.removeChild(cartaDinamica);
    computerCardSlot.appendChild(deck.cards[0].getHTML());
    cantidadHiLo.value = '';
});