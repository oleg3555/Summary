const popup = document.querySelector('.popup');
const popupImage = popup.querySelector('.popup__image img');
const gallery = document.querySelector('.works__group');

gallery.addEventListener('click', ({target}) => {
    if (target.tagName === 'IMG') {
        popup.classList.add('popup_open');
        popupImage.src = target.getAttribute('src');
        popup.addEventListener('click', function closePopup(event) {
            if (event.target !== popupImage) {
                popup.classList.remove('popup_open');
                popup.removeEventListener('click', closePopup);
                popupImage.removeAttribute('src');
            }
        });
    }
})


window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    document.querySelectorAll('.content-wrapper').forEach((el, index) => {
        if (el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {
            document.querySelectorAll('.links__item').forEach((item) => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
            document.querySelectorAll('.links li')[index].querySelector('a').classList.add('active');
        }
    })
})