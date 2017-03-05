var nombre = document.getElementById('name');
var peso = document.getElementById('peso');
var talla = document.getElementById('talla');
var calculo = document.getElementById('submit');

calculo.onclick = function (){
  if ((peso.value.length == 0) || (talla.value.length == 0)){
    alert("Por favor completar los campos de peso y/o talla");
  } else {
  alert ("Hola " + nombre.value + " tu IMC es de " + (peso.value / (talla.value * talla.value)).toFixed(2));
  }
}
