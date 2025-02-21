// js/main.js

// Registration
document.getElementById('register-btn').addEventListener('click', function(){
  var email = document.getElementById('register-email').value;
  var password = document.getElementById('register-password').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Registration successful – redirect to dashboard for character creation.
    window.location.href = "dashboard.html";
  })
  .catch((error) => {
    console.error("Registration Error:", error.message);
  });
});

// Login
document.getElementById('login-btn').addEventListener('click', function(){
  var email = document.getElementById('login-email').value;
  var password = document.getElementById('login-password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Login successful – redirect to dashboard.
    window.location.href = "dashboard.html";
  })
  .catch((error) => {
    console.error("Login Error:", error.message);
  });
});
