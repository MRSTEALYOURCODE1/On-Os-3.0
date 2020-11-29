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

function pwd(){
    var hi = prompt("Set Password");
    localStorage.setItem("hi", hi);
}

window.onload = function like(){
        if(localStorage.getItem("hi") == null){
        pwd();
    }else{
        var no = prompt("Enter password");
        if(no!=localStorage.getItem("hi")){
            alert("incorrect");
            location.reload();
        }else if(no==localStorage.getItem("hi")){
            console.log("correct");
        }
    }

}

