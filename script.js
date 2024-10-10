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

typeText(); // Inicia el efecto

function mensajeDeEnvio(){
    window.alert("Mensaje enviado. Muchas Gracias");
}