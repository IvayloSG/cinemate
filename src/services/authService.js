import * as firebase from './firebase.js'

function register(email, password) {
    return firebase.auth.createUserWithEmailAndPassword(email, password);
}

function login(email, password) {
    return firebase.auth.signInWithEmailAndPassword(email, password);
}

function logout() {
    return firebase.auth.signOut();
}

export {
    register,
    login,
    logout,
}