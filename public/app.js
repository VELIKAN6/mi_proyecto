document.getElementById('btnFetch').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/api/data');
        const data = await response.json();
        document.getElementById('resultado').innerHTML = `
            <h3>Respuesta del servidor:</h3>
            <p>${data.message.replace("Datos desde el backend", "Información personalizada")}</p>
        `;
    } catch (error) {
        document.getElementById('resultado').textContent = '😢 Error al conectar con el servidor';
    }
});