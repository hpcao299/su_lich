const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', function () {
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark');
});
