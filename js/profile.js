// js/profile.js
firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    window.location.href = "index.html";
  } else {
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
      }
    });
    
    document.getElementById("save-bio-btn").addEventListener("click", function() {
      var bio = document.getElementById("bio-input").value;
      charRef.update({ bio: bio }).then(function() {
        alert("Bio saved!");
      });
    });
  }
});
