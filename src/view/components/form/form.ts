type Atr = {
    name: string,
    value: string,
}

export class FormComponent {
    form = this.createElement('form', 'form', null);
    formElemtWrap = this.createElement('div', 'form__elem-wrap', null);
    input = this.createElement('input', 'form__elem-wrap__field', [{ name: 'type', value: 'text' }, { name: 'required', value: 'true' }, { name: 'placeholder', value: 'Выш номер,,,' }]);
    submitButton = this.createElement('button', 'form__elem-wrap__button', [{ name: 'type', value: 'submit' }]);

    constructor() {
        this.createForm();
    }

    createElement(name: string, className: string, atr: Atr[] | null): HTMLElement {
        const elem = document.createElement(name);
        elem.classList.add(className);
        if (atr !== null) {
            atr.forEach(atr => elem.setAttribute(atr.name, atr.value));
        }
        return elem;
    }

    createForm(): void {
        this.submitButton.textContent = 'Заказать';
        const test = this.createElement('div', 'test', null);
        this.formElemtWrap.append(this.input, this.submitButton);
        this.form.append(this.formElemtWrap, test);
    }

    submit(e: Event): void {
        e.preventDefault();
    }
}