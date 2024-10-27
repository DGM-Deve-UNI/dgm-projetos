export function setTheme(mode, darkModeToggle, darkModeIcon, htmlTag) {
    if (mode === 'dark') {
        htmlTag.setAttribute('data-bs-theme', 'dark');
        darkModeToggle.classList.add('active');
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
        // document.querySelector('link[rel="icon"]').setAttribute('href', '../assets/imgs/icons/dark/icon.png');
    } else {
        htmlTag.setAttribute('data-bs-theme', 'light');
        darkModeToggle.classList.remove('active');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
        // document.querySelector('link[rel="icon"]').setAttribute('href', '../assets/imgs/icons/light/icon.png');
    }
    localStorage.setItem('theme', mode); // Armazena a preferência do tema
}