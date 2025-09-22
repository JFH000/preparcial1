1. Arquitectura de la solución (5%)

Para la nueva funcionalidad se añadió la carpeta /favorites dentro de src/app/ para que existiera el endpoint. Todos los endpoints usados estan usando un Context que a su vez utiliza un hook que permite guardar información siempre y cuando no se recargue. Para guardar los favoritos se utilizó este Context añadiendole la caracteristica de .favorite a un autor si se marcaba como favorito.

2. Parte B: Opción seleccionada y validación (5%)

Se seleccionó pruebas

Los tests simulan cómo un usuario real interactuaría con el formulario para crear un usuario. Usamos @testing-library/react para renderizar el componente y luego buscar elementos en el DOM a través de sus etiquetas. Después, con fireEvent disparamos acciones como escribir en los campos o hacer clic en el botón. Se usaron assertions (expect(...)) para verificar el comportamiento esperado: que los campos existan, que el botón esté deshabilitado cuando falta información o que la función onSubmit reciba los datos correctos al enviar el formulario.

pruebas:

1. verifica que todos los campos requeridos (nombre, fecha de nacimiento, URL de la imagen y descripción) se rendericen correctamente y estén disponibles para interacción.
2. valida el comportamiento al intentar enviar el formulario con los campos vacíos, confirmando que el botón de envío permanece deshabilitado y que no se permite crear un autor en esas condiciones.
3. simula el llenado correcto de todos los campos y confirma que el evento onSubmit se dispare con los datos ingresados, garantizando así el flujo esperado de creación de un nuevo autor.

4. Instrucciones para correr la app y pruebas (5%)

se debe tener instalado node
instalar dependencias: npm i

Correr: npm run dev
navegar a localhost:3000 para utilizar el front
hay una navbar con botones que maneja las rutas
de primeras se ve la lista de autores con un boton para marcar como favorito
si se marcan algunos como favoritos y luego se preciona en el boton de favorites, estos se verán listados

Correr: npm test
para correr las pruebas
