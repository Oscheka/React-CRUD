// import firebase from "firebase/app";
// import "firebase/database";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCE2V2a-5cFs3hDDKdQ_v-ziV-ptaQ1pQk",
  authDomain: "react-contact-e5b0d.firebaseapp.com",
  projectId: "react-contact-e5b0d",
  storageBucket: "react-contact-e5b0d.appspot.com",
  messagingSenderId: "1076762614010",
  appId: "1:1076762614010:web:8b9668611346819ab59143",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
