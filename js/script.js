let total = 0;
let movimientos = [];


if(localStorage.getItem("total")){
total = parseInt(localStorage.getItem("total"));
movimientos = JSON.parse(localStorage.getItem("movimientos"));
actualizarPantalla();
}


document.querySelectorAll('.lista-Dinero img').forEach(img => {
img.addEventListener('click', () => {
const valor = parseInt(img.getAttribute('data-valor'));
total += valor;
movimientos.push({tipo: "Ahorro", cantidad: valor});
guardarLS();
actualizarPantalla();
});
});


document.getElementById('btnRetirar').addEventListener('click', () => {
const cantidad = parseInt(document.getElementById('cantidadRetiro').value);
if(cantidad > total){
alert("No hay suficiente dinero para retirar");
return;
}
total -= cantidad;
movimientos.push({tipo: "Retiro", cantidad});
guardarLS();
actualizarPantalla();
});


function actualizarPantalla(){
document.getElementById('total').textContent = total;
const historial = document.getElementById('historial');
historial.innerHTML = "";


movimientos.forEach(m => {
const li = document.createElement('li');
li.textContent = `${m.tipo}: $${m.cantidad}`;
historial.appendChild(li);
});
}


function guardarLS(){
localStorage.setItem("total", total);
localStorage.setItem("movimientos", JSON.stringify(movimientos));
}