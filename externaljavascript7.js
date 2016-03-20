var i = 0;
var image = new Array();
 
image[0] = "imgg1.jpg";
image[1] = "imgg2.jpg";
image[2] = "imgg3.jpg";

function swapImage()
{
   document.slide.src = image[i];
   if(i < image.length - 1) i++; else i = 0;
   setTimeout("swapImage()",3000);
}
window.onload=swapImage;



function myFunction() {
    var person = prompt("Please enter your name", "Vaishnavi");
	var suggestion = prompt("Please enter the suggestion");
     if (person != null) {
        window.alert("Hello " + person + "! How are you today?"+" Thanks for your suggestions.")
    }
}

function changeImage(event)
{
event = event || window.event;
var targetElement = event.target || event.srcElement;

if (targetElement.tagName == "IMG")
{
document.getElementById("mainimage").src = targetElement.getAttribute("src");
}
}