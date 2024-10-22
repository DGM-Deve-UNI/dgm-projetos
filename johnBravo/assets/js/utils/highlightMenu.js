export function highlightMenu(selectedLink) {
    const navItems = document.querySelectorAll('.jb-nav-item');
    navItems.forEach(item => {
        item.classList.remove('bg-warning', 'text-black', 'fw-bold');
        item.querySelector('.jb-nav-link').classList.add('text-white');
        item.querySelector('.jb-nav-link').classList.remove('fw-bold');
    });
    const selectedItem = selectedLink.closest('li');
    if (selectedItem) {
        selectedItem.classList.add('bg-warning', 'text-black', 'fw-bold');
        selectedItem.querySelector('.jb-nav-link').classList.add('text-black');
        selectedItem.querySelector('.jb-nav-link').classList.remove('text-white');
    }
}