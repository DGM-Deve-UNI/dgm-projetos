export function closeNavbar(navbarCollapse, navbarToggler) {
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
        navbarToggler.classList.add('collapsed');
    }
}