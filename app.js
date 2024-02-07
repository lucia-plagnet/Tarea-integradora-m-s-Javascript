
// Efecto de cambio de imagen:
// ● Agrega una función a la imagen de la sección de bienvenida.
// ● Cambia la imagen por otra cuando el mouse está sobre ella.
// ● Agrega una función para revertir la imagen a la original cuando el
// mouse sale.

var imagen = document.getElementById('img');

let segundaImagen = `IMAGENES/FOTO2.jpg`;




imagen.addEventListener("mouseover", () => {
    imagen.src = "IMAGENES/FOTO2.jpg";
});

imagen.addEventListener("mouseout", () => {
    imagen.src = "IMAGENES/FOTO.jpg";
});



// Mostrar más información en la sección de My Portfolio:
// ● Agrega un botón "Saber más" a cada tarjeta de la sección de Portfolio.
// ● Añade un estilo a la cards para mostrar una caja superpuesta con más
// texto al hacer click en ‘saber más’, la misma incluye un botón de
// GitHub en la caja superpuesta que lleva al repositorio. Agrega un botón
// "Cerrar" en la caja superpuesta para cerrarla y volver a la vista original.


var verMas = document.querySelectorAll('.verMas');
var cerrar = document.querySelectorAll('.cerrar');
var contenedorVerMas = document.querySelectorAll('.contenedor-tarjetas.segunda-clase');


verMas.forEach((verMasButton, index) => {
    verMasButton.addEventListener('click', () => {
        contenedorVerMas[index].style.display = 'block';
    });

    cerrar[index].addEventListener('click', () => {
        contenedorVerMas[index].style.display = 'none';
    });
});

// Agrega un evento al formulario. Dentro del evento, muestra un mensaje
// "Enviado con éxito". al hacer click en el botón de ‘enviar’ Dicho mensaje
// debe mostrarse debajo del botón en la misma página


document.getElementById('contactform').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var text = document.getElementById('text').value;

  

    if (!name || !number || !email || !password || !text) {
        document.getElementById('respuesta').style.color = 'red';
        document.getElementById('respuesta').innerText = 'Por favor, complete el formulario';
    } else {
        document.getElementById('respuesta').style.color = 'green';
        document.getElementById('respuesta').innerText = 'Mensaje enviado con éxito';
    }
});


// Slider para las cards en la sección "What I Do":
// ● Agrupa todas las cards en una fila utilizando un contenedor. Establece
// un ancho fijo al contenedor para que solo se muestre una parte.
// ● Crea un ‘slider’ agregando así botones de desplazamiento (izquierda y
// derecha) para cambiar la posición del contenedor y mostrar más cards.

var slider= document.querySelector('.tarjetas');
var tarjetas = document.querySelectorAll('.tarjetas div');
var tarjetasBtn1 = document.querySelector('.tarjetasBtn1');
var tarjetasBtn2 = document.querySelector('.tarjetasBtn2');
var index = 0;
var tarjetasPorSlide = 3; 

function imagenSlider(direccion) {
    index += direccion * tarjetasPorSlide;

    if (index < 0) {
        index = 0;
    } else if (index >= tarjetas.length - tarjetasPorSlide + 1) {
        index = tarjetas.length - tarjetasPorSlide;
    }

    var desplazamiento = index * (330 + 35);

    slider.style.transform = `translateX(-${desplazamiento}px)`;
}

imagenSlider(0);

tarjetasBtn1.addEventListener('click', function() {
    imagenSlider(-1);
});

tarjetasBtn2.addEventListener('click', function() {
    imagenSlider(1);
});