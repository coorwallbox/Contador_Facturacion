# 00 · README — Metodología y reglas globales

## Qué es este proyecto

**Contador_Facturacion** es una página estática (sin backend, sin build) que anima:

- Un **contador total** de facturación (`#contador`).
- Una **lista de vendedores** (`#listaVendedores`) con su cifra individual y una barra de progreso proporcional.

Stack: HTML + CSS + JavaScript vanilla. Archivos: `Contador.html`, `main.js`, `styles.css`.

## Fuente de verdad de los datos

Toda la información de negocio vive en un único lugar: el array `VENDEDORES` en `main.js`.

```js
const VENDEDORES = [
    { nombre: "...", ventas: 0 },
    ...
];
```

A partir de ese array se derivan automáticamente:

- `VALOR_FINAL` → suma de todas las `ventas` (total del contador).
- El ancho de cada barra → proporcional a un límite de referencia (ver `06_IMPLEMENTATION.md`, Fase 4).

**Regla:** para actualizar cifras de facturación, solo se edita ese array. No se debe tocar la lógica de animación ni el DOM manualmente.

## Reglas globales de documentación

Este proyecto usa el protocolo de documentación descrito en `01_INDEX.md`:

- **Carga inicial obligatoria** al retomar el proyecto: `01_INDEX.md` + `07_PROGRESO_RESUMEN.md`.
- **Documentos activos**: se mantienen siempre actualizados junto con el código.
- **Documentos bajo demanda**: solo se crean cuando surge la necesidad concreta que los justifica (ver tabla en `01_INDEX.md`).
- `02` queda reservado: no se crea hasta tener una necesidad repetida y definida.

## Convenciones de trabajo

- Identificadores (variables/funciones) en inglés; comentarios de código en español.
- Cambios de código pequeños se entregan como buscar/reemplazar; archivos nuevos o cambios estructurales, completos.
- Desarrollo en fases numeradas y secuenciales; cada fase se cierra y verifica antes de pasar a la siguiente (ver `06_IMPLEMENTATION.md`).
