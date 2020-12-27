import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

export function createUser(user) {
  return firestore.collection('users').doc(user.uid).set(user, { merge: true });
}

export function createSite(siteData) {
  return firestore.collection('sites').add(siteData);
}
