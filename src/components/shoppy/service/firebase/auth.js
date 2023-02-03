import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

class Auth {
    #auth = getAuth();
    #provider = new GoogleAuthProvider();
    login(updater) {
        signInWithPopup(this.#auth, this.#provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // The signed-in user info.
                const user = result.user;
                updater(prev => {
                    return {
                        ...prev,
                        user,
                    }
                });
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode,
                    errorMessage,
                    credential)
                // ...
            });
    }
    logout(updater) {
        signOut(this.#auth).then(() => {
            // Sign-out successful.
            updater({
                user: {
                    displayName: "",
                    photoURL: "",
                    uid: ''
                }
            });
            console.log('signout successful')
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }
}

export default Auth;