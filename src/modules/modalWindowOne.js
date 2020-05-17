'use strict';
const  modalWindow = (selector, popup) =>  {

    const btn = document.querySelectorAll(selector),
        popupWindow = document.querySelector(popup);
        btn.forEach((item) => {
            item.addEventListener('click', (e) => {
            e.preventDefault();
            popupWindow.style.display = 'block';
            document.body.classList.add('modal-open');
        });
    });
        popupWindow.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popupWindow.style.display = 'none';
                document.body.classList.remove('modal-open');

    
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popupWindow.style.display = 'none';
                    document.body.classList.remove('modal-open');

                }
            }
    
}
);
};
export default modalWindow;