import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

class Auth {
    #auth = getAuth();
    #provider = new GoogleAuthProvider();
    login() {
        signInWithPopup(this.#auth, this.#provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(token, user);
                // ...
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
    logout() {

    }
}

export default Auth;