window.addEventListener('DOMContentLoaded', () => {                                 // ГАМБУРГЕР
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})                                                                                  //ГАМБУРГЕР



                                                                                     //модальое окно
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    }) ;
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation').fadeOut();
    });