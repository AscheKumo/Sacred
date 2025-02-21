// firebase-config.js
var firebaseConfig = { 
  apiKey: "AIzaSyBtcV1JZX8Xmc374WcCD1CJ68pGLEQpnUc",
  authDomain: "sacredgg-a171a.firebaseapp.com",
  projectId: "sacredgg-a171a",
  storageBucket: "sacredgg-a171a.firebasestorage.app", // Check if this is correct!
  messagingSenderId: "416265042350",
  appId: "1:416265042350:web:75cf8705a1fb1f5174b03f",
  measurementId: "G-EC25JFK8S7"
};

console.log("Firebase configuration object:", firebaseConfig);

try {
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase has been initialized successfully.");
  
  var app = firebase.app();
  console.log("Firebase App Name:", app.name);
  console.log("Firebase App Options:", app.options);
  
  // Verify that Firebase Auth and Firestore are available.
  if (firebase.auth) {
    console.log("Firebase Auth is available.");
  } else {
    console.error("Firebase Auth is not available!");
  }
  
  if (firebase.firestore) {
    console.log("Firebase Firestore is available.");
  } else {
    console.error("Firebase Firestore is not available!");
  }
  
  // If you're using Firebase Storage, check that too.
  if (firebase.storage) {
    try {
      var storage = firebase.storage();
      console.log("Firebase Storage is available, Bucket:", storage.app.options.storageBucket);
    } catch (err) {
      console.error("Error accessing Firebase Storage:", err);
    }
  } else {
    console.warn("Firebase Storage is not loaded (if you're not using it, this is fine).");
  }
  
} catch (error) {
  console.error("Error initializing Firebase:", error);
}
