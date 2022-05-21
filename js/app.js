
var darkBtn =document.getElementById("darkbtn")


darkBtn.onclick=function(){
    darkBtn.classList.toggle("darkbtnon");
    document.body.classList.toggle("darktheme");
    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }

}



if(localStorage.getItem("theme")=="light"){
    darkBtn.classList.remove("darkbtnon");
    document.body.classList.remove("darktheme");
}
else if(localStorage.getItem("theme")=="dark"){
    darkBtn.classList.add("darkbtnon");
    document.body.classList.add("darktheme");
}
else{
    localStorage.setItem("theme","light");
}