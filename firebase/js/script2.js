
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getDatabase , ref , set , onValue, query, orderByChild, remove, push,update} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
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


$('#send').click(function(event){
  // event.preventDefault();
  let userInput = $('#name-input').val();
  let messageInput = $('#message-input').val();
  let date = new Date().toString('yyyy-MM-dd hh:mm:ss')
  let dateOrder = new Date().getTime();
  garfAppear()

  set( ref(database, '/posts/' + userInput) , {
    dateOfCretion: date,
    message: messageInput,
    //likes: 0,      // dont set likes just set likes when its  
    dateOrder: dateOrder,
});

})

onValue(query(ref(database, '/posts/'), orderByChild('dateOrder')), (snapshot)  => {   //root kolla alla namn i root
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
     
      let currentLikesCount=childData.likes|0;
    let newMessageContainer = $('<div>').attr('class', 'newMessageContainer');
    let messageItem = $('<div>').attr('class', 'messageItem').appendTo(newMessageContainer);
    // ändra färg på varje meddelande
    $(messageItem).css('background-color', `hsl(${_.random(0, 360)}, 100%, 90%)`);
    
    $('<h3></h3>').appendTo(messageItem).text(childKey)
    $('<p></p>').appendTo(messageItem).text(childData.message)
    let messageIconStyle = $('<div>').attr('class', 'messageIconStyle').appendTo(messageItem);
    let form = $('<form>').appendTo(messageIconStyle);
    let likesPara = $('<p>').attr('class', 'amountOfLikes').appendTo(form);
    $(likesPara).html(`${currentLikesCount}`);
    $('<button></button>').attr('class', 'likeBtn').on("click", function(event) {
      event.preventDefault()
      let target = $(event.target)
      target.name=childKey;
      console.log( target.name,target.css("color"));
      if(target.css("color")!="rgb(255, 0, 0)"){
         target.css("color", "red")
         currentLikesCount++;
      }
      else{ 
        target.css("color", "black") //black is rgb(0,0,0) //transparent rgba(0,0,0,0)
        currentLikesCount--;
      }
      update( ref(database, '/posts/' + childKey) ,{
        likes: currentLikesCount,      // apply new likescount
        });
        console.log(childKey+" likes:",currentLikesCount);
        $(likesPara).html(`${currentLikesCount}`);
    }).appendTo(form)
    // likeButton.addEventListener('click', togglered)
    $(document).ready(function(){
      $(".likeBtn").html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>');
    });
    $('<button></button>').attr('class', 'commentBtn').appendTo(form)
    // $('<p></p>').appendTo(messageIconStyle).text()
    $('.messageContainer').prepend(newMessageContainer)
    $(document).ready(function(){
      $(".commentBtn").html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>');
    });
    $('<p></p>').appendTo(messageIconStyle).text(childData.dateOfCretion)
    });
  }, {
     onlyOnce: true 
  });
  
//Search functions, display in a container and show the total hits of matching word
onValue(ref(database, '/posts/'), (snapshot) => {
  const searchInput = document.querySelector('#search-input');
  const searchBtn = document.querySelector('#search-btn');
  const searchErrorText = document.querySelector('.search-error-text');
  const searchResultsContainer = document.querySelector('#search-results-container');
  const searchResultCount = document.querySelector('#search-result-count');

  searchBtn.addEventListener('click', searchMessages);

  function searchMessages() {
    const searchQuery = searchInput.value.toLowerCase();
    if (searchInput.value <= 0) {
      searchResultsContainer.innerHTML = '';
      searchResultCount.innerText = ``;
      searchErrorText.innerText = 'No inputs';
    }
    else {
      const filteredMessages = [];
      snapshot.forEach(childSnapshot => {
        if(childSnapshot.val() && childSnapshot.val().message){
          if(childSnapshot.val().message.toLowerCase().includes(searchQuery.toLowerCase())){
             filteredMessages.push(childSnapshot);
          }
      }
      });

      searchResultsContainer.innerHTML = '';

      //Add classes or id to style inside this foreach loop
      filteredMessages.forEach(function (childSnapshot) {
        const childData = childSnapshot.val();
        const childKey = childSnapshot.key;
        const messageDiv = document.createElement('div');
        messageDiv.innerText = childKey + ": " + childData.message;
        messageDiv.style.backgroundColor = childData.color;
        messageDiv.classList.add("messageCard");
        searchResultsContainer.appendChild(messageDiv);
      });

      searchResultCount.innerText = `${filteredMessages.length} matching results`;
      searchInput.value = '';
      searchErrorText.innerText = '';
    }
  }
});
