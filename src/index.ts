import { DOMWidgetView } from '@jupyter-widgets/base';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';


export function render(view: DOMWidgetView) {
    let el = view.el;
    let model = view.model;

    el.classList.add('ipywidgets');

    const component = React.createElement(App, {
        model: model,
    });

    ReactDOM.render(component, el);
}