'use strict';

import modalWindow from "./modalWindowOne";


const calcAccordion = () => {
    const constructorBtn = document.querySelectorAll('.constructor .construct-btn'),
        panelHeading = document.querySelectorAll('.constructor .panel-heading'),
        panelDefault = document.querySelectorAll('.constructor .panel-default');

    const accordion = () => {
        for (let i = 0; i < panelHeading.length; i++) {
            const content = panelHeading[i].nextElementSibling;
            if (i < 1) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
            panelHeading[i].onclick = function(e) {
                e.preventDefault();
                panelHeading.forEach(item => {
                    item.nextElementSibling.style.display = 'none';
                });
                if (content.style.display !== 'none') {
                    return;
                } else {
                    content.style.display = 'block';
                }
            };

        }
        for (let i = 0; i < constructorBtn.length - 1; i++) {
            constructorBtn[i].addEventListener('click', e => {
                e.preventDefault();
                panelHeading.forEach(item => {
                    item.nextElementSibling.style.display = 'none';
                });
                const nextElement = panelDefault[i].nextElementSibling,
                    content = nextElement.querySelector('.panel-collapse');
                content.style.display = 'block';

            });

        }
    };
    const calc = () => {
        const onoffswitchCheckbox = document.querySelector('.onoffswitch-checkbox'),
            switchBtn = document.querySelector('.constructor .onoffswitch-label'),
            secondBlock = document.querySelector('.second-block'),
            firstDiameter = document.querySelector('.constructor .first-block #first-diameter'),
            secondDiametr = document.querySelector('.constructor .second-block #second-diameter'),
            firstRing = document.querySelector('.constructor .first-block #first-ring'),
            secondRing = document.querySelector('.constructor .second-block #second-ring'),
            bottom = document.querySelector('#myonoffswitch-two'),
            result = document.querySelector('#calc-result'),
            distance = document.querySelector('#distance');

        const objSum = {
            chamber: 10000,
            diameterValue1: 1.4,
            diameterValue2: 1.4,
            ring1: 1,
            ring2: 1,
            bottom: true,
            distance: 100,
            sum: 10000
        };
        let chamber = 10000,
            diameterInfo1 = 0,
            diameterInfo2 = 0,
            ring1 = 0,
            bottomInfo = 0;
        result.value = objSum.sum;
        const chabmer = 5000;
        setTimeout(() => {
            funcBottom();
        }, 0);
        switchBtn.addEventListener('click', () => {
            setTimeout(() => {

                if (!onoffswitchCheckbox.checked) {
                    objSum.sum += chabmer;
                    secondBlock.style.display = 'block';
                    objSum.chamber = 'double';
                    chamber = 15000;
                    ringFunc(secondRing.value);
                    diameter2();
                } else {
                    objSum.sum -=  diameterInfo2;
                    objSum.sum -= chabmer;
                    secondBlock.style.display = 'none';
                    objSum.chamber = 'single';
                    chamber = 10000;
                }
                diameter();
                ringFunc(firstRing.value);
                funcBottom();
                result.value = objSum.sum;
            }, 0);

        });
        firstDiameter.addEventListener('change', () => {
            diameter();
            objSum.diameterValue1 = firstDiameter.value;
            result.value = objSum.sum;

        });
        secondDiametr.addEventListener('change', () => {
            diameter2();
            objSum.diameterValue2 = secondDiametr.value;
            result.value = objSum.sum;

        });

        const diameter = () => {
            if (firstDiameter.value == 2) {
                objSum.sum -= diameterInfo1;
                diameterInfo1 = (chamber / 100) * 20;
                objSum.sum += diameterInfo1;
            } else {
                objSum.sum -= diameterInfo1;
                diameterInfo1 = 0;
            }
            result.value = objSum.sum;
        };
        const diameter2 = () => {
            if (secondDiametr.value == 2) {
                diameterInfo2 = (chamber / 100) * 20;
                objSum.sum += diameterInfo2;
            } else {
                objSum.sum -= diameterInfo2;
                diameterInfo2 = 0;
            }
            result.value = objSum.sum;
        };
        firstRing.addEventListener('change', () => {
            if (firstRing.value == 2) {
                objSum.ring1 = 2;
            } else if (firstRing.value == 3) {
                objSum.ring1 = 3;
            } else {
                objSum.ring1 = 1;
            }
            ringFunc(firstRing.value);
        });
        secondRing.addEventListener('change', () => {
            if (secondRing.value == 2) {
                objSum.ring2 = 2;
            } else if (secondRing.value == 3) {
                objSum.ring2 = 3;
            } else {
                objSum.ring2 = 1;
            }
            ringFunc(secondRing.value);
        });
        bottom.addEventListener('click', () => {
            funcBottom();
        });
        const ringFunc = value => {
            if (value == 3) {
                objSum.sum -= ring1;
                ring1 = (chamber / 100) * 50;
                objSum.sum += ring1;
            } else if (value == 2) {
                objSum.sum -= ring1;
                ring1 = (chamber / 100) * 30;
                objSum.sum += ring1;
            } else {
                objSum.sum -= ring1;
                ring1 = 0;
            }
            result.value = objSum.sum;
        };
        const funcBottom = () => {

            if (bottom.checked) {
                objSum.bottom = true;
                if (!onoffswitchCheckbox.checked) {
                    objSum.sum -= bottomInfo;
                    bottomInfo = 2000;
                    objSum.sum += bottomInfo;
                } else {
                    objSum.sum -= bottomInfo;
                    bottomInfo = 1000;
                    objSum.sum += bottomInfo;
                }
            } else {
                objSum.bottom = false;
                objSum.sum -= bottomInfo;
                bottomInfo = 0;
            }

            result.value = objSum.sum;
        };

        distance.addEventListener('input', function() {
            this.value = this.value.replace(/[^\d,.]/ig,  '');
            objSum.distance = this.value;
        });
        modalWindow('.constructor .panel-four .construct-btn', '.popup-discount');
        return objSum;
    };

    accordion();
    const calcObj = calc();
    const sendObj = () => {

        const errorMessage = 'Что-то пошло не так',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся.',
            statusMessage = document.createElement('div'),
            buttons = document.querySelectorAll('.capture-form'),
            result = document.querySelector('#calc-result'),
            checkBox = document.querySelectorAll('.onoffswitch-checkbox'),
            secondBlock = document.querySelector('.second-block'),
            distance = document.querySelector('#distance'),
            formControl = document.querySelectorAll('.form-control');
            statusMessage.style.cssText = 'font-size: 2rem; color: black';
        const clearInput = target => {
            const input = target.querySelectorAll('input');
            input.forEach(item => {
                item.value = '';
            });
        };
        const clearCheckbox = () => {
            checkBox.forEach((item) => {
                item.checked = true;
            });
            secondBlock.style.display = 'none';
        };

        const clearFormControl = () => {
            formControl.forEach((item) => {
                if(item.matches('#first-ring') || item.matches('#second-ring')){
                    item.value = 1;
                }else{
                    item.value = 1.4;
                }
            });
        };

        const clearInputDistance = () => {
            distance.value = '';
        };

        const clearResult = () => {
            result.value = '';
        };


        const deleteStatus = status => {
            setTimeout(() => {
                status.textContent = '';
            }, 5000);
        };





        buttons.forEach(item => {
            if (item.closest('.popup-discount')) {
                item.addEventListener('submit', e => {
                    e.preventDefault();
                    
                    item.appendChild(statusMessage);
                    statusMessage.textContent = loadMessage;
                    const formData = new FormData(item);
                    formData.forEach((val, key) => {
                        calcObj[key] = val;
                    });

                    postData(calcObj)
                        .then(response => {
                            if (response.status !== 200) {

                                throw new Error('status network is not 200');
                            }
                                clearCheckbox();
                                clearFormControl();
                                clearInputDistance();
                                clearResult();
                                calc();
                                accordion();
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
    sendObj();
};
export default calcAccordion;
