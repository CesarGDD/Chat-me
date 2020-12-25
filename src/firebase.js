import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDBen8kv2BotA7kEeadJsO0JpZJP65plmk",
  authDomain: "chat-me-ebf5a.firebaseapp.com",
  projectId: "chat-me-ebf5a",
  storageBucket: "chat-me-ebf5a.appspot.com",
  messagingSenderId: "899020716619",
  appId: "1:899020716619:web:f4346ef25030d682c02bce",
  measurementId: "G-ED0KDL0E5G"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;