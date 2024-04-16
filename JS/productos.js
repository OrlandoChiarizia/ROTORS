var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("principal_img_cont");
    let demo = document.getElementsByClassName("demo");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < demo.length; i++) {
        demo[i].className = demo[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    demo[slideIndex - 1].className += " active";
}


function mostrarDescripcion() {
    var descripcion = document.getElementById("descripcion");
    if (descripcion.style.display === "none") {
        descripcion.style.display = "block";
    } else {
        descripcion.style.display = "none";
    }
}

function copiarNumero() {
    var numeroTelefono = "123456789";
    navigator.clipboard.writeText(numeroTelefono).then(function() {
        alert("Número de teléfono copiado al portapapeles: " + numeroTelefono);
    }, function(err) {
        console.error('No se pudo copiar el número de teléfono: ', err);
    });
}

function cerrarDescripcion() {
    var descripcion = document.getElementById("descripcion");
    descripcion.style.display = "none";
}

  