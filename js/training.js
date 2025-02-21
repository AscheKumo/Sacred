// js/training.js
firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    console.log("No user detected in training.js; redirecting to login.");
    window.location.href = "index.html";
  } else {
    console.log("User detected in training.js:", user.email);
    var db = firebase.firestore();
    db.collection("characters").doc(user.uid).get().then(function(doc) {
      if (doc.exists) {
        var charClass = doc.data().class;
        console.log("Character class:", charClass);
        var skills = [];
        // Define available skills based on class.
        if (charClass === "thief") {
          skills = ["Pick Pocketing", "Stealth"];
        } else if (charClass === "squire") {
          skills = ["Sword Fighting", "Shield Bearing"];
        } else if (charClass === "blacksmith_apprentice") {
          skills = ["Knife Forging"];
        } else {
          skills = ["General Training"];
        }
        var skillSelect = document.getElementById("skill-select");
        skills.forEach(function(skill) {
          var option = document.createElement("option");
          option.value = skill;
          option.innerText = skill;
          skillSelect.appendChild(option);
        });
      }
    });
  }
});

document.getElementById("train-btn").addEventListener("click", function() {
  var selectedSkill = document.getElementById("skill-select").value;
  if (selectedSkill === "default") {
    document.getElementById("training-result").innerText = "Please select a skill to train.";
    return;
  }
  var user = firebase.auth().currentUser;
  var db = firebase.firestore();
  var charRef = db.collection("characters").doc(user.uid);
  db.runTransaction(function(transaction) {
    return transaction.get(charRef).then(function(doc) {
      if (!doc.exists) throw "No character!";
      var skills = doc.data().skills || {};
      var currentExp = skills[selectedSkill] || 0;
      var newExp = currentExp + 10; // Increase skill experience.
      skills[selectedSkill] = newExp;
      transaction.update(charRef, { skills: skills });
    });
  }).then(function() {
    console.log("Training transaction successful for skill:", selectedSkill);
    document.getElementById("training-result").innerText =
      "Training succeeded for " + selectedSkill + ".";
  }).catch(function(error) {
    console.error("Training transaction failed:", error);
  });
});
