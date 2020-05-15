'use strict';
import maskPhone from './maskPhone';
const formSubmisson = () => {
        const form = document.querySelectorAll('form'),
        
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
        form.forEach((item) => {
            if(item.classList.contains('capture-form') || item.classList.contains('main-form') ){
            forms.push(item);
            }
        });
        forms.forEach((item) => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();
                const deleteStatus = (status) => {
                    setTimeout(() => {
                        status.textContent = '';
                    }, 5000);
                };
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

        
};
export default formSubmisson;
