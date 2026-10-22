    /* Variable donde guardamos el dinero total del alquiler de Bicis 
    (Se lo lleva hacienda el 40% :,v) */
    let total = 0;

/* Aqui para actualizar el preio (digo yo :v)*/
function actualizarTotal() {
    const ELEMENTOCANTIDAD = document.getElementById('total-precio');
    ELEMENTOCANTIDAD.textContent = total;
}

// Parte de sumar aca abajo (que se lo explique el function -c-)

    function sumar(numeroBici, precio) {
    const ELEMENTOCANTIDAD = document.getElementById('cantidad-' + numeroBici);
    let cantidad = parseInt(ELEMENTOCANTIDAD.textContent);

    cantidad++;
    ELEMENTOCANTIDAD.textContent = cantidad;

    total += Number(precio);
    actualizarTotal();
}

// Parte de resta raca abajo (que se lo explique el function -c-)

function restar(numeroBici, precio) {
    const ELEMENTOCANTIDAD = document.getElementById('cantidad-' + numeroBici);
    let cantidad = parseInt(ELEMENTOCANTIDAD.textContent);

    if (cantidad > 0) {
        cantidad--;
        ELEMENTOCANTIDAD.textContent = cantidad;

        total -= Number(precio);
        actualizarTotal();
    }
}

/* Aqui para saber si ya se alquilo*/ 

function alquilar() {
    let alertaSeccion = document.querySelector('.alerta');

    if (total === 0) {
        
        alertaSeccion.innerText = 'Por favor, selecciona al menos una bicicleta antes de continuar.';
        alertaSeccion.style.color = "red";
    } else {
        alertaSeccion.style.color = "green";
        alertaSeccion.innerText = '¡Reserva realizada con éxito! El total a pagar en tienda es: ' + total +' € (Recuerda traer la fianza de 50 € o tu DNI para facilitar el Trámite).';
    }
}
