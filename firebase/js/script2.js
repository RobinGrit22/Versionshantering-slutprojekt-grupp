
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getDatabase , ref , set , onValue, remove, push} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    databaseURL: "https://demo1-5f901-default-rtdb.europe-west1.firebasedatabase.app/",
    apiKey: "AIzaSyD2QeWme0Pcka0jH8pnvnluVjkH58ppHvk",
    authDomain: "demo1-5f901.firebaseapp.com",
    projectId: "demo1-5f901",
    storageBucket: "demo1-5f901.appspot.com",
    messagingSenderId: "423381258044",
    appId: "1:423381258044:web:c0998e15129e5d061ad839"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

//   console.log(database)


//   import { getDatabase, ref, set } from "firebase/database";


$('#send').click(function(event){
  event.preventDefault();
  let userInput = $('#name-input').val();
  let messageInput = $('#message-input').val();
  
  $('<div>').attr('id', 'myId').appendTo('.messageContainer');
  let randomNumber = Math.floor(1000 + Math.random() * 9000);

  set( ref(database, userInput + '-' + randomNumber) , {
    dateOfCretion: new Date().toString('yyyy-MM-dd hh:mm:ss'),
    message: messageInput
});
})

// function writeUserData() {
  
//   set(ref(database, 'robin'), {
//      message: 'hello',
     
    
//   });
// }
// writeUserData();



// onValue(ref(database, 'robin'), (snapshot) => {
//     const data = snapshot.val();
//     // alert(data.message)
//   },{onlyOnce:  true}
//   );


//   onValue(ref(database, '/'), (snapshot) => {   //root kolla alla namn i root
//     snapshot.forEach((childSnapshot) => {
//       const childKey = childSnapshot.key;
//       const childData = childSnapshot.val();
//       console.log(childKey, childData)
//     });
//   }, {
//     onlyOnce: true
//   });
  

