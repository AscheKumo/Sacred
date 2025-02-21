// js/chat.js
firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    window.location.href = "index.html";
  } else {
    var db = firebase.firestore();
    // Listen for chat messages ordered by timestamp.
    db.collection("chatMessages").orderBy("timestamp")
      .onSnapshot(function(snapshot) {
        var chatBox = document.getElementById("chat-box");
        chatBox.innerHTML = "";
        snapshot.forEach(function(doc) {
          var msg = doc.data();
          var messageEl = document.createElement("p");
          var content = msg.content;
          // Process "/me" command to italicize actions.
          if (content.startsWith("/me ")) {
            content = "<i>" + msg.username + content.substring(3) + "</i>";
          }
          messageEl.innerHTML = "<strong>" + msg.username + ":</strong> " + content;
          chatBox.appendChild(messageEl);
        });
      });
  }
});

document.getElementById("send-chat-btn").addEventListener("click", function() {
  var user = firebase.auth().currentUser;
  var message = document.getElementById("chat-input").value;
  if (message.trim() === "") return;
  var db = firebase.firestore();
  // Retrieve the character’s name for the chat display.
  db.collection("characters").doc(user.uid).get().then(function(doc) {
    var username = doc.exists ? doc.data().username : user.email;
    db.collection("chatMessages").add({
      username: username,
      content: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(function() {
      document.getElementById("chat-input").value = "";
    });
  });
});
