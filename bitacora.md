# Bitácora – Landing Los Días Raros
**Alumno/a:** Hugo Ortega Gimeno
**Funcionalidad extra asignada:** Contador de caracteres en el formulario con evento input y .length

## Prompts que he usado
- Quiero que crees una landing page completa para un grupo de música indie ficticio llamado Los Días Raros.
- La web debe estar hecha con HTML, CSS y JavaScript, y debe tener un diseño moderno, atractivo y responsive.
- Necesito que tenga un menú hamburguesa, formulario de contacto, validación y contador de caracteres.
- Añade redes sociales a la navbar y mejora el hover de las tarjetas de los miembros.
- Quiero que sea una landing page realista, con imágenes, texto e información del grupo, y que pueda abrirse localmente.
- Explícame cómo funciona la validación del formulario, el contador de caracteres y el diseño responsive.

## Qué he hecho
He creado una landing page para un grupo ficticio llamado Los Días Raros. La idea era que pareciera una web real de banda indie, con portada, historia, música, conciertos, formulario y un diseño responsive.

La página está hecha con HTML, CSS y JavaScript puro. He ido ajustando cosas según necesitaba, como el menú móvil, las tarjetas con hover y la validación del formulario.

## Cambios importantes
### 1. Navbar con redes sociales
Añadí iconos de Instagram, Spotify y YouTube dentro del menú. En escritorio quedan a la derecha y en móvil dentro del menú desplegable.

### 2. Tarjetas de los miembros
Mejoré el estilo para que tuviesen más movimiento. Al pasar el ratón, suben un poco, la foto hace zoom y aparece más información.

### 3. Ajustes para móvil
Modifiqué el diseño para que se viera bien en pantallas pequeñas. El menú pasa a hamburguesa y el contenido se apila para evitar que se desborde.

### 4. Formulario
Incluí la validación del formulario y el contador del mensaje. Los errores aparecen dentro de la página, no con alert.

## Problemas que me he encontrado
| Qué pasaba | Cómo lo he resuelto |
| --- | --- |
| El menú en móvil no se mostraba bien | Ajusté la clase .is-open y el estado aria-expanded para abrir y cerrar el menú. |
| El contador no marcaba bien el número | Usé el evento input y la propiedad .length para contar caracteres. |
| Las tarjetas no tenían dinamismo | Añadí hover, transform y un bloque extra con más información. |
| La página no se veía bien en móvil | Ajusté el @media para que todo se apilara y no hubiese scroll horizontal. |

## Cómo funciona lo importante
### Validación del formulario
Cuando pulso enviar, primero evito que la página recargue. Luego compruebo que el nombre no esté vacío, que el correo tenga formato válido y que el mensaje no esté vacío ni pase de 300 caracteres. Si falla algo, muestro un mensaje de error debajo del campo.

### Funcionalidad extra
El contador de caracteres funciona con el evento input. Cada vez que escribo en el textarea, miro la longitud del texto con .length y la muestro como "0 / 300 caracteres".

### @media
El @media cambia el diseño para pantallas pequeñas. A partir de 768px, la navegación pasa a menú hamburguesa y el contenido se reorganiza para que todo quede más cómodo en móvil.

## Resumen final
He aprendido que HTML organiza la estructura, CSS da estilo y JavaScript hace que la página reaccione. La landing page queda bastante completa y funcional, y además me ha servido para entender mejor cómo se trabaja con diseño responsive y formularios.

## Archivos del proyecto
- index.html
- css/styles.css
- js/script.js
- images/

## Preguntas rápidas
1. ¿Qué hace el evento input?  
   Detecta cuando el usuario escribe o borra texto en un campo.

2. ¿Para qué sirve .length?  
   Para saber cuántos caracteres tiene un texto.

3. ¿Qué hace el menú hamburguesa?  
   Muestra u oculta el menú en pantallas pequeñas.

4. ¿Qué hace el @media?  
   Cambia el diseño según el ancho de la pantalla.

5. ¿Qué diferencia hay entre HTML, CSS y JS?  
   HTML estructura, CSS da estilo y JavaScript hace que la página reaccione.

