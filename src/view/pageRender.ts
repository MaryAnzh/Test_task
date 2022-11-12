import { FormComponent } from "./components/form/form";

export class PageRender {
    public body = document.querySelector('body');
    public wrapper = document.createElement('div')
    public formComponent = new FormComponent();

    constructor() { }

    render() {
        if (!this.body) {
            return;
        }
        this.body.append(this.wrapper);
        this.wrapper.classList.add('wrapper');
        this.wrapper.append(this.formComponent.form);

    }
}