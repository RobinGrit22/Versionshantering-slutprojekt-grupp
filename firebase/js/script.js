// Hide-show messagePostContainer
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/779");

$('#messagePopUpBtn').click(() => {
    $('.messagePostContainer').removeClass('inactive');
    $('.messagePostContainer').addClass('active');
    audio.play();
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