import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    alias = '';
    url2 = '';

    responses = '';

    changeAlias(event) {
        this.alias = event.target.value;
    }

    changeUrl(event) {
        this.url2 = event.target.value;
    }

    formSubmit(event) {
        event.preventDefault();
        this.responses = this.postRequest({
            slug: this.alias,
            url: this.url2
        });
    }

    postRequest(params) {
        return new Promise((resolve) => {
            const rawResponse = fetch('/slugs', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });
            resolve(rawResponse);
        }).then((data) => {
            return new Promise((resolve) => {
                const content = data.text();
                resolve(content);
            });
        });
    }
}
