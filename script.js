document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    const pages = document.querySelectorAll('.page-section');

    function switchPage(targetId) {
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === targetId) {
                page.classList.add('active');
            }
        });
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        nav.classList.remove('active');
    }

    document.querySelectorAll('[data-target]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            switchPage(targetId);
        });
    });

    document.querySelectorAll('a[href^="#"]:not([data-target])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            nav.classList.remove('active');
        });
    });

    const form = document.getElementById('bookingForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const service = document.getElementById('service-type').value;
        alert(`Спасибо, ${name}! Ваша заявка на "${service}" принята.`);
        form.reset();
    });
});

function openModal(serviceName) {
    const formSection = document.getElementById('contact');
    const selectBox = document.getElementById('service-type');
    
    formSection.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('name').focus();
    console.log("Service: " + serviceName);
}