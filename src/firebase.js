import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-ooCoRz7cXIc1gE37zHTU68CF_w0dLgU",
    authDomain: "snapchat-clone-2dc5b.firebaseapp.com",
    projectId: "snapchat-clone-2dc5b",
    storageBucket: "snapchat-clone-2dc5b.appspot.com",
    messagingSenderId: "552069716580",
    appId: "1:552069716580:web:8cb5d13c3c4b1831dd1d71",
    measurementId: "G-CD9VWFRQEK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth =firebase.auth();
  const storage = firebase.storage();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,storage,provider};