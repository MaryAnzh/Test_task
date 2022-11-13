import { Request } from '../../../service/request';

type Atr = {
    name: string,
    value: string,
}

export class FormComponent {
    private request = new Request();

    public form = this.createElement('form', 'form', null);
    public inputBorder = this.createElement('div', 'form__input-border', null);
    public inputWrap = this.createElement('div', 'form__input-border__field-wrap', null);
    public input = this.createElement('input', 'form__input-border__field-wrap__field', [{ name: 'type', value: 'text' }, { name: 'required', value: 'true' }, { name: 'placeholder', value: 'Вaш город...' }]);
    public submitButtonBorder = this.createElement('div', 'form__button-wrap', null);
    public submitButton = this.createElement('button', 'form__button-wrap__button', [{ name: 'type', value: 'submit' }]);
    public weather = this.createElement('div', 'weather', null);
    public city = this.createElement('p', 'weathe__city', null);
    public temp = this.createElement('p', 'weather__temp', null);
    public cloudy = this.createElement('p', 'weather__cloudy', null);
    public error = this.createElement('p', 'weather__error', null);

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
        this.submitButton.innerHTML = `<i class="fa fa-bullseye" aria-hidden="true"></i> Погода`;
        this.inputWrap.append(this.input);
        this.inputBorder.append(this.inputWrap);
        this.submitButtonBorder.append(this.submitButton);
        this.form.append(this.inputBorder, this.submitButtonBorder);
        this.form.onsubmit = (e: Event) => this.submit(e);

    }

    async submit(e: Event): Promise<void> {
        e.preventDefault();
        const input = <HTMLInputElement>this.input;
        const city = input.value;
        this.weather.innerHTML = '';
        try {
            const response = await this.request.getRequest(city);
            const status: number = await response.status;
            if (status === 404) {
                this.error.textContent = 'Неверные данные';
                this.weather.append(this.error);
                return;
            }

            const info = await response.json();
            const name = info.name;
            const temp = info.main.temp;
            const cloudy = info.weather[0].description;
            this.temp.textContent = `Температура воздуха: ${temp}`;
            this.cloudy.textContent = cloudy;
            this.city.textContent = `Ваш город: ${name}`;
            this.weather.append(this.city, this.temp, this.cloudy);

        } catch (error) {
            this.error.textContent = 'Ошибка';
            this.weather.append(this.error);
        }
    }
}