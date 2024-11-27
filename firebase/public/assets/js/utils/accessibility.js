export function setupAccessibility(fontSize, increaseFontBtn, decreaseFontBtn) {
    document.body.style.fontSize = `${fontSize}px`; // Aplica o tamanho da fonte salvo

    increaseFontBtn.addEventListener('click', () => {
        fontSize += 2;
        document.body.style.fontSize = `${fontSize}px`;
        localStorage.setItem('fontSize', fontSize); // Armazena o tamanho da fonte
    });

    decreaseFontBtn.addEventListener('click', () => {
        fontSize = Math.max(12, fontSize - 2);
        document.body.style.fontSize = `${fontSize}px`;
        localStorage.setItem('fontSize', fontSize); // Armazena o tamanho da fonte
    });
}