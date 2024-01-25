const btn = document.getElementById('scroll-to-top');

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

document.addEventListener('scroll', () => {
    const scrolledPixels = window.scrollY;

    if (scrolledPixels > 130) {
        btn.classList.remove('hidden');
    } else {
        btn.classList.add('hidden');
    }
});
