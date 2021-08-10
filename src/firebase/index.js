import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBRlAqroN4_UMKAKLE4eYFtkV4LFs5cr4c",
  authDomain: "javascrip-2f42e.firebaseapp.com",
  projectId: "javascrip-2f42e",
  storageBucket: "javascrip-2f42e.appspot.com",
  messagingSenderId: "836836968444",
  appId: "1:836836968444:web:60f6ee8229d33bfea7d479",
  measurementId: "G-XZGTVMLSD4"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();
export default firebase;