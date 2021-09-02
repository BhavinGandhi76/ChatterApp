var firebaseConfig = {
    apiKey: "AIzaSyCx_ORc5f_vNaldOJeqsKlhPWH-DrSVx5g",
    authDomain: "practise-9efe9.firebaseapp.com",
    databaseURL: "https://practise-9efe9-default-rtdb.firebaseio.com",
    projectId: "practise-9efe9",
    storageBucket: "practise-9efe9.appspot.com",
    messagingSenderId: "1058186284114",
    appId: "1:1058186284114:web:a6614d369c65cec177e38b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name, 
          message: msg, 
          like: 0 
      });
      document.getElementById("msg").value="";
  }
