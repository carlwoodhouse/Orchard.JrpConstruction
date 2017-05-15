
var imageIndex = 0;
var imagesArray = [
    "assets/van-background.jpg",
    "assets/van-background2.jpg",
    "assets/van-background3.jpg"
];

function changeBackground(){
    var index = imageIndex++ % imagesArray.length;
    $('.jp header').backstretch(imagesArray[index]); 
    $('.jp header .hcie').removeClass('hcie'); 
    $('.navbar-default').addClass('affix'); 
}

$(document).ready(function() {
  setInterval(changeBackground, 7000);
});