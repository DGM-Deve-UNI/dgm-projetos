export function setTheme(mode, darkModeToggle, htmlTag) {
    if (mode === 'dark') {
        htmlTag.setAttribute('data-bs-theme', 'dark');
        htmlTag.setAttribute('data-mdb-theme', 'dark');
        darkModeToggle.checked = false;
    } else {
        htmlTag.setAttribute('data-bs-theme', 'light');
        htmlTag.setAttribute('data-mdb-theme', 'light');
        darkModeToggle.checked = true;
    }
    localStorage.setItem('theme', mode);
}
