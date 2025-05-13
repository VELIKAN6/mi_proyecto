// Carga diferida de recursos no críticos
window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
    }
    
    // Carga perezosa de módulos
    import('./lazy-module.js')
        .then(module => {
            module.init();
        })
        .catch(err => {
            console.error('Error cargando módulo:', err);
        });
});

// Ejemplo de fetch optimizado
document.getElementById('app').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/data', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'same-origin'
        });
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
});