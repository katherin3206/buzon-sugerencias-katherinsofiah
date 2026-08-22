const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();
  const datos = new FormData(formulario);

  await fetch('/api/sugerencias', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nombre: datos.get('nombre'),
      categoria: datos.get('categoria'),
      mensaje: datos.get('mensaje'),
    }),
  });

  formulario.reset();
  alert('¡Gracias por tu sugerencia!');
});
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});