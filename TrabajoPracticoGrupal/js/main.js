const boton = document.getElementById("btn-modo");
boton.addEventListener("click", () => {
 document.body.classList.toggle("oscuro");
});

//validacion de formulario de contacto
const formulario = document.getElementById ("form-contacto");
const nombre = document.getElementById ("Nombre");
const email = document.getElementById ("email");
const mensaje = document.getElementById ("Mensaje");
const mensajeForm = document.getElementById("mensaje-form");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const nombreIngresado = Nombre.value.trim();
    const emailIngresado = email.value.trim();
    const textoIngresado = Mensaje.value.trim();

    mensajeForm.classList.remove("error", "exito");
    
    if (nombreIngresado === "" || emailIngresado === "" || textoIngresado === "") {
    mensajeForm.textContent = "Completa todos los campos.";
    mensajeForm.classList.add("error");
    return;
}
    if ( !emailIngresado.includes("@") || !emailIngresado.includes(".")) {
    mensajeForm.textContent = "Ingrese un email válido.";
    mensajeForm.classList.add("error");
    return;
}
mensajeForm.textContent = "¡Mensaje enviado correctamente!";
mensajeForm.classList.add("exito");
formulario.reset();

})
