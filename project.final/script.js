function showMenu() {
    document.getElementById("nav").style.display = "block";
    document.getElementById("close").style.display = "inline";
}
function closeMenu() {
    document.getElementById("nav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}