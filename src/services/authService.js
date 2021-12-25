import * as firebase from './firebase.js';
import { doc, setDoc } from "firebase/firestore";

function register(email, password) {
    return firebase.auth.createUserWithEmailAndPassword(email, password);
}

function login(email, password) {
    return firebase.auth.signInWithEmailAndPassword(email, password);
}

function logout() {
    return firebase.auth.signOut();
}

async function addUserToCollection(userData) {
    await setDoc(doc(firebase.db, "userInfo", userData.id), userData);
}

async function getUserById(userId) {
    let collection = await firebase.db.collection('userInfo').get(userId);
    return collection.docs.map(doc => doc.data()).find(x => x.id === userId);
}

async function updateUserCollection(data) {
    await firebase.db.collection('userInfo')
        .doc(data.id)
        .update(data)
}

export {
    register,
    login,
    logout,
    addUserToCollection,
    getUserById,
    updateUserCollection
}