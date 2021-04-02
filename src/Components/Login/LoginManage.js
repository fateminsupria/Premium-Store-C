import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


export const initializeFirebase = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(googleProvider)
        .then(response => {
            const { displayName, email } = response.user;
            const signedInUser = {
                name: displayName,
                email: email,
                error: '',
                success: true,
                isSignIn: true
            }
            // console.log(signedInUser);
            return signedInUser;
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
}

export const signOut = () => {
    return firebase.auth().signOut()
        .then(res => {
            const signOutUser = {
                name: '',
                email: '',
                isSignIn: false,
                error: '',
                success: false
            }
            return signOutUser;
        })
        .catch(err => {

        })
}

export const facebookLogin = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(facebookProvider)
        .then(res => {
            const { displayName, email } = res.user;
            const facebookUser = {
                name: displayName,
                email: email,
                isSignIn: true,
                error: '',
                success: true
            }
            return facebookUser;
        })
        .catch(err => {

        })

}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            verifyEmail();
            updateUserName(name);
            return newUserInfo;
        })
        .catch(err => {
            const newUserInfo = {};
            newUserInfo.error = err.message;
            newUserInfo.success = false;
            return newUserInfo;
        })
}

export const signInWithEmailAndPassword = (email, password) => {

    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.success = true;
            newUserInfo.error = '';
            return newUserInfo;
        })
        .catch(err => {
            const newUserInfo = {};
            newUserInfo.error = err.message;
            newUserInfo.success = false;
            return newUserInfo;
        })
}

const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,
    })
        .then(() => {

        })
        .catch(error => {

        });
}

const verifyEmail = () => {
    const user = firebase.auth().currentUser;

    user.sendEmailVerification()
        .then(() => {
            alert('Email Verification Message Sent!!!')
        }).catch((error) => {

        });
}

export const passwordChange = (email) => {
    var auth = firebase.auth();
    var emailAddress = email;

    auth.sendPasswordResetEmail(emailAddress)
        .then(() => {
            alert('Password Reset Email Sent');
        })
        .catch((error) => {
            alert(error.message)
        })
}

export const authTokenStore = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(idToken => {
            // console.log(idToken);
            sessionStorage.setItem('token', idToken);
            
        })
        .catch( error => {
        });
}