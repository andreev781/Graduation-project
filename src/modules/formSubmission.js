'use strict';
import maskPhone from './maskPhone';
const formSubmisson = () => {
        const form1 = document.querySelector('.main-form'),
            form2 = document.querySelector('.capture-form'),
            form3 = document.querySelector('.popup-call .capture-form'),
            phone = document.getElementsByName('user_phone'),
            name = document.getElementsByName('user_name');
        const errorMessage = 'Что-то пошло не так',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся.',
            statusMessage = document.createElement('div');
            statusMessage.style.cssText = 'font-size: 2rem; color: black';

        const validator = () => {
            phone.forEach((item) => {
                maskPhone(item);
            });
            name.forEach((item) => {
                item.addEventListener('input', () => {
                    item.value = item.value.replace(/[^а-яё\s]/ig,  '');
                });
            });
        };
        validator();

        const clearInput = (target) => {
            const input = target.querySelectorAll('input');
            input.forEach(item => {
                item.value = '';
            });
        };
        const forms = [];
        forms.push(form1, form2, form3);
        forms.forEach((item) => {
            item.addEventListener('submit', (e) => {
                const deleteStatus = (status) => {
                    setTimeout(() => {
                        status.textContent = '';
                    }, 5000);
                };
                e.preventDefault();
                const target = e.target;
                item.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(item);
                const body = {};

                formData.forEach((val, key) => {
                    body[key] = val;
                });

                postData(body)
                    .then((response) => {
                        if(response.status !== 200){
                            throw new Error ('status network is not 200');
                        }
                        statusMessage.textContent = successMessage;
                    })
                    .catch(() => {
                        statusMessage.textContent = errorMessage;
                    });
                    clearInput(item);
                    deleteStatus(statusMessage);
            });

        });

        const postData = (body) => {
            return fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text'
                },
                body: JSON.stringify(body)
            });
        };

    alert(1)  
};
export default formSubmisson;
