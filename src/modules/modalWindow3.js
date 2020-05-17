'use strict';
import modalWindow from './modalWindowOne';

const modalWindow3 = () => {
    const btn = document.querySelector('.director-btn'),
        quest = document.querySelector('[name="user_quest"'),
        buttons = document.querySelectorAll('.capture-form'),
        errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся.',
        statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: black';

    const body = {};

    const clearInput = target => {
        const input = target.querySelectorAll('input');
        input.forEach(item => {
            item.value = '';
        });
    };

    const deleteStatus = status => {
        setTimeout(() => {
            status.textContent = '';
        }, 5000);
    };

    modalWindow('.director-btn', '.popup-consultation');

    buttons.forEach(item => {
        if (item.closest('.popup-consultation')) {
            item.addEventListener('submit', e => {
                e.preventDefault();
                body['user_quest'] = quest.value;
                item.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(item);
                formData.forEach((val, key) => {
                    body[key] = val;
                });


                postData(body)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('status network is not 200');
                        }

                        statusMessage.textContent = successMessage;
                    })
                    .catch(() => {
                        statusMessage.textContent = errorMessage;
                    });
                clearInput(item);
                deleteStatus(statusMessage);




            });
        }
    });
    const postData = body => fetch('server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'text'
        },
        body: JSON.stringify(body)
    });

};
export default modalWindow3;
