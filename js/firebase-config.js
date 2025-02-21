// firebase-config.js
var firebaseConfig = {
  apiKey: "AIzaSyDj1BAEqMrLGnYzDZ_u-xB086TYuIfRz70",
  authDomain: "sacredk-a50c4.firebaseapp.com",
  projectId: "sacredk-a50c4",
  storageBucket: "sacredk-a50c4.firebasestorage.app",
  messagingSenderId: "1067109492118",
  appId: "1:1067109492118:web:eb8c619199b364ef7ba9b7",
  measurementId: "G-X2NJQMR47K"
};

console.log("Firebase configuration object:", firebaseConfig);

try {
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase has been initialized successfully v3.");

  var app = firebase.app();
  console.log("Firebase App Name:", app.name);
  console.log("Firebase App Options:", app.options);

  // Debug: Check the storageBucket value
  if (app.options.storageBucket) {
    console.log("Storage Bucket from Firebase Options:", app.options.storageBucket);
    // Warn if the storageBucket doesn't match the typical pattern
    if (app.options.storageBucket.indexOf("appspot.com") === -1) {
      console.warn("Warning: The storageBucket value doesn't match the typical pattern (PROJECT_ID.appspot.com).");
    }
  } else {
    console.warn("No storageBucket value found in Firebase App Options.");
  }

  // Check availability of services
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
