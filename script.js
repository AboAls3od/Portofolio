
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-expo'
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 60) {
        navbar.classList.add('bg-[#EEEEEE]/95', 'backdrop-blur-md', 'py-4', 'border-b', 'border-black/5', 'shadow-sm');
        navbar.classList.remove('py-6');
    } else {
        navbar.classList.remove('bg-[#EEEEEE]/95', 'backdrop-blur-md', 'py-4', 'border-b', 'border-black/5', 'shadow-sm');
        navbar.classList.add('py-6');
    }
});


window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob, i) => {
        const speed = (i + 1) * 20;
        blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});
