function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+"onclick= 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
   });});}
getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "letchat_page.html"
}
// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCp2F9o4T2Di0-nSFFD-rIhhkxO0DPhf8U",
   authDomain: "letchatwebapp-38de4.firebaseapp.com",
   projectId: "letchatwebapp-38de4",
   storageBucket: "letchatwebapp-38de4.appspot.com",
   messagingSenderId: "668599423353",
   appId: "1:668599423353:web:ecc5c19857bdc99c8f9fa8"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);