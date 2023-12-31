// Modal Settings
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');


// Start (با کلیک بر روی ضربدر صفحه مدل بسته میشود)
// Start (با کلیک کردن بیرون از ـ مدل ـ صفحه مدل بسته میشود)
const modalCloseFunc = function () {
    modal.classList.add('closed');
};

modalCloseOverlay.addEventListener('click', modalCloseFunc);
// End (با کلیک کردن بیرون از ـ مدل ـ صفحه مدل بسته میشود)


modalCloseBtn.addEventListener('click', modalCloseFunc);
// End (با کلیک بر روی ضربدر صفحه مدل بسته میشود)
// Modal Settings



// Login  ......  */
document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}
// Login  ......  */



// Search bar  ......  */
// Mobile Menu Side bar  ......  */
const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i].dataset.target,
    targetEl = document.querySelector(`#${currentId}`)

    const openData = function() {
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
    };

    triggerOpen[i].addEventListener('click', function() {
        targetEl.classList.add('active');
        overlay.classList.add('active');
    });

    targetEl.querySelector('[close-button]').addEventListener('click', openData);
    overlay.addEventListener('click', openData);
}
// Search bar  ......  */
// Mobile Menu Side bar  ......  */

// Mobile menu submenu  ......  */
const submenu = document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => menu.addEventListener('click', function(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null);
    if(this.closest('.has-child').classList != 'active') {
        this.closest('.has-child').classList.toggle('active');
    }
}));
// Mobile menu submenu  ......  */

// Sweperjs (Slider) ......  */
const swiper = new Swiper('.sliderbox', {

  loop: true,
  effect: 'fade',
  autoheight: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
// Sweperjs (Slider) ......  */

// Sweperjs (Carousel) ......  */
const carousel = new Swiper('.carouselbox', {

    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,

    // If we need pagination
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        481: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            centeredSlides: false,
            
        },

        640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            centeredSlides: false,

        },

        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            centeredSlides: false,

        },
    },
});
// Sweperjs (Carousel) ......  */


// Sorter (bycats) ......  */
const sorter = document.querySelector('.sort-list');

if ( sorter ) {
    const sortLi = sorter.querySelectorAll('li');
    sorter.querySelector('.opt-trigger').addEventListener('click', function() {
        sorter.querySelector('ul').classList.toggle('show');
    });

    sortLi.forEach((item) => item.addEventListener('click', function() {
        sortLi.forEach((li) => li != this ? li.classList.remove('active') : null);

        this.classList.add('active');
        sorter.querySelector('.opt-trigger span.value').textContent = this.textContent;
        sorter.querySelector('ul').classList.toggle('show');
    }))

}
// Sorter (bycats) ......  */


// Tabbed (bycats) ......  */
const trigger = document.querySelectorAll('.tabbed-trigger'),
    content = document.querySelectorAll('.tabbed > div');
trigger.forEach((btn) => {
    btn.addEventListener('click', function() {
        let dataTarget = this.dataset.id,
        body = document.querySelector(`#${dataTarget}`);

        trigger.forEach((b) => b.parentNode.classList.remove('active'));
        trigger.forEach((s) => s.classList.remove('active'));
        this.parentNode.classList.add('active');
        body.classList.add('active');
    })
})
// Tabbed (bycats) ......  */