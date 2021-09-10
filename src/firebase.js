import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDvWwq8v9xYeREUeSfuLaGpyAZnmevXY2U",
  authDomain: "linkedin-clone-yt-468cc.firebaseapp.com",
  projectId: "linkedin-clone-yt-468cc",
  storageBucket: "linkedin-clone-yt-468cc.appspot.com",
  messagingSenderId: "299384956197",
  appId: "1:299384956197:web:78d14b32202f4807bba6cc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
