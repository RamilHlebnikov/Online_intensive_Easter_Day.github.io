// JavaScript для работы бургер-меню
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const nav = document.querySelector('.nav');
    
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        
        // Блокировка прокрутки body при открытом меню
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Закрытие меню при клике на ссылку
    const navItems = document.querySelectorAll('.nav__item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Заполняется скрытое поле тарифом из URL
    const urlParams = new URLSearchParams(window.location.search);
    const tariff = urlParams.get('tariff');
    
    if (tariff) {
        const tariffField = document.getElementById('tariff-field');
        if (tariffField) {
            tariffField.value = tariff;
        }
    }
});