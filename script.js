//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega

//------Animación del scroll al clickear en los links del navbar------//

document.querySelectorAll('button[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//------Efecto de tipeo en el titulo presentación------//
const textSliderItems = "Desarrollador Web, Diseñador Web, Desarrollador Front-End".split(", ");
const textoDinamico = document.querySelector('.texto-dinamico');
let index = 0;
let currentText = '';
let isDeleting = false;
let cursorVisible = true;
const cursorBlinkInterval = 500; // Intervalo de parpadeo del cursor

function typeText() {
    const fullText = textSliderItems[index];
    
    if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
    } else {
        currentText = fullText.substring(0, currentText.length + 1);
    }

    textoDinamico.textContent = currentText;

    if (!isDeleting && currentText === fullText) {
        setTimeout(() => isDeleting = true, 2000); // Espera 2 segundos antes de empezar a borrar
    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        index = (index + 1) % textSliderItems.length; // Cambia al siguiente texto
    }

    setTimeout(typeText, isDeleting ? 100 : 200); // Cambia la velocidad de escritura/borrado
}

// Cursor parpadeante
setInterval(() => {
    cursorVisible = !cursorVisible;
    textoDinamico.style.borderRight = cursorVisible ? '2px solid white' : 'none';
}, cursorBlinkInterval);

typeText(); // Inicia el efecto

// Validación del formulario
document.querySelector('.contacto__formulario').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validar campos
    if (!nombre || !email || !asunto || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Si todo es válido, puedes enviar el formulario o realizar otra acción
    alert('Formulario enviado correctamente.');
    // Aquí puedes agregar el código para enviar el formulario si es necesario
});