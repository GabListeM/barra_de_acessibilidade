// Inicializa o VLibras e controla a visibilidade
const vlibrasButton = document.getElementById('toggleVlibras');
const vlibrasElement = document.querySelector('.vlibras-container');
let vlibrasActive = true;

// Inicializa o VLibras ao carregar a página
const vlibrasWidget = new window.VLibras.Widget('https://vlibras.gov.br/app');

vlibrasButton.addEventListener('click', () => {
    if (vlibrasActive) {
        // Esconde o VLibras
        vlibrasElement.style.display = 'none';
        vlibrasButton.innerHTML = '<i class="fas fa-sign-language"></i>'; // Ícone para ativar
    } else {
        // Mostra o VLibras
        vlibrasElement.style.display = 'block';
        vlibrasButton.innerHTML = '<i class="fas fa-times"></i>'; // Ícone para desativar
    }
    vlibrasActive = !vlibrasActive;
});


// Aumentar e Diminuir Fonte
const increaseFontBtn = document.getElementById('increaseFont');
const decreaseFontBtn = document.getElementById('decreaseFont');
let currentFontSize = 16;

increaseFontBtn.addEventListener('click', () => {
    currentFontSize += 2;
    document.body.style.fontSize = `${currentFontSize}px`;
});

decreaseFontBtn.addEventListener('click', () => {
    if (currentFontSize > 12) {
        currentFontSize -= 2;
        document.body.style.fontSize = `${currentFontSize}px`;
    }
});

// Alternar Contraste
const contrastBtn = document.getElementById('contrast');
let isHighContrast = false;

contrastBtn.addEventListener('click', () => {
    if (isHighContrast) {
        document.body.classList.remove('high-contrast');
    } else {
        document.body.classList.add('high-contrast');
    }
    isHighContrast = !isHighContrast;
});

// Modo Daltonismo (escala de cinza)
const colorBlindModeBtn = document.getElementById('colorBlindMode');
let isColorBlindMode = false;

colorBlindModeBtn.addEventListener('click', () => {
    if (isColorBlindMode) {
        document.body.classList.remove('color-blind-mode');
    } else {
        document.body.classList.add('color-blind-mode');
    }
    isColorBlindMode = !isColorBlindMode;
});

// Leitura em Voz Alta (Text to Speech)
const textToSpeechBtn = document.getElementById('textToSpeech');
const stopSpeechBtn = document.getElementById('stopSpeech');
let utterance = null;

textToSpeechBtn.addEventListener('click', () => {
    const textToRead = document.body.innerText; // Lê todo o texto da página
    utterance = new SpeechSynthesisUtterance(textToRead);
    window.speechSynthesis.speak(utterance);
});

stopSpeechBtn.addEventListener('click', () => {
    if (utterance) {
        window.speechSynthesis.cancel(); // Cancela a leitura atual
    }
});


// Pausar Animações
const pauseAnimationsBtn = document.getElementById('pauseAnimations');
let animationsPaused = false;

pauseAnimationsBtn.addEventListener('click', () => {
    if (animationsPaused) {
        document.body.classList.remove('pause-animations');
    } else {
        document.body.classList.add('pause-animations');
    }
    animationsPaused = !animationsPaused;
});

// Zoom In e Zoom Out
const zoomInBtn = document.getElementById('zoomIn');
const zoomOutBtn = document.getElementById('zoomOut');
let currentZoom = 1;

zoomInBtn.addEventListener('click', () => {
    currentZoom += 0.1;
    document.body.style.transform = `scale(${currentZoom})`;
    document.body.style.transformOrigin = '0 0';
});

zoomOutBtn.addEventListener('click', () => {
    if (currentZoom > 0.5) {
        currentZoom -= 0.1;
        document.body.style.transform = `scale(${currentZoom})`;
        document.body.style.transformOrigin = '0 0';
    }
});
