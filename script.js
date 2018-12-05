function goURL(link) {
    if (link == 2){
        location.href="index2.html"
    }
    if (link == 3){
        location.href="index3.html"
    }
  }

function kuva() {
    var x = document.getElementById("myP");
    if (x.style.visibility == "hidden"){
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }

}