//NAV BAR

function openNav() {
  document.getElementById("mySidenav").style.width = "30vw";
  document.getElementById("main").style.marginRight = "30vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}


//PLAY VIDEO

var videoMain = document.getElementById("indexVideo"); 

function playPause() { 
  if (videoMain.paused) 
    videoMain.play(); 
  else 
    videoMain.pause(); 
} 

var video2 = document.getElementById("video2"); 

function playPause2() { 
  if (video2.paused) 
    video2.play();
    
  else 
    video2.pause(); 
}

function autoPlay() {
    videoMain.autoplay = true;
    videoMain = load();
  }
  


//GET NICKNAME
let names = ["Alberto","Amador","Falafe","Beto"]; 

function finalName(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "Alberto"){
    
    document.createElement("Alberto");
    var newText = document.createTextNode("Alberto,");
    s2.appendChild(newText);
    
    var parent = document.getElementsByTagName("label")[0];
    var child = parent.getElementsByTagName("select")[0];
    var removed = parent.removeChild(child);
    parent.appendChild(removed);
    child.style.display = "none";

	} else if(s1.value == "Amador"){

    document.createElement("Amador");
    var newText = document.createTextNode("Amador,");
    s2.appendChild(newText);
    
    var parent = document.getElementsByTagName("label")[0];
    var child = parent.getElementsByTagName("select")[0];
    var removed = parent.removeChild(child);
    parent.appendChild(removed);
    child.style.display = "none";

	} else if(s1.value == "Falafe"){
    
    document.createElement("Falafe");
    var newText = document.createTextNode("Falafe,");
    s2.appendChild(newText);
    
    var parent = document.getElementsByTagName("label")[0];
    var child = parent.getElementsByTagName("select")[0];
    var removed = parent.removeChild(child);
    parent.appendChild(removed);
    child.style.display = "none";

	} else if(s1.value == "Beto"){
    
    document.createElement("Beto");
    var newText = document.createTextNode("Beto,");
    s2.appendChild(newText);
    
    var parent = document.getElementsByTagName("label")[0];
    var child = parent.getElementsByTagName("select")[0];
    var removed = parent.removeChild(child);
    parent.appendChild(removed);
    child.style.display = "none";

	}
}
