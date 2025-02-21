// js/profile.js
firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    console.log("No user detected in profile.js; redirecting to login.");
    window.location.href = "index.html";
  } else {
    console.log("User detected in profile.js:", user.email);
    var db = firebase.firestore();
    var charRef = db.collection("characters").doc(user.uid);
    charRef.get().then(function(doc) {
      if (doc.exists) {
        var data = doc.data();
        document.getElementById("profile-stats").innerText =
          "Name: " + data.username +
          "\nLevel: " + data.level +
          "\nExperience: " + data.experience +
          "\nGold: " + data.gold;
        if(data.bio) {
          document.getElementById("bio-input").value = data.bio;
        }
        console.log("Profile data loaded for:", data.username);
      }
    });
    
    document.getElementById("save-bio-btn").addEventListener("click", function() {
      var bio = document.getElementById("bio-input").value;
      charRef.update({ bio: bio }).then(function() {
        console.log("Bio updated for user.");
        alert("Bio saved!");
      });
    });
  }
});
