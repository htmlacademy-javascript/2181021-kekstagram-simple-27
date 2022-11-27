import {closeModal} from './modal.js';
import {postForm} from './form.js';
import {getData} from './api.js';
import {transformEffects} from './effects.js';

getData();
transformEffects();
postForm(closeModal);
