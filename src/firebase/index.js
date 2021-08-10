
import firebase from "firebase"
  var firebaseConfig = {
    apiKey: "AIzaSyDhu1AtlmB8T403fNht7t-12XCQ-D1-yt0",
    authDomain: "reactjs-902c1.firebaseapp.com",
    projectId: "reactjs-902c1",
    storageBucket: "reactjs-902c1.appspot.com",
    messagingSenderId: "22585552053",
    appId: "1:22585552053:web:8062961087b122f75a22fc",
    measurementId: "G-1VHN5YXH7Y"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase