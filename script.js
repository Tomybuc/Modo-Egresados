document.addEventListener("DOMContentLoaded", function() {
    
    const elementosParaAnimar = document.querySelectorAll('.animar-entrada');
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elementosParaAnimar.forEach(el => {
        el.classList.add('oculto');
        observador.observe(el);
    });

    console.log("Sitio Modo Egresados - Versión Final Cargada");
});