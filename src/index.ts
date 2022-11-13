"use strict";

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import './assets/style/style.scss';
import { PageRender } from './view/pageRender';

const render = new PageRender();

const page = () => render.render();
window.addEventListener('load', page);