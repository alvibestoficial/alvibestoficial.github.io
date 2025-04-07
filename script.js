function cambiarTitulo() {
    let h1 = document.querySelector('header h1');
    h1.textContent = 'Microsoft: Revolucionando la Tecnología';
    h1.style.color = '#ff6600';
    h1.style.fontWeight = 'bold';
}

function modificarContenido() {
    let columnas = document.querySelectorAll('.column');
    
    if (columnas[0]) {
        columnas[0].innerHTML = "<h3>Historia Temprana</h3><p>Microsoft comenzó como una pequeña empresa en Albuquerque, Nuevo México, antes de trasladar su sede a Redmond, Washington. La visión de Gates y Allen transformó la computación personal para siempre.</p>";
        columnas[0].style.backgroundColor = '#e6f2ff';
        columnas[0].style.borderRadius = '5px';
        columnas[0].style.padding = '15px';
    }
    
    if (columnas[1]) {
        columnas[1].innerHTML = "<h3>Microsoft Hoy</h3><p>En la actualidad, Microsoft es líder en sistemas operativos, software de productividad, servicios en la nube y tecnologías emergentes como inteligencia artificial y realidad mixta.</p>";
        columnas[1].style.backgroundColor = '#e6f2ff';
        columnas[1].style.borderRadius = '5px';
        columnas[1].style.padding = '15px';
    }
}

function agregarEfectosNavegacion() {
    let navItems = document.querySelectorAll('nav ul li a');
    
    navItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.style.fontSize = '1.1em';
            this.style.transition = 'font-size 0.3s';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.fontSize = '1em';
        });
    });
}

function agregarEventoClick() {
    let h1 = document.querySelector('header h1');
    let colores = ['#ff6600', '#0078d7', '#00cc66', '#9900cc', '#cc0000'];
    let indiceColor = 0;
    
    h1.addEventListener('click', function() {
        indiceColor = (indiceColor + 1) % colores.length;
        this.style.color = colores[indiceColor];
    });
}

document.addEventListener('DOMContentLoaded', function() {
    cambiarTitulo();
    modificarContenido();
    agregarEfectosNavegacion();
    agregarEventoClick();
    
    console.log('Script de manipulación del DOM cargado correctamente');
});