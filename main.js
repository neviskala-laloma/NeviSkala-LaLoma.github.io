// Interactividad: menú responsive y catálogo dinámico

// Menú hamburguesa
const menuToggle = document.getElementById('menuToggle');
const menuList = document.getElementById('menuList');
menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

// Catálogo dinámico
const products = [
    {
        name: "Barro Negro 🖤",
        img: "img/o42.png",
        desc: "La Crema Skala Lama Negra, enriquecida con vitamina E y D'Panthenol, tiene propiedades tonificantes ideales para el tratamiento del cabello oscuro y sin vida, dejándolo más sedoso y brillante. 100% vegano."
    },
    {
        name: "Divino Potao",
        img: "img/o43.png",
        desc: "Especial para transición capilar. Elimina el encrespamiento, hidrata, da vida al cabello opaco y define rizos. Aceites vegetales, queratina y colágeno vegetal."
    },
    {
        name: "Skala Banana 🍌",
        img: "img/o106.png",
        desc: "Nutrición tropical con Banana y Bacuri. Restaura la fibra capilar, ideal para cabello encrespado y desnutrido. Recarga energética y bienestar."
    },
    {
        name: "Skala chocolate 🍫",
        img: "img/chocolate.jpg",
        desc: "Acción reparadora, hidrata y nutre profundamente. Cacao, Omega-3 y Macadamia para brillo y sedosidad."
    },
    {
        name: "Mandarina y Gengibre 🍊",
        img: "img/o23.png",
        desc: "Acondicionador 2 en 1. Fórmula rica en nutrientes que activan el crecimiento, suavidad y brillo."
    },
    {
        name: "Skala mango 🥭",
        img: "img/o98.png",
        desc: "Encanto do Rio Manga y Castanha do Pará. Humecta y reduce el encrespamiento. Hidratación para cabello seco y opaco."
    },
    {
        name: "Papa Desmaiado 🥔",
        img: "img/o36.png",
        desc: "Resultados inmediatos: elimina frizz, hidrata, reduce volumen y mantiene alineado. Aceites vegetales y coco."
    },
    {
        name: "Skala Dona 🍩",
        img: "img/o32.png",
        desc: "Nutrición en forma de maceta. Aceites de girasol, aguacate, coco y linaza para fuerza, hidratación y definición."
    },
    {
        name: "Leche Vegetal🥛",
        img: "img/o136.png",
        desc: "100% vegano. Leche de coco, vitamina E y D'Panthenol para reparar y proteger el cabello."
    },
    {
        name: "Marañón y Murumuru",
        img: "img/o93.png",
        desc: "Nutri-Reconstrucción. Murumuru y caju para nutrición y reconstrucción de cabellos secos y dañados."
    }
];

const productsGrid = document.getElementById('productsGrid');
products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
    `;
    productsGrid.appendChild(card);
});

// Formulario de contacto (simulado)
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const tel = document.getElementById('telefono').value;
    if (/^\d{7,15}$/.test(tel.replace(/\D/g,''))) {
        formMsg.textContent = "¡Gracias! Te contactaremos pronto.";
        formMsg.style.color = "#222";
        contactForm.reset();
    } else {
        formMsg.textContent = "Por favor ingresa un número válido.";
        formMsg.style.color = "#ff7f50";
    }
});