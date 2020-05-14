'use strict';
function modalWindow() {
    const btn = document.querySelector('.call-btn'),
        popup = document.querySelector('.popup-call'),
        popupContent = document.querySelector('.popup-content');

    
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            popup.style.display = 'block';
            document.body.classList.add('modal-open');
        });
        popup.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
    
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }
}
);
}
export default modalWindow;