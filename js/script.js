document.addEventListener("DOMContentLoaded", function () {

    const botonSubir = document.querySelector(".subir");

    if (botonSubir) {
        
        function controlarBoton(){
            if (window.scrollY > 300) {
                
                botonSubir.classList.add("visible");
            } else {
                botonSubir.classList.remove("visible");
            }
        }

        window.addEventListener("scroll", controlarBoton);
        controlarBoton();
    }

    // Resaltar enlaces del menú según la sección visible

    const secciones = document.querySelectorAll("main section[id]");
    const enlaces = document.querySelectorAll(".menu a");

    const observador = new IntersectionObserver(function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                enlaces.forEach(function (enlace) {
                    enlace.classList.remove("activo");
                });

                const enlaceActual = document.querySelector(
                    '.menu a[href="#' + entrada.target.id + '"]'
                );

                if (enlaceActual) {
                    enlaceActual.classList.add("activo");
                }

            }

        });

    }, {
        threshold: 0.3
    });

    secciones.forEach(function (seccion) {
        observador.observe(seccion);
    });

});