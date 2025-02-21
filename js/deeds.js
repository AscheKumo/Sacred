// js/deeds.js
firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    console.log("No user detected; redirecting to login.");
    window.location.href = "index.html";
  } else {
    console.log("User detected in deeds.js:", user.email);
  }
});

document.getElementById("perform-deed-btn").addEventListener("click", function() {
  var deedTypeElement = document.querySelector('input[name="deed"]:checked');
  if (!deedTypeElement) {
    document.getElementById("result").innerText = "Please select a deed.";
    return;
  }
  var deedType = deedTypeElement.value;
  
  // Simulate deed processing (80% success chance)
  var success = Math.random() < 0.8;
  var rewardGold = 10; // Base reward – scales with level and deed difficulty in a full game.
  
  if (success) {
    var user = firebase.auth().currentUser;
    var db = firebase.firestore();
    var charRef = db.collection("characters").doc(user.uid);
    db.runTransaction(function(transaction) {
      return transaction.get(charRef).then(function(doc) {
        if (!doc.exists) throw "No character!";
        var newGold = (doc.data().gold || 0) + rewardGold;
        var newExp = (doc.data().experience || 0) + 5; // Award some experience.
        transaction.update(charRef, { gold: newGold, experience: newExp });
      });
    }).then(function() {
      console.log("Deed transaction successful.");
      document.getElementById("result").innerText =
        "Deed succeeded! You earned " + rewardGold + " gold and some experience.";
    }).catch(function(error) {
      console.error("Transaction failed:", error);
    });
  } else {
    document.getElementById("result").innerText = "Deed failed!";
  }
});
