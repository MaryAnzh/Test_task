"use strict";
import './assets/style/style.scss';
import { PageRender } from './view/pageRender';

const render = new PageRender();

const page = () => render.render();
window.addEventListener('load', page);