export function setTheme(mode, darkModeToggle, htmlTag) {
    if (mode === 'dark') {
        htmlTag.setAttribute('data-bs-theme', 'dark');
        htmlTag.setAttribute('data-mdb-theme', 'dark'); // Adiciona o atributo para MDB
        darkModeToggle.checked = false; // Marca o checkbox como ativo
    } else {
        htmlTag.setAttribute('data-bs-theme', 'light');
        htmlTag.setAttribute('data-mdb-theme', 'light'); // Adiciona o atributo para MDB
        darkModeToggle.checked = true; // Desmarca o checkbox
    }
    localStorage.setItem('theme', mode); // Armazena a preferência do tema
}
