function burgerMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.navbar__burger');
    burger.addEventListener('click', function () {
        navbar.classList.toggle('show-navbar');
        // if (navbar.classList.contains('show-navbar')) {
        //     nonScroll();
        // }else{
        //     Scroll()
        // }
    })
}

function closeBurgerMenu () {
    const links = document.querySelector('.navbar__links');
    const navBar = document.querySelector('.navbar');
    links.addEventListener('click', function () {
        navBar.classList.remove('show-navbar');
    })
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

burgerMenu();
closeBurgerMenu();