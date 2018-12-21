function goURL(link) {
    if (link == 1){
        location.href="index.html"
    }
    if (link == 2){
        location.href="index2.html"
    }
    if (link == 3){
        location.href="index3.html"
    }
  }

function kuva() {
    var x = document.getElementById("p2");
    if (x.style.visibility == "hidden"){
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }

}