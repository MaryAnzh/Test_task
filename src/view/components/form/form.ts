type Atr = {
    name: string,
    value: string,
}

export class FormComponent {
    form = this.createElement('form', 'form', null);

    constructor() {
        this.form.textContent = 'form';
    }

    createElement(name: string, className: string, atr: Atr[] | null): Node {
        const elem = document.createElement(name);
        elem.classList.add(className);
        if (atr !== null) {
            atr.forEach(atr => elem.setAttribute(atr.name, atr.value));
        }
        return elem;
    }
}