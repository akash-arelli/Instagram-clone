import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const  firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDzHjcpx6GnoVJX-VS5uOwL1DVscmeDOmI",
    authDomain: "instagram-clone-3dba8.firebaseapp.com",
    projectId: "instagram-clone-3dba8",
    storageBucket: "instagram-clone-3dba8.appspot.com",
    messagingSenderId: "191518732816",
    appId: "1:191518732816:web:c902644c3149769d425095",
    measurementId: "G-N8R9C4QB1Z"
  })


  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();


  export {db, auth , storage};