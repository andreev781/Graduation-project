'use strict';

import formSubmisson from './modules/formSubmission';
import modalWindow from './modules/modalWindowOne';

//modalWindowOne
modalWindow('header .call-btn', '.popup');

//formSubmission

formSubmisson();

//modalWindowTwo
modalWindow('.discount-btn', '.popup-discount');