
const button = document.querySelector('[data-collapse-toggle="navbar-default"]');
const navbar = document.getElementById('navbar-default');

button.addEventListener('click', () => {
        navbar.classList.toggle('hidden');
        navbar.classList.toggle('block');
});

