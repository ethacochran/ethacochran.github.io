// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
   
applyFilterNoBackground(reddify);
applyFilterNoBackground(decreaseBlue);
applyFilter(increaseGreenbyBlue
    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
    for (var i = 0; i < image.length; i++) {
        var row = image[i];
        for (var r = 0; r < row.length; r++) {
            var rgbString = image[i][r];
            var rgbNumbers = rgbStringToArray(rgbString);
            filterFunction(rgbNumbers);
            var rgbString = rgbArrayToString(rgbNumbers);
            image[i][r] = rgbString;
            
        }
    }
}
    

// TODO 6: Create the applyFilterNoBackground function
function applyFilterNoBackground (filterFunction){
   
        for (var i = 0; i < image.length; i++) {
        var row = image[i];
        for (var r = 0; r < row.length; r++) {
            if (image[i][r] !== image[0][0]) {
            var rgbString = image[i][r];
            var rgbNumbers = rgbStringToArray(rgbString);
            filterFunction(rgbNumbers);
            var rgbString = rgbArrayToString(rgbNumbers);
            image[i][r] = rgbString;
            }
        }
    }
}
   



// TODO 3 & 5: Create filter functions
function reddify (array) {
    array[RED] = 255;
}
function decreaseBlue (array) {
    array[BLUE] = keepInBounds(array[BLUE] - 50);
}
function increaseGreenbyBlue (array) {
  array[GREEN] = keepInBounds(array[GREEN] + array[BLUE])
}
function keepInBounds (num) {
   num = Math.max(num, 0)
   num = Math.min(num, 255)
  return num;
}
// CHALLENGE code goes below here
