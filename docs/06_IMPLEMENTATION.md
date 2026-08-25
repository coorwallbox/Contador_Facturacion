# 06 · Implementación — Plan ejecutable por fases

Cada fase se cierra y verifica antes de pasar a la siguiente.

## Fase 1 — Estructura base (HTML/CSS)

- [x] Maquetar el panel principal (`.panel`), el contador (`.contador`) y la sección de vendedores (`.vendedores`).
- [x] Definir estilos base: tipografía, colores, sombras, tarjeta centrada.

**Estado:** Completada.

## Fase 2 — Lógica de animación y renderizado dinámico

- [x] Generar dinámicamente un `<li>` por vendedor desde el array `VENDEDORES` (`main.js`).
- [x] Calcular `VALOR_FINAL` como la suma de las ventas.
- [x] Animar el contador y las barras con easing (`easeInOutCubic`) usando `requestAnimationFrame`.
- [x] Respetar `prefers-reduced-motion` (mostrar valores finales sin animar).

**Estado:** Completada.

## Fase 3 — Mantenimiento periódico de datos

- [x] Actualizar el array `VENDEDORES` (nombres/ventas) cada vez que cambian las cifras de facturación.
- [ ] Ciclo recurrente: no tiene fecha de cierre, se repite en cada actualización de valores.

**Estado:** En curso (recurrente). Ver historial de commits para el detalle de cada actualización.

## Fase 4 — Ajuste de escala de barra y responsive

### 4.1 Límite fijo de la barra de progreso

- [ ] Reemplazar la referencia dinámica `VENTA_MAXIMA` (actualmente `Math.max(...VENDEDORES.map(v => v.ventas))`) por una constante fija: `LIMITE_BARRA = 300`.
- [ ] La barra de cada vendedor se calcula como `(ventas / LIMITE_BARRA) * 100`, quedando llena (100%) solo cuando `ventas` alcance 300.
- [ ] Verificar que ningún vendedor supere el 100% visualmente si sus ventas exceden 300 (definir tope con `Math.min`).

### 4.2 Ajuste responsive

- [ ] Revisar `styles.css`: actualmente no hay *media queries*; el panel usa `max-width:440px` y padding fijo.
- [ ] Definir breakpoints (móvil pequeño / tablet) para:
  - Tamaño de fuente del contador (`.contador`, actualmente `80px` fijo).
  - Padding del panel (`.panel`, actualmente `40px 32px` fijo).
  - Comportamiento del nombre del vendedor en pantallas angostas (truncado/ajuste de línea).
- [ ] Probar en anchos representativos (320px, 375px, 768px).

**Estado:** Pendiente — próxima iteración de código.
