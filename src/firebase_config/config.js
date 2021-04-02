import firebase from 'firebase';

/* 
    ФАЙЛ КОНФІГУРАЦІЇ firebase

    firebaseConfig - ЗАМІНИТЕ на свої дані, коли зареєструєтесь у  firebase
*/
const firebaseConfig = {
    apiKey: "AIzaSyB8gsStqoIeTWyr08-6cFORM9ghTRPLvI4",
    authDomain: "beauty-salon-aa0ae.firebaseapp.com",
    databaseURL: "https://beauty-salon-aa0ae-default-rtdb.firebaseio.com",
    projectId: "beauty-salon-aa0ae",
    storageBucket: "beauty-salon-aa0ae.appspot.com",
    messagingSenderId: "47308817997",
    appId: "1:47308817997:web:7d0fe0439b05a01cf3fe04",
    measurementId: "G-MFKXJHGH7J"
  };

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true,
}
firestore.settings(settings);

export const _Auth = firebase.auth();

export const db = firebase.firestore();         //firestore для зберігання записів на процедури

export function _googleLogin() {        //доступ до АРІ Гугл календаря
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/calendar');

    console.log('google login');
    return firebase.auth().signInWithPopup(provider)
};