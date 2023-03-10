/* Hace que nuestro menú se quede fijo al momento de hacer scroll */
/* window.onscroll = function () {
    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20) {
        header.classList.add('nav_mod');
    }
    else if (scroll < 20) {
        header.classList.remove('nav_mod');
    }
} */

const menu = document.querySelector('.menu');
const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', () => {
    console.log('Entro')
    menu.classList.toggle('active');
})

/* Animaciones al momento de hacer scroll */
AOS.init({
    duration: 1000,
});

/* Preloader */
window.addEventListener('load', function () {
    document.getElementById('contenedor-preloader').classList.toggle('contenedor-preloader2');
});


/* Eventos de los inputs y Textareas */
const datos = {
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    mensaje: ''
}

const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const empresaInput = document.querySelector('#empresa');
const telefenoInput = document.querySelector('#telefono');
const mensajeTextArea = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombreInput.addEventListener('input', leerTexto);
emailInput.addEventListener('input', leerTexto);
empresaInput.addEventListener('input', leerTexto);
telefenoInput.addEventListener('input', leerTexto);
mensajeTextArea.addEventListener('input', leerTexto);


/* El evento de Submit */
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validar el Formulario
    const { nombre, email, empresa, telefono, mensaje } = datos;

    if (nombre === '' || email === '' || empresa === '' || telefono === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; // Corta la ejecucion del codigo
    }

    const serviceID = 'service_v2l92qm';
    const templateID = 'template_1jvhw4i';

    // Enviar el correo electrónico utilizando EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            // El correo electrónico se ha enviado correctamente
            mostrarAlerta('Mensaje enviado correctamente');
            limpiarFormulario();
        }, (err) => {
            // Ha habido un error al enviar el correo electrónico
            mostrarAlerta('Hubo un error al enviar el correo', true);
            limpiarFormulario();
        });
});


function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
};

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    // Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);

};

function limpiarFormulario() {
    datos.email = '';
    datos.mensaje = '';
    datos.nombre = '';
    datos.empresa = '';
    datos.telefono = '';

    this.nombreInput = '';
    this.emailInput = '';
    this.empresaInput = '';
    this.telefenoInput = '';
    this.mensajeTextArea = '';

    document.querySelector('#nombre').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#empresa').value = '';
    document.querySelector('#telefono').value = '';
    document.querySelector('#mensaje').value = '';
    document.querySelector('.formulario').value = '';
};