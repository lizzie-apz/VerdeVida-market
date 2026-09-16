document.querySelector('#formulario')?.addEventListener('submit', evento => {
  evento.preventDefault();
  const formulario = evento.currentTarget;
  const nombre = formulario.elements.nombre.value.trim();
  const mensaje = formulario.elements.mensaje.value.trim();
  const resultado = document.querySelector('#resultado');
  if (nombre.length < 2 || mensaje.length < 10) {
    resultado.textContent = 'Escribe un nombre de al menos 2 caracteres y un mensaje de al menos 10 caracteres, sin contar espacios al inicio y al final.';
    return;
  }
  resultado.textContent = `${nombre}, tu consulta es válida. Esta demostración no envía ni almacena datos; coordina el envío cuando se confirmen los contactos oficiales.`;
});

document.querySelector('#anio').textContent = new Date().getFullYear();
