// js/firebase-config.js
var firebaseConfig = {
  apiKey: "AIzaSyBtcV1JZX8Xmc374WcCD1CJ68pGLEQpnUc",
  authDomain: "sacredgg-a171a.firebaseapp.com",
  projectId: "sacredgg-a171a",
  storageBucket: "sacredgg-a171a.firebasestorage.app",
  messagingSenderId: "416265042350",
  appId: "1:416265042350:web:75cf8705a1fb1f5174b03f",
  measurementId: "G-EC25JFK8S7"
};

console.log("Initializing Firebase with config:", firebaseConfig);
firebase.initializeApp(firebaseConfig);
console.log("Firebase has been initialized successfully.");
