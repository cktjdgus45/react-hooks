import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';

class Auth {
    #auth = getAuth();
    #provider = new GoogleAuthProvider();
    login(setUser) {
        signInWithPopup(this.#auth, this.#provider)
            .then(() => this.whatAuthState(setUser)).catch((error) => {
                console.log(error);
            });
    }
    logout(setUser) {
        signOut(this.#auth).then(() => this.whatAuthState(setUser)).catch((error) => {
            console.log(error);
        });
    }
    whatAuthState(updater) {
        onAuthStateChanged(this.#auth, (user) => {
            if (user) {
                updater(user);
            } else {
                updater(user);
            }
        });
    }
}

export default Auth;