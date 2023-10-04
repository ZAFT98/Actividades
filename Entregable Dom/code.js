document.addEventListener('DOMContentLoaded', function () 
{
    // --- Función para crear un elemento de lista --- //
    function createListItem(text) 
    {
        const li = document.createElement('li');
        li.textContent = text;
        return li;
    }

    // --- Función para crear un elemento div con contenido de texto --- //
    function createDivWithText(id, text) 
    {
        const div = document.createElement('div');
        div.id = id;
        const p = document.createElement('p');
        p.textContent = text;
        div.appendChild(p);
        return div;
    }

    // --- Función para crear un elemento section con un encabezado h2 --- //
    function createSectionWithHeading(id, headingText) 
    {
        const section = document.createElement('section');
        section.id = id;

        const h2 = document.createElement('h2');
        h2.textContent = headingText;

        section.appendChild(h2);

        return section;
    }

    // --- Array de consejos para cuidar tus ojos --- //
    const tipsData = 
    [
        "Descansa tus ojos cada 20 minutos al mirar una pantalla.",
        "Evita la luz brillante y el parpadeo de las pantallas.",
        "Come alimentos ricos en vitaminas A y C para mantener tus ojos saludables."
    ];

    // --- Array de herramientas útiles --- //
    const toolsData = 
    [
        "Prueba de visión",
        "Ejercicios oculares"
    ];

    const main = document.querySelector('main');

    // --- Creamos elementos section para las secciones de información, consejos y herramientas --- //
    const informationSection = createSectionWithHeading('information', 'Información sobre la salud visual');
    const tipsSection = createSectionWithHeading('tips', 'Consejos para cuidar tus ojos');
    const toolsSection = createSectionWithHeading('tools', 'Herramientas útiles');

    main.appendChild(informationSection);
    main.appendChild(tipsSection);
    main.appendChild(toolsSection);

    const tipsList = document.createElement('ul');
    const toolsList = document.createElement('ul');

    tipsData.forEach(function (tip) 
    {
        const listItem = createListItem(tip);
        tipsList.appendChild(listItem);
    });

    toolsData.forEach(function (tool) 
    {
        const listItem = createListItem(tool);
        toolsList.appendChild(listItem);
    });

    tipsSection.appendChild(tipsList);
    toolsSection.appendChild(toolsList);
});