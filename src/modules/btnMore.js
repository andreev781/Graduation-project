'use strict';
const btnMore = () => {
    const btn = document.querySelector('.add-sentence-btn'),
        blocks = document.querySelectorAll('.hidden');
        btn.addEventListener('click', () => {
        btn.style.display = 'none';
        blocks.forEach((item) => {
            item.style.setProperty('display', 'block', 'important');
        });
    });
};

export default btnMore;
