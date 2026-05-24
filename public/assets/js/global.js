const toggleNavbar = (event) => {
    event.stopPropagation();
    
    const menu = document.getElementById('navbar-menu');
    menu.classList.toggle('navbar-menu--active')
}

document.addEventListener('DOMContentLoaded', () => {
    validateSession();
    
    // Set active menu navbar
    const pathname = window.location.pathname;
    document.querySelectorAll('.navbar-links').forEach((link) => {
        if (link.pathname === pathname) {
            link.classList.add('navbar-links--active')
        }
    })
})

const validateSession = () => {
    const userId = sessionStorage.getItem('user_id') || localStorage.getItem('user_id');

    if(!userId || userId == '') {
        window.location.href = '/login.html'
    }
}