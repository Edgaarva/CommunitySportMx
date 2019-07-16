//Inputs
let inputNombre = document.getElementById('inputNombre')
let inputTelefono = document.getElementById('inputTelefono')
let inputEmail = document.getElementById('inputEmail')
//etiqueta p
let mostrarNombre = document.getElementById('nombre')
let mostrarTelefono = document.getElementById('telefono')
let mostrarEmail = document.getElementById('email')
//boton
let boton = document.getElementById('boton')
//card
let card = document.getElementById('card')


const accion = () => {

    let textoNombre = inputNombre.value
    let textoTelefono = inputTelefono.value
    let textoEmail =  inputEmail.value

    mostrarNombre.innerHTML = textoNombre
    mostrarTelefono.innerHTML = textoTelefono
    mostrarEmail.innerHTML = textoEmail

    //aparecer card
    card.classList.remove('desaparecer')

}       
    
    
    boton.addEventListener('click', accion)