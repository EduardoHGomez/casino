import {Wheel} from 'https://cdn.jsdelivr.net/npm/spin-wheel@4.3.0/dist/spin-wheel-esm.js';

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
const wheel = new Wheel(container, props);
wheel.borderWidth = 12;
wheel.isInteractive = false;
wheel.lineColor = '#D4AF37';

wheel.radius = 0.9;

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
let cantidadAColor = document.getElementById('cantidadAColor');
let checkboxPar = document.getElementById('checkboxPar');
let checkboxImpar = document.getElementById('checkboxImpar');
let cantidadAParidad = document.getElementById('cantidadAParidad');
let checkboxPrimera = document.getElementById('checkboxPrimera');
let checkboxSegunda = document.getElementById('checkboxSegunda');
let checkboxTercera = document.getElementById('checkboxTercera');
let cantidadADocena = document.getElementById('cantidadADocena');

let tagBalance = document.getElementById('tagBalance');

let balance = 1000;
tagBalance.textContent = 'Balance: ' + balance;




btnSpin.addEventListener('click', function () {
  //Checar valores
  // let valorNumeroElegido = numeroElegido.value;
  // console.log("Valor numero elegido: " + valorNumeroElegido);
  // let indiceValorElegido = props.items.findIndex(item => item.label === valorNumeroElegido);
  // console.log("Indice del numero elegido: " + indiceValorElegido);

  console.log("Checkbox rojo status: " + checkboxRojo.checked);
  console.log('Jalando');
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
    balance = balance - cantidadAColor.value;
    tagBalance.textContent = 'Balance: ' + balance;
  };

  if (cantidadAParidad != '' && (checkboxPar.checked == true || checkboxImpar.checked == true)){
    balance = balance - cantidadAParidad.value;
    tagBalance.textContent = 'Balance: ' + balance;
  };

  if (cantidadADocena != '' && (checkboxPrimera.checked == true || checkboxSegunda.checked == true || checkboxTercera.checked == true)){
    balance = balance - cantidadADocena.value;
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
        tagBalance.textContent = 'Balance: ' + balance;
      };

      if(winnerColor == 'Negro' && checkboxNegro.checked == true){
        balance = balance + (cantidadAColor.value*2);
        tagBalance.textContent = 'Balance: ' + balance;
      };

      if(winnerParity == 'par' && checkboxPar.checked == true){
        balance = balance + (cantidadAParidad.value*2);
        tagBalance.textContent = 'Balance: ' + balance;
      };

      if(winnerParity == 'impar' && checkboxImpar.checked == true){
        balance = balance + (cantidadAParidad.value*2);
        tagBalance.textContent = 'Balance: ' + balance;
      };

      if(winnerDozen == '1' && checkboxPrimera.checked == true){
        balance = balance + (cantidadADocena.value*3);
        tagBalance.textContent = 'Balance: ' + balance;
      };

      if(winnerDozen == '2' && checkboxSegunda.checked == true){
        balance = balance + (cantidadADocena.value*3);
        tagBalance.textContent = 'Balance: ' + balance;
      };

      if(winnerDozen == '3' && checkboxTercera.checked == true){
        console.log('Gano');
        console.log('balance 1: ' + balance);
        balance = balance + (cantidadADocena.value*3);
        console.log('balance 2: ' + balance);
        tagBalance.textContent = 'Balance: ' + balance;
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

    }, 6500);
});