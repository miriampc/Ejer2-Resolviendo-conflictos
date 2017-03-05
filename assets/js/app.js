function calcularImc(){
  var name=document.getElementById('name').value;
  var peso=document.getElementById('peso').value;
  var talla=document.getElementById('talla').value;
  var imc=document.getElementById('imc');
  var mostrar="<br><h2>Tus datos</h2><ul><li>Nombre: "
              +name+"</li><li>Peso: "+peso+"</li><li>Talla: "+talla+"</li><li>IMC: "+(peso/talla).toFixed(2)+"</li></ul>";
  imc.innerHTML= mostrar;
}
