const contador = document.getElementById("contador");
const listaVendedores = document.getElementById("listaVendedores");

/*==================================================
=              CONFIGURACIÓN DEL CONTADOR          =
==================================================*/

// Valor desde donde inicia la animación
const VALOR_INICIAL = 0;

// Duración de la animación (milisegundos)
const DURACION = 3000;

// Lista de vendedores y sus ventas.
// Para modificar: agregar, quitar o editar objetos de este array.
// El HTML se genera automáticamente y el total del contador
// se calcula como la suma de estas ventas.
const VENDEDORES = [
    { nombre: "DISTRIBUIDORA LOS COCHES LA SABANA S.A.S", ventas: 50 },
    { nombre: "Carlos Alberto Martin",                    ventas: 0  },
    { nombre: "Andrés Felipe Saavedra Rojas",             ventas: 65  },
    { nombre: "Isay Duban Laverde Cetina",                ventas: 25  },
    { nombre: "Internos",                                 ventas: 65 } 
];


/*==================================================
=           FIN CONFIGURACIÓN DEL CONTADOR         =
==================================================*/


// Valor final = suma de las ventas de todos los vendedores.
// Si prefieres un total independiente, reemplaza esta línea
// por: const VALOR_FINAL = 3000;
const VALOR_FINAL = VENDEDORES.reduce((suma, v) => suma + v.ventas, 0);

// Venta más alta: se usa para que la barra del líder llegue al 100%
// y las demás sean proporcionales a él.
const VENTA_MAXIMA = Math.max(...VENDEDORES.map(v => v.ventas));


/*==================================================
=        GENERACIÓN DINÁMICA DE LA LISTA           =
==================================================*/

// Crea un <li> por vendedor y guarda referencias a los nodos
// que se actualizan durante la animación (cifra y barra).
const filas = VENDEDORES.map(vendedor => {

    const li = document.createElement("li");
    li.className = "vendedor";

    const fila = document.createElement("div");
    fila.className = "vendedor-fila";

    const nombre = document.createElement("span");
    nombre.className = "vendedor-nombre";
    nombre.textContent = vendedor.nombre;
    nombre.title = vendedor.nombre; // tooltip por si el nombre se corta

    const cifra = document.createElement("span");
    cifra.className = "vendedor-ventas";
    cifra.textContent = "0";

    fila.appendChild(nombre);
    fila.appendChild(cifra);

    const barra = document.createElement("div");
    barra.className = "barra";

    const relleno = document.createElement("div");
    relleno.className = "barra-relleno";
    barra.appendChild(relleno);

    li.appendChild(fila);
    li.appendChild(barra);
    listaVendedores.appendChild(li);

    return { ventas: vendedor.ventas, cifra, relleno };
});


/*==================================================
=                    ANIMACIÓN                      =
==================================================*/

// Ease-in-out cúbico: acelera en la primera mitad
// y desacelera en la segunda mitad.
function easeInOutCubic(x){
    return x < 0.5
        ? 4 * x * x * x
        : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

// Pinta el estado del contador y de cada vendedor
// para un easing dado (0 → inicio, 1 → final).
function pintar(easing){

    const valorActual = Math.floor(
        VALOR_INICIAL + (VALOR_FINAL - VALOR_INICIAL) * easing
    );
    contador.textContent = valorActual.toLocaleString("es-CO");

    filas.forEach(fila => {
        const ventasActuales = Math.floor(fila.ventas * easing);
        fila.cifra.textContent = ventasActuales.toLocaleString("es-CO");
        fila.relleno.style.width = ((fila.ventas / VENTA_MAXIMA) * 100 * easing) + "%";
    });
}

let inicio = null;

function animarContador(timestamp){

    if(!inicio){
        inicio = timestamp;
    }

    const progreso = timestamp - inicio;

    const porcentaje = Math.min(progreso / DURACION, 1);

    // Efecto de aceleración/desaceleración
    const easing = easeInOutCubic(porcentaje);

    pintar(easing);

    if(porcentaje < 1){
        requestAnimationFrame(animarContador);
    }else{
        pintar(1); // asegura los valores exactos al terminar
    }

}

// Respeta la preferencia del sistema de reducir movimiento:
// en ese caso se muestran los valores finales sin animar.
if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    pintar(1);
}else{
    requestAnimationFrame(animarContador);
}