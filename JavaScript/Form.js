export default class Form {
    constructor(FormId) {
        this.formElement = document.getElementById(FormId);
    }

    getValues() {
        const formData = new FormData(this.formElement);
        const data = Object.fromEntries(formData);
        return data;
    }

    isValid() {
        return this.formElement.checkValidity();
    }

    reset() {
        this.formElement.reset();
    }

}