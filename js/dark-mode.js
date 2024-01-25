const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.getElementsByTagName('html')[0];

darkModeToggle.addEventListener('click', function () {
    if (htmlElement.classList.contains('dark')) {
        localStorage.theme = 'light';
    } else {
        localStorage.theme = 'dark';
    }

    // Toggle the 'dark-mode' class on the htmlElement
    htmlElement.classList.toggle('dark');
});

if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}
