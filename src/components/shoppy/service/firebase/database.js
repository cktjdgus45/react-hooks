import { getDatabase, ref, set, onValue, update, push, child } from 'firebase/database';
import app from './firebase';

export default class DB {
    #db = getDatabase(app);
    create(product) {
        set(ref(this.#db, 'products/' + product.id), { ...product });
    }
    read(updater) {
        const productRef = ref(this.#db, 'products/');
        onValue(productRef, (snapshot) => {
            const productsFromDB = Object.values(snapshot.val());
            updater(productsFromDB);
        });
    }
    update(product) {
        const postData = {
            ...product
        };
        const newPostKey = push(child(ref(this.#db), 'products')).key;
        const updates = {};
        updates['/products/' + newPostKey] = postData;
        return update(ref(this.#db), updates);
    }
    delete(product) {
        set(ref(this.#db, 'products/' + product.id), null);
    }
}