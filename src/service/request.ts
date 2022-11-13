export class Request {
    private key: string = '11b58ebf2e112a6c0a36dd5ace40d453&units=metric';
    public lang: string;
    private baseURL: string = `https://api.openweathermap.org/data/2.5/weather?q=`;

    constructor() {
        this.lang = 'ru';
    }

    async getRequest(city: string): Promise<any> {
        const response = await fetch(`${this.baseURL}${city}&lang=${this.lang}&appid=${this.key}`);
        return response;
    }
}