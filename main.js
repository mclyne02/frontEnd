$(document).ready(function() {  
    console.log('Document Ready');
    $('.selectionCupcakes').hide();
    selectionClicked();
});

function selectionClicked() {
    var birthdayOccasionButton = $('.occasionButton:eq(0)');
    var eventOccasionButton = $('.occasionButton:eq(1)');
    var indOccasionButton = $('.occasionButton:eq(2)');

    var birthdayImage = $('.selectionImage:eq(0)');
    var eventImage = $('.selectionImage:eq(1)');
    var indImage = $('.selectionImage:eq(2)');

    var birthdayCupcakes = $('.selectionCupcakes:eq(0)');
    var eventCupcakes = $('.selectionCupcakes:eq(1)');
    var indCupcakes = $('.selectionCupcakes:eq(2)');

    birthdayOccasionButton.on('click', function() {
        birthdayImage.fadeToggle();
        birthdayCupcakes.fadeToggle(300);
    });

    eventOccasionButton.on('click', function() {
        eventImage.fadeToggle();
        eventCupcakes.fadeToggle(300);
    });

    indOccasionButton.on('click', function() {
        indImage.fadeToggle();
        indCupcakes.fadeToggle(300);
    });
};