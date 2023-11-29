const xhr = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', () => {

    loadBalance();

});

function loadBalance() {

    var id = sessionStorage.getItem('token');
    var url = `/profile/balance?id=${id}`;

    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status !== 200) {
        alert(xhr.status + ': ' + xhr.statusText);
      } else {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            let balanceTag = document.querySelector('#tagBalance');
            balanceTag.innerHTML = parseFloat(data.balance).toFixed(2);
        }
      }
    };
    xhr.send();
}


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


const deck = new Deck ();
deck.shuffle();

//AS Y REY NO JUEGAN
if (deck.cards[0].value === 'K' || deck.cards[0].value == 'A'){
    deck.pop();
}
computerCardSlot.appendChild(deck.cards[0].getHTML());
console.log(deck.cards);

const tagGanador = document.getElementById('tagGanador');
tagGanador.textContent = 'Balance: ';
const btnMayor = document.getElementById('btnMayor');
btnMayor.addEventListener('click', function () {   

    let cantidadValue = (cantidadHiLo.value === '') ? 0 : parseFloat(cantidadHiLo.value); 
    let balanceValue = document.querySelector('#tagBalance').innerHTML;
    
    if (balance < cantidadHiLo.value){
        alert('Fondos insuficientes');
        cantidadHiLo.value = '';
        return;
    } 
    if (cantidadHiLo.value < 0){
        alert('Cantidad invalida');
        cantidadHiLo.value = '';
        return;
    } 
    balance = balance-cantidadHiLo.value;
    if(deck.cards.length === 1){
        alert('Ya no hay cartas');
        return;
    }
    let cartaVieja = deck.pop().value;
    while (deck.cards[0].value === 'K' || deck.cards[0].value == 'A'){
        deck.pop();
    }
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

    // Obtener la cantidad
    let cantidadValue = (cantidadHiLo.value === '') ? 0 : parseFloat(cantidadHiLo.value); 
    let balanceValue = document.querySelector('#tagBalance').innerHTML;

    if (balanceValue < cantidadValue){
        alert('Fondos insuficientes');
        cantidadHiLo.value = '';
        return;
    } 
    if (cantidadValue < 0){
        alert('Cantidad invalida');
        cantidadHiLo.value = '';
        return;
    } 
    balance = balance-cantidadHiLo.value;
    if(deck.cards.length === 1){
        alert('Ya no hay cartas');
        return;
    }
    let cartaVieja = deck.pop().value;
    while (deck.cards[0].value === 'K' || deck.cards[0].value == 'A'){
        deck.pop();
    }
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