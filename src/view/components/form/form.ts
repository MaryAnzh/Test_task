type Atr = {
    name: string,
    value: string,
}

export class FormComponent {
    form = this.createElement('form', 'form', null);
    formElemtWrap = this.createElement('div', 'form__elem-wrap', null);
    inputWrap = this.createElement('div', 'form__elem-wrap__field-wrap', null);
    input = this.createElement('input', 'form__elem-wrap__field-wrap__field', [{ name: 'type', value: 'text' }, { name: 'required', value: 'true' }, { name: 'placeholder', value: 'Вaш номер...' }]);
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
        this.inputWrap.append(this.input);
        this.formElemtWrap.append(this.inputWrap, this.submitButton);
        this.form.append(this.formElemtWrap);
    }

    submit(e: Event): void {
        e.preventDefault();
    }
}