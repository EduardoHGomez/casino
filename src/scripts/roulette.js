import {Wheel} from 'https://cdn.jsdelivr.net/npm/spin-wheel@4.3.0/dist/spin-wheel-esm.js';
const xhr = new XMLHttpRequest();

// 1. Configure the wheel's properties:
const props = {
    items: [
      {label: '0', backgroundColor:'#008000',labelColor : '#fff', color : 'Verde'},
      {label: '32',backgroundColor : '#f00', labelColor : '#000', color : 'Rojo'  , paridad : 'par', docena : '3'},
      {label: '15', backgroundColor : '#000',labelColor : '#fff', color : 'Negro' , paridad:'impar', docena : '2'},
      {label: '19',backgroundColor : '#f00', labelColor : '#000', color : 'Rojo'  , paridad:'impar', docena : '2'},
      {label: '4', backgroundColor : '#000', labelColor : '#fff', color : 'Negro' , paridad : 'par', docena : '1'},
      {label: '21',backgroundColor : '#f00', labelColor : '#000', color : 'Rojo'  , paridad:'impar', docena : '2'},
      {label: '2', backgroundColor : '#000', labelColor : '#fff', color : 'Negro' , paridad : 'par', docena : '1'},
      {label: '25',backgroundColor : '#f00', labelColor : '#000', color : 'Rojo'  , paridad:'impar', docena : '3'},
      {label: '17', backgroundColor : '#000',labelColor : '#fff', color : 'Negro' , paridad:'impar', docena : '2'},
      {label: '34',backgroundColor : '#f00', labelColor : '#000', color : 'Rojo'  , paridad : 'par', docena : '3'},
      {label: '6', backgroundColor : '#000', labelColor : '#fff', color : 'Negro' , paridad : 'par', docena : '1'},
      {label: '27',backgroundColor : '#f00', labelColor : '#000', color : 'Rojo'  , paridad:'impar', docena : '3'},
      {label: '13', backgroundColor : '#000',labelColor : '#fff', color : 'Negro' , paridad:'impar', docena : '2'},
      {label: '36',backgroundColor : '#f00', labelColor : '#000', color : 'Rojo'  , paridad : 'par', docena : '3'},
      {label: '11', backgroundColor : '#000',labelColor : '#fff', color : 'Negro' , paridad:'impar', docena : '1'},
      {label: '30',backgroundColor : '#f00', labelColor : '#000', color : 'Rojo'  , paridad : 'par', docena : '3'},
      {label: '8', backgroundColor : '#000', labelColor : '#fff', color : 'Negro' , paridad : 'par', docena : '1'},
      {label: '23',backgroundColor : '#f00', labelColor : '#000', color : 'Rojo'  , paridad:'impar', docena : '2'},
      {label: '10', backgroundColor : '#000',labelColor : '#fff', color : 'Negro' , paridad : 'par', docena : '1'},
      {label: '5',backgroundColor : '#f00',  labelColor : '#000', color : 'Rojo'  , paridad:'impar', docena : '1'},
      {label: '24', backgroundColor : '#000',labelColor : '#fff', color : 'Negro' , paridad : 'par', docena : '2'},
      {label: '16',backgroundColor : '#f00', labelColor : '#000', color : 'Rojo'  , paridad : 'par', docena : '2'},
      {label: '33', backgroundColor : '#000',labelColor : '#fff', color : 'Negro' , paridad:'impar', docena : '3'},
      {label: '1', backgroundColor : '#f00', labelColor : '#000', color : 'Rojo'  , paridad:'impar', docena : '1'},
      {label: '20', backgroundColor : '#000',labelColor : '#fff', color : 'Negro' , paridad : 'par', docena : '2'},
      {label: '14',backgroundColor : '#f00', labelColor : '#000', color : 'Rojo'  , paridad : 'par', docena : '2'},
      {label: '31', backgroundColor : '#000',labelColor : '#fff', color : 'Negro' , paridad:'impar', docena : '3'},
      {label: '9',backgroundColor : '#f00',  labelColor : '#000', color : 'Rojo'  , paridad:'impar', docena : '1'},
      {label: '22', backgroundColor : '#000',labelColor : '#fff', color : 'Negro' , paridad : 'par', docena : '2'},
      {label: '18',backgroundColor : '#f00', labelColor : '#000', color : 'Rojo'  , paridad : 'par', docena : '2'},
      {label: '29', backgroundColor : '#000',labelColor : '#fff', color : 'Negro' , paridad:'impar', docena : '3'},
      {label: '7',backgroundColor : '#f00',  labelColor : '#000', color : 'Rojo'  , paridad:'impar', docena : '1'},
      {label: '28', backgroundColor : '#000',labelColor : '#fff', color : 'Negro' , paridad : 'par', docena : '3'},
      {label: '12',backgroundColor : '#f00', labelColor : '#000', color : 'Rojo'  , paridad : 'par', docena : '1'},
      {label: '35', backgroundColor : '#000',labelColor : '#fff', color : 'Negro' , paridad:'impar', docena : '3'},
      {label: '3',backgroundColor : '#f00',  labelColor : '#000', color : 'Rojo'  , paridad:'impar', docena : '1'},
      {label: '26', backgroundColor : '#000',labelColor : '#fff', color : 'Negro' , paridad : 'par', docena : '3'},
    ]
  }

props.itemLabelFontSizeMax = 15;
// props.itemBackgroundColors = ['#f00'];
// let elemento = props.items[1];
// elemento.backgroundColor = ['#f00'];
// 2. Decide where you want it to go:
const container = document.querySelector('.wheel-container');
const dropdownWinningItem = document.querySelector('select.winning-item');

// Creacion y atributos de wheel


//ELEMENTOS
let btnSpin = document.getElementById('btnSpin');
//let numeroGanador = document.getElementById('numeroGanador');
let colorGanador = document.getElementById('colorGanador');
let parOImpar = document.getElementById('parOImpar');
let docenaGanadora = document.getElementById('docenaGanadora');
let numeroElegido = document.getElementById('numeroElegido');

let cantidadANumero = document.getElementById('cantidadANumero');
let checkboxRojo = document.getElementById('checkboxRojo');
let checkboxNegro = document.getElementById('checkboxNegro');
let checkboxVerde = document.getElementById('checkboxVerde');
let cantidadAColor = document.getElementById('cantidadAColor');
let checkboxPar = document.getElementById('checkboxPar');
let checkboxImpar = document.getElementById('checkboxImpar');
let cantidadAParidad = document.getElementById('cantidadAParidad');
let checkboxPrimera = document.getElementById('checkboxPrimera');
let checkboxSegunda = document.getElementById('checkboxSegunda');
let checkboxTercera = document.getElementById('checkboxTercera');
let cantidadADocena = document.getElementById('cantidadADocena');
const ColorDivCantidad = document.getElementById('ColorDivCantidad');
const ParImparDivCantidad = document.getElementById('ParImparDivCantidad');
const decDivCantidad = document.getElementById('decDivCantidad');

let tagBalance = document.getElementById('tagBalance');

let balance = 0;
let balanceActual = 0;
document.addEventListener('DOMContentLoaded', () => {
  loadBalanceRoulette();
});


function loadBalanceRoulette()
{
  var id = sessionStorage.getItem('token');
  var url = `/profile/balance?id=${id}`;

  xhr.open('GET', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      if (xhr.status === 200) {

        let data = JSON.parse(xhr.responseText);
        let balance = document.querySelector('#tagBalance');
        balanceActual = data.balance;
        tagBalance.innerHTML = "Balance: "  +  data.balance;
      }
    }
  };
  xhr.send();
}

function updateBalance(amount) {
  const id = sessionStorage.getItem('token');
  const url = '/balance';

  const data = {
    id: id,
    amount: amount,
  };

  xhr.open('PUT', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (xhr.status !== 200)
    {
      alert(xhr.status + ': ' + xhr.statusText);
    }
    else
    {
      if (xhr.status === 200)
      {
        loadBalanceRoulette();
      }
    }
  };
  xhr.send(JSON.stringify(data));
}






tagBalance.textContent = 'Balance: ' + balance;
const wheel = new Wheel(container, props);

function init()
{

  wheel.borderWidth = 12;
  wheel.isInteractive = false;
  wheel.lineColor = '#D4AF37';

  wheel.radius = 0.9;

  ColorDivCantidad.style.display = "none";
  ParImparDivCantidad.style.display = "none";
  decDivCantidad.style.display = "none";
}


function actualizarVisibilidad() {
  // Verifica si al menos uno de los checkboxes está marcado
  if (checkboxRojo.checked || checkboxNegro.checked || checkboxVerde.checked) {
    ColorDivCantidad.style.display = "block";
  } else {
    ColorDivCantidad.style.display = "none";
  }
}

// Agrega eventos a los checkboxes
checkboxRojo.addEventListener('click', () => {
  if (!checkboxRojo.checked) {
    cantidadAColor.value = "";
  }
  actualizarVisibilidad();
});

checkboxNegro.addEventListener('click', () => {
  if (!checkboxNegro.checked) {
    cantidadAColor.value = "";
  }
  actualizarVisibilidad();
});

checkboxVerde.addEventListener('click', () => {
  if (!checkboxVerde.checked) {
    cantidadAColor.value = "";
  }
  actualizarVisibilidad();
});



function actualizarVisibilidadParidad() {
  // Verifica si al menos uno de los checkboxes está marcado
  if (checkboxImpar.checked || checkboxPar.checked) {
    ParImparDivCantidad.style.display = "block";
  } else {
    cantidadAParidad.value = "";
    ParImparDivCantidad.style.display = "none";
  }
}

// Agrega eventos a los checkboxes

checkboxImpar.addEventListener('click', () => {
  if (!checkboxImpar.checked && !checkboxPar.checked) {
    cantidadAParidad.value = "";
  }
  actualizarVisibilidadParidad();
});

checkboxPar.addEventListener('click', () => {
  if (!checkboxPar.checked && !checkboxImpar.checked) {
    cantidadAParidad.value = "";
  }
  actualizarVisibilidadParidad();
});


function actualizarVisibilidadDecena() {
  // Verifica si al menos uno de los checkboxes está marcado
  if (checkboxPrimera.checked || checkboxSegunda.checked || checkboxTercera.checked) {
    decDivCantidad.style.display = "block";
  } else {
    cantidadADocena.value = "";
    decDivCantidad.style.display = "none";
  }
}

// Agrega eventos a los checkboxes
checkboxPrimera.addEventListener('click', () => {
  if (!checkboxPrimera.checked && !checkboxSegunda.checked && !checkboxTercera.checked) {
    cantidadADocena.value = "";
  }
  actualizarVisibilidadDecena();
});

checkboxSegunda.addEventListener('click', () => {
  if (!checkboxPrimera.checked && !checkboxSegunda.checked && !checkboxTercera.checked) {
    cantidadADocena.value = "";
  }
  actualizarVisibilidadDecena();
});

checkboxTercera.addEventListener('click', () => {
  if (!checkboxPrimera.checked && !checkboxSegunda.checked && !checkboxTercera.checked) {
    cantidadADocena.value = "";
  }
  actualizarVisibilidadDecena();
});





btnSpin.addEventListener('click', function () {
  //Checar valores
  // let valorNumeroElegido = numeroElegido.value;
  // console.log("Valor numero elegido: " + valorNumeroElegido);
  // let indiceValorElegido = props.items.findIndex(item => item.label === valorNumeroElegido);
  // console.log("Indice del numero elegido: " + indiceValorElegido);

  // console.log("Checkbox rojo status: " + checkboxRojo.checked);
  // console.log('Jalando');
  let numeroDecimalAleatorio = Math.random();
  let numeroAleatorio = Math.floor(numeroDecimalAleatorio * 37);
  console.log("Numero ganador: " + props.items[numeroAleatorio].label);

  /*
  //RESETS
  //numeroGanador.textContent = 'Numero ganador: ';
  colorGanador.textContent = 'Color ganador: ';
  parOImpar.textContent = 'Par o Impar: ';
  docenaGanadora.textContent = 'Docena ganadora: ';

   */

  //Restar lo apostado 
  // if (cantidadANumero != '' && numeroElegido.value  != ''){
  //   balance = balance - cantidadANumero.value;
  //   tagBalance.textContent = 'Balance: ' + balance;
  // };



  if (cantidadAColor != '' && (checkboxRojo.checked == true || checkboxNegro.checked == true)){
    balance += cantidadAColor.value;
    tagBalance.textContent = 'Balance: ' + balance;
  };

  if (cantidadAParidad != '' && (checkboxPar.checked == true || checkboxImpar.checked == true)){
    balance += cantidadAParidad.value;
    tagBalance.textContent = 'Balance: ' + balance;
  };

  if (cantidadADocena != '' && (checkboxPrimera.checked == true || checkboxSegunda.checked == true || checkboxTercera.checked == true)){
    balance += cantidadADocena.value;
    tagBalance.textContent = 'Balance: ' + balance;
  };



  //CONDICIONALES Y CONTROL DE RANGOS
  //Si no eligio ningun numero en especifico lo hace de manera aleatorio, si no lo manda a un numero despues del que eligio
  //numeroAleatorio o indiceValorElegido+1
  // if(indiceValorElegido == -1){
  //   indiceValorElegido = numeroAleatorio;
  // }
  // indiceValorElegido = numeroAleatorio;
  // if (valorNumeroElegido > 36){
    
  //   return alert("Numero fuera de rango");
  // }

  // console.log('Valor numero elegido: ' + numeroElegido.value);
  tagBalance.innerHTML = "Balance: "  +  (balanceActual - balance);

  wheel.spinToItem(numeroAleatorio, 6000, false, 2);

    setTimeout(() => {

      let indiceGanador = wheel.getCurrentIndex();
      let winnerLabel = props.items[indiceGanador].label;
      let winnerColor = props.items[indiceGanador].color;
      let winnerParity = props.items[indiceGanador].paridad;
      let winnerDozen = props.items[indiceGanador].docena;

      /*
      //Reiniciar las etiquetas y las opciones
      // numeroGanador.textContent = 'Numero ganador: ' + winnerLabel;
      colorGanador.textContent = 'Color Ganador: ' + winnerColor;
      parOImpar.textContent = 'Par o Impar: ' + winnerParity;
      docenaGanadora.textContent = 'Docena ganadora: ' + winnerDozen;
      // numeroElegido.value = '';

       */
      


      console.log('Color ganador: ' + winnerColor);
      if(winnerColor == 'Rojo' && checkboxRojo.checked == true){
        balance = balance + (cantidadAColor.value*2);
      };

      if(winnerColor == 'Negro' && checkboxNegro.checked == true){
        balance = balance + (cantidadAColor.value*2);
      };

      if(winnerParity == 'par' && checkboxPar.checked == true){
        balance = balance + (cantidadAParidad.value*2);;
      };

      if(winnerParity == 'impar' && checkboxImpar.checked == true){
        balance = balance + (cantidadAParidad.value*2);
      };

      if(winnerDozen == '1' && checkboxPrimera.checked == true){
        balance = balance + (cantidadADocena.value*3);
      };

      if(winnerDozen == '2' && checkboxSegunda.checked == true){
        balance = balance + (cantidadADocena.value*3);
      };

      if(winnerDozen == '3' && checkboxTercera.checked == true){
        balance = balance + (cantidadADocena.value*3);
      };

        //Resets checkboxes
        checkboxRojo.checked = false;
        checkboxNegro.checked = false; 
        checkboxPar.checked = false; 
        checkboxImpar.checked = false; 
        checkboxPrimera.checked = false; 
        checkboxSegunda.checked = false; 
        checkboxTercera.checked = false; 

        /*
        //Resets cantidades
        // cantidadANumero.value = '';
        cantidadAColor.value = '';
        cantidadAParidad.value = '';
        cantidadADocena.value = '';

         */
      updateBalance(balance);


    }, 6500);
    init();

});


init();
