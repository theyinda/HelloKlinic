// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyBc3qgkQEbos6OgcxRRjhZ2pSHzd89ObzI",
  authDomain: "helloklinic-38fc4.firebaseapp.com",
  databaseURL: "https://helloklinic-38fc4-default-rtdb.firebaseio.com",
  projectId: "helloklinic-38fc4",
  storageBucket: "helloklinic-38fc4.appspot.com",
  messagingSenderId: "672658233219",
  appId: "1:672658233219:web:7fb8d347382621cb8a48b6",
  measurementId: "G-P3RG3XF75R",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


 // Reference messages collection

var messagesRef = firebase.database().ref("records");


// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values

  var email = getInputVal("email");

  // Save message
  saveMessage(email);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 4000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email: email
  });
}

