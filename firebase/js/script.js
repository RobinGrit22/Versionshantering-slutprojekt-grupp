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