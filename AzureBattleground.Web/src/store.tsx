export default class Store {
    private static store: Map<string, any> = new Map();

    static setKey(key: string, value: any) {
        Store.store.set(key, value);
    }

    static getKey(key: string) {
        return Store.store.get(key);
    }
}