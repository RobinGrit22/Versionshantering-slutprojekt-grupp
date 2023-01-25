// Hide-show messagePostContainer
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/779");

$('#messagePopUpBtn').click(() => {
    $('.messagePostContainer').removeClass('inactive');
    $('.messagePostContainer').addClass('active');
})

$('#back').click( () => {
    $('.messagePostContainer').removeClass('active');
    $('.messagePostContainer').addClass('inactive');
})

$('#send').click ( () => {
    $('.messagePostContainer').removeClass('active');
    $('.messagePostContainer').addClass('inactive');
    audio.play();
})

//Limitation on characters

const maxCharacters = 500;
$('#message-input').on('keyup', function() {

  let characters = $(this).val().length;

  if (characters > maxCharacters) {
   
    $(this).val($(this).val().substring(0, maxCharacters));
  }
});

let garfAnimation = anime({
  targets: '#garf',
  delay: 0,
  keyframes: [
    {translateY: '24'},
    {translateX: '-45'},
    {rotate: '75'},
    {translateY: '600'},
    {opacity: 0},
  ],
  autoplay: false,
  })
  
  function garfAppear() {
    if (document.getElementById('message-input').value.indexOf("garfield") > -1) {
        console.log('garfield') 
        let garfield = document.getElementById('garf')
        garfield.style.display= "block"
        garfAnimation.play();     
      }else{
        document.getElementById('garf').style.display = "none"
      }
  }



