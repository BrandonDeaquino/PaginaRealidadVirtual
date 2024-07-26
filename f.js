const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe por defecto

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    const datos = `Nombre: ${nombre} ${apellido}\nCorreo electrónico: ${email}\nMensaje: ${mensaje}`;

    alert(datos);
});