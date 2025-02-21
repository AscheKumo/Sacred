// js/main.js
document.addEventListener("DOMContentLoaded", function() {
  const registerBtn = document.getElementById('register-btn');
  if (registerBtn) {
    registerBtn.addEventListener('click', function(){
      var email = document.getElementById('register-email').value;
      var password = document.getElementById('register-password').value;
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("User registered successfully:", userCredential.user);
        // Registration successful – redirect to dashboard for character creation.
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        console.error("Registration Error:", error.message);
      });
    });
  }
  
  const loginBtn = document.getElementById('login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', function(){
      var email = document.getElementById('login-email').value;
      var password = document.getElementById('login-password').value;
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("User logged in successfully:", userCredential.user);
        // Login successful – redirect to dashboard.
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
      });
    });
  }
});
