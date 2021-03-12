var checkbox = document.getElementsByName("checkbox")[0];
checkbox.onclick = function() {myFunction()};

function myFunction() {
  if(checkbox.checked) { 
    document.getElementById("topnav").style.backgroundColor = "#397bb8";
    document.getElementById("sidebar").style.backgroundColor = "#397bb8";
    document.getElementById("footer").style.backgroundColor = "#397bb8";
    document.getElementById("bottomnav").style.backgroundColor = "#397bb8";
  }
  else {          
    document.getElementById("topnav").style.backgroundColor = "#042b50";
    document.getElementById("sidebar").style.backgroundColor = "#042b50";
    document.getElementById("footer").style.backgroundColor = "#042b50";
    document.getElementById("bottomnav").style.backgroundColor = "#042b50";
  }
}