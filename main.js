$(document).ready(function() {  
    console.log('Document Ready');
    $('.selectionCupcakes').hide();
    selectionClicked();
});

function selectionClicked() {
    $('.occasionButton').on('click', function() {

        var selectedCupcakes = $(this).nextAll('.selectionCupcakes');
        var listIsHidden = selectedCupcakes.is(':visible');
        if(listIsHidden) {
            $(this).next().delay(400).fadeToggle();
            selectedCupcakes.fadeToggle();
        } else {
            $(this).next().fadeToggle();
            selectedCupcakes.delay(400).fadeToggle();
        }
    });
};
