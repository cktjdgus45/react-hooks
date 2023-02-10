import { getDatabase, ref, set, onValue, update, push, child } from 'firebase/database';
import app from './firebase';

export default class DB {
    #db = getDatabase(app);
    #cart = [];
    create(product) {
        set(ref(this.#db, 'products/' + product.id), { ...product });
    }
    createAdmin(user, product, db) {
        db.readCart(user, db);
        const cartFromDB = db.cart;
        const existCart = cartFromDB.find(item => item.id === product.id);
        if (existCart) { existCart['size'] = product.size; }
        const cartArr = existCart ? [...cartFromDB] : [...cartFromDB, product];
        const { displayName, email, photoURL, uid } = user;
        const postData = {
            displayName, email, photoURL, uid,
            cart: cartArr
        }
        set(ref(this.#db, 'admin/' + user.uid), { ...postData });
    }


    set cart(AdminFromDB) {
        const cartFromAdmin = AdminFromDB[0];
        this.#cart = [...cartFromAdmin];
    }
    get cart() {
        return this.#cart;
    }
    readCart(user, db, updater) {
        const AdminRef = ref(this.#db, 'admin/' + user.uid);
        onValue(AdminRef, (snapshot) => {
            const AdminFromDB = Object.values(snapshot.val());
            console.log(AdminFromDB[0])
            // updater && updater(AdminFromDB[0].length);
            updater && updater(AdminFromDB[0]);
            db.cart = AdminFromDB;
        });
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