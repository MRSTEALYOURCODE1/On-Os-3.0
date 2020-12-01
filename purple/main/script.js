function myFunction() {
    document.getElementById("panel").style.display = "block";
    enter();
}

document.getElementById("foldername").innerHTML = localStorage.getItem("nam");
    document.getElementById("foldername").innerHTML = localStorage.getItem("nam");
    document.getElementById("foldername").innerHTML = localStorage.getItem("nam");


if(document.getElementById("foldername").innerHTML == ""){
    document.getElementById("foldername").style.display = "none";
    document.getElementById("folder").style.display = "none";
}else{
    document.getElementById("foldername").style.display = "block";
    document.getElementById("folder").style.display = "block";
}

function enter() {
    var content = prompt("Enter URL");
    localStorage.setItem("url", content);
}

    

    function createFolder(){
        var folname = prompt("Create A Folder Name");
        localStorage.setItem("nam", folname);
        document.getElementById("foldername").innerHTML = localStorage.getItem("nam");

        if(document.getElementById("foldername").innerHTML == ""){
            document.getElementById("foldername").style.display = "none";
            document.getElementById("folder").style.display = "none";
        }else{
            document.getElementById("foldername").style.display = "block";
            document.getElementById("folder").style.display = "block";
        }
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

