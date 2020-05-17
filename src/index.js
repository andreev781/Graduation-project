'use strict';

import formSubmisson from './modules/formSubmission';
import modalWindow from './modules/modalWindowOne';
import accordion from './modules/accordion';
import calcAccordion from './modules/calcAccordion';

//modalWindowOne
modalWindow('header .call-btn', '.popup');

//formSubmission

formSubmisson();

//modalWindowTwo
modalWindow('.discount-btn', '.popup-discount');

//acordion
accordion();

//discount

modalWindow('.check-btn', '.popup-check');

//calcAccordion

calcAccordion();