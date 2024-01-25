const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', function () {
    console.log(body.classList.contains('dark'));
    if (body.classList.contains('dark')) {
        localStorage.theme = 'light';
    } else {
        localStorage.theme = 'dark';
    }

    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark');
});

if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    body.classList.add('dark');
} else {
    body.classList.remove('dark');
}
