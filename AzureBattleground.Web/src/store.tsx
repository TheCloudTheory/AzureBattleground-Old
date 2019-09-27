export default class Store {
    static setKey(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getKey(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }
}