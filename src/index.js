'use strict';

import formSubmisson from './modules/formSubmission';
import modalWindow from './modules/modalWindowOne';
import accordion from './modules/accordion';
import calcAccordion from './modules/calcAccordion';
import btnMore from './modules/btnMore';
import modalWindow3 from './modules/modalWindow3';

//modalWindowOne
modalWindow('header .call-btn', '.popup');

//formSubmission

formSubmisson();

//modalWindowTwo
modalWindow('.discount-btn', '.popup-discount');

//acordion
accordion();

//discount

modalWindow('.gauging .check-btn', '.popup-check');

//calcAccordion

calcAccordion();

//btnMore

btnMore();

//modalWindow3

modalWindow3();
