import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';

class Auth {
    #auth = getAuth();
    #provider = new GoogleAuthProvider();
    login(setUser) {
        signInWithPopup(this.#auth, this.#provider)
            .then(() => this.watchAuthState(setUser)).catch((error) => {
                console.log(error);
            });
    }
    logout(setUser) {
        signOut(this.#auth).then(() => this.watchAuthState(setUser)).catch((error) => {
            console.log(error);
        });
    }
    watchAuthState(updater) {
        onAuthStateChanged(this.#auth, (user) => {
            if (user) {
                updater(user);
            } else {
                updater(user);
            }
        });
    }
    checkExipreState(updater, user) {
        const expirationTime = user ? user.stsTokenManager.expirationTime : "";
        const currentTime = new Date();
        const expireTime = new Date(expirationTime);
        updater(currentTime > expireTime);
    }
}

export default Auth;