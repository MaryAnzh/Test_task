type Atr = {
    name: string,
    value: string,
}

export class FormComponent {
    form = this.createElement('form', 'form', null);
    inputBorder = this.createElement('div', 'form__input-border', null);
    inputWrap = this.createElement('div', 'form__input-border__field-wrap', null);
    input = this.createElement('input', 'form__input-border__field-wrap__field', [{ name: 'type', value: 'text' }, { name: 'required', value: 'true' }, { name: 'placeholder', value: 'Вaш номер...' }]);
    submitButtonBorder = this.createElement('div', 'form__button-wrap', null);
    submitButton = this.createElement('button', 'form__button-wrap__button', [{ name: 'type', value: 'submit' }]);

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
        this.inputBorder.append(this.inputWrap);
        this.submitButtonBorder.append(this.submitButton);
        this.form.append(this.inputBorder, this.submitButtonBorder);

    }

    submit(e: Event): void {
        e.preventDefault();
    }
}