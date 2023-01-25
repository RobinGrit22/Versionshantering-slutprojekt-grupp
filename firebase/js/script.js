// Hide-show messagePostContainer

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
})

//Limitation on characters

const maxCharacters = 500;
$('#message-input').on('keyup', function() {

  let characters = $(this).val().length;

  if (characters > maxCharacters) {
   
    $(this).val($(this).val().substring(0, maxCharacters));
  }
});