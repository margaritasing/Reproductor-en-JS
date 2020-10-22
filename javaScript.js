/*
SITIOS DE REGISTRO DE DOMINIO 

https://www.freenom.com/es/index.html?lang=es
https://nic.ar/es
https://www.buy.ooo/

HOSTING GRATUITOS
https://www.biz.nf/
https://neocities.org/
*/

/*<!--SEGUNDO EJEMPLO-->*/
function iniciar(){
	edad=document.getElementById("miedad");
	edad.addEventListener("change",cambiarrango, false);
	document.informacion.addEventListener("invalid", validacion, true);
	document.getElementById("enviar").addEventListener("click", enviar, false);
	document.informacion.addEventListener("input",controlar,false);
}

function cambiarrango(){
	var salida=document.getElementById("rango");
	var calc=edad.value-20;
	if (calc<20) {
		calc=0;
		edad.value=20;
	}
	salida.innerHTML=calc+' a '+edad.value;
}

function validacion(e){
	var elemento=e.target;
	elemento.style.background='#FFDDDD';
}

function enviar(){
	var elemento=document.getElementById("usuario");
	var valido=document.informacion.checkValidity();
	if (valido) {
		document.informacion.submit();
	}else{
		if (elemento.validity.patternMismatch || elemento.validity.valueMising) {
			alert('El nombre de usuario es incorrecto o tiene menos de 3 caracteres');
		}
	}
}

function controlar(e){
	var elemento=e.target;
	if (elemento.validity.valid) {
		elemento.style.background='green';
	}else{
		elemento.style.background='#FFDDDD';
	}
}

window.addEventListener('load', iniciar, false);

/*<!--PRIMER EJEMPLO-->
function iniciar(){
	nombre=document.getElementById("nombre");
	apellido=document.getElementById("apellido");
	nombre.addEventListener("input", validacion, false);
	apellido.addEventListener("input", validacion, false);
	validacion();
}

function validacion(){
	
	if (nombre.value=='') {
		nombre.setCustomValidity("Debe ingresar su NOMBRE");
		nombre.style.background='#de4a4a';
		nombre.style.color='#04840e';
	}else{
		nombre.setCustomValidity('');
		nombre.style.background='#40f993'
	}

	if (apellido.value=='') {
		apellido.setCustomValidity("Debe ingresar su APELLIDO");
		apellido.style.background='#de4a4a';
		apellido.style.color='#04840e';
	}else{
		apellido.setCustomValidity('');
		apellido.style.background='#40f993'
	}
*/
	/*
	while (nombre.value==''|| apellido.value==''){
		nombre.setCustomValidity("Debe ingresar un dato correcto");
		nombre.style.background='#de4a4a';
		nombre.style.color='#de4a4a';

		if (nombre.value=='') {
			nombre.setCustomValidity('');
			nombre.style.background='#40f993'
		}else{
			apellido.setCustomValidity('');
			apellido.style.background='#40f993'
		}
	
}
window.addEventListener('load', iniciar, false);
}*/