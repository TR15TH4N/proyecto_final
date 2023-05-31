//variables de formulario
const enviar=document.querySelector("#enviar");
const email=document.querySelector("#email")
const pais=document.querySelector("#pais");
const sugerencias=document.querySelector("#sugerencias")
const resultados=document.querySelector('.resultados');

const miFormulario = document.querySelector(".miFormulario")
enviar.addEventListener('click', validaFormulario);

function validaFormulario() {
    var s = email.value;
    var filto = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!filto.test(s)) {
        resultados.innerText="Introduce correo valido";
        email.focus();
        return 0;
    }

    if(pais.selectedIndex == 0) {
        resultados.innerText = "Selecciona tu pasís";
        return 0;
    }

    var pregunta1 = document.querySelector('input[name="pregunta1"]:checked');

    if (!pregunta1) {
        resultados.innerText = "Por favor, selecciona una respuesta para la pregunta 1.";
        return 0;
    }

    var pregunta2 = document.querySelector('input[name="pregunta2"]:checked');

    if (!pregunta2) {
        resultados.innerText = "Por favor, selecciona una respuesta para la pregunta 2.";
        return 0;
    }
    if (sugerencias.value.trim() === '') {
        resultados.innerText = 'Por favor, escribe tus sugerencias.';
        sugerencias.focus();
        return 0;
    }

    resultados.style.backgroundColor = 'green';
    resultados.innerText="Muchas gracias por enviar el formulario";
    alert("Gracias por tu contribucion")
    window.location.href = "../Paginas/Index.html";
    function greetings(){ fvalida.submit();}
}
