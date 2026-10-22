/*El pùtisimo Java para que no se cague (no pude para que se sigan agregando varias veces, no hay tiempo)
Culpa de Javi -c-*/

(function() {
    const BOTONES = document.querySelectorAll(".boton-seleccionar");
    const FILAS = document.querySelectorAll("tbody tr");
    const SPANTOTAL = document.getElementById("total-precio");
    const CONTENEDORRESUMEN = document.getElementById("resumen-carrito");

    let total = 0;

    BOTONES.forEach(function(boton, index) {
        boton.addEventListener("click", function() {
            const FILA = FILAS[index];

            let celdaPrecio = FILA.querySelector(".importe");
            let precioNum = 0;

            if (celdaPrecio) {
                precioNum = parseInt(celdaPrecio.textContent);
            } else {
                celdaPrecio = FILA.querySelector(".gratis");
            }

            if (boton.textContent === "Agregar") {
                boton.textContent = "Quitar";
                total += precioNum;
            } else {
                boton.textContent = "Agregar";
                total -= precioNum;
            }

            SPANTOTAL.textContent = total;
            actualizarResumen();
        });
    });

    function actualizarResumen() {
        let lista = "<ul>";

        BOTONES.forEach(function(boton, index) {
            if (boton.textContent === "Quitar") {
                const FILA = FILAS[index];
                let nombre = "";
                const elementoB = FILA.querySelector("b");

                if (elementoB) {
                    nombre = elementoB.textContent;
                } else {
                    const elementoP = FILA.querySelector("p");

                    if (elementoP) {
                        nombre = elementoP.textContent;
                    }
                }

                let celdaPrecio = FILA.querySelector(".importe");

                if (!celdaPrecio) {
                    celdaPrecio = FILA.querySelector(".gratis");
                }

                lista += "<li>" + nombre.trim() + " (" + celdaPrecio.textContent.trim() + ") </li>";
            }
        });

        lista += "</ul>";
        CONTENEDORRESUMEN.innerHTML = lista;
    }
})();

function comprar() {
    const ALERTATOTAL = document.querySelector(".alerta");
    const TOTALACTUAL = Number(document.getElementById("total-precio").textContent);

    const BOTONES = document.querySelectorAll(".boton-seleccionar");
    const FILAS = document.querySelectorAll("tbody tr");

    let haySeleccion = false;
    let hayGratis = false;

    BOTONES.forEach(function(boton, index) {
        if (boton.textContent.trim() === "Quitar") {
            haySeleccion = true;

            if (FILAS[index].querySelector(".gratis")) {
                hayGratis = true;
            }
        }
    });

    if (!haySeleccion) {
        ALERTATOTAL.textContent = "¡Agrega una opción en las tarifas!";
        ALERTATOTAL.style.color = "red";
    } else if (hayGratis) {
        ALERTATOTAL.textContent = "¡Has agregado una de las opciones gratis a la compra! Total: " + TOTALACTUAL + " €";
        ALERTATOTAL.style.color = "orangered";
    } else {
        ALERTATOTAL.textContent = "¡Compra confirmada! Total: " + TOTALACTUAL + " €";
        ALERTATOTAL.style.color = "green";
    }
}
