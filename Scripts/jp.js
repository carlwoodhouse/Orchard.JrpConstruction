
var imageIndex = 0;
var imagesArray = [
    "Themes/Orchard.JrpConstruction/assets/van-background.jpg",
    "Themes/Orchard.JrpConstructionassets/van-background2.jpg",
    "Themes/Orchard.JrpConstructionassets/van-background3.jpg"
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