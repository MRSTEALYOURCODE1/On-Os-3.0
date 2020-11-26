function myFunction() {
    document.getElementById("panel").style.display = "block";
    enter();
}

function enter() {
    var content = prompt("Enter URL");
    localStorage.setItem("url", content);
}


function check() {
    window.location.href=localStorage.getItem("url", '_blank');
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "35%";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

