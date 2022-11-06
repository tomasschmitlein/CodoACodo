const seniority = document.getElementById('seniority');
const cantTickets = document.getElementById('tickets');
const totalAPagar = document.querySelector('#totalPagar');
const botonResumen = document.getElementById('btnResumen');
const botonReset = document.getElementById('btnReset');
const valorTicket = 200;
const dctoEstudiante = 0.80;
const dctoTrainee = 0.50;
const dctoJunior = 0.20;

botonResumen.addEventListener('click', validaciones);
botonReset.addEventListener('click', ()=>{
    totalAPagar.textContent = 'Total a pagar: $';
    cantTickets.value = '0';
    seniority.value = 9;
});

function montoTotalTickets(){
    let monto = valorTicket * cantTickets.value;

    if((seniority.value) == 1){
        monto = monto - (monto * dctoEstudiante);
        totalAPagar.innerHTML = `Total a pagar: $${monto}`;
    }else if((seniority.value) == 2){
        monto = monto - (monto * dctoTrainee);
        totalAPagar.innerHTML = `Total a pagar: $${monto}`;
    }else if((seniority.value) == 3){
        monto = monto - (monto * dctoJunior);
        totalAPagar.innerHTML = `Total a pagar: $${monto}`;
    }else{
        totalAPagar.innerHTML = `Total a pagar: $${monto}`;
    }
}

function validaciones(){
    let email = document.getElementById("email").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(nombre == ""){
        alert("El campo nombre es obligatorio")
        return;
    }if(!(emailRegex.test(email))){
        alert("Email incorrecto, verifique")
       return;
    }if(apellido == ""){
        alert("El campo apellido es obligatorio")
        return;
    }
    montoTotalTickets();
}