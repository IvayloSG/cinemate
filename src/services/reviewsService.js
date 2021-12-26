import * as firebase from './firebase.js';
import { collection, doc, getDocs, setDoc, deleteDoc } from "firebase/firestore";

async function addReviewToCollection(reviewData) {
    return await setDoc(doc(firebase.db, "reviews", reviewData.id), reviewData);
}

async function getAllReviews() {
    const query = await getDocs(collection(firebase.db, 'reviews'));
    return query.docs.map(doc => doc.data());
}

async function updateReviewsCollection(data) {
    await firebase.db.collection('reviews')
        .doc(data.id)
        .update(data)
}

async function deleteReviewById(reviewId) {
    try {
        const response = await deleteDoc(doc(firebase.db, "reviews", reviewId));
        return response;
    } catch (error) {
        console.log(error.message);
    }
}

export {
    addReviewToCollection,
    getAllReviews,
    updateReviewsCollection,
    deleteReviewById
}