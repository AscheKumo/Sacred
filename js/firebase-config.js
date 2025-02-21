// js/firebase-config.js
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

console.log("Initializing Firebase with config:", firebaseConfig);
firebase.initializeApp(firebaseConfig);
console.log("Firebase has been initialized successfully.");
