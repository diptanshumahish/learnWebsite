// const search = () =>{
//     const searcbox = document.getElementById("search-item").value.toUpperCase();
//     const storeItems = document.getElementById("coursewindows")
//     const course = document.querySelectorAll(".crs")
//     const courseName= storeItems.getElementsByTagName("h3")

//     for(var i=0 ; i<courseName.length;i++){
//         let match= course[i].getElementsByTagname("h3")[0];
//         if(match){
//             let textValue = match.textContent || match.innerHtml

//             if (textValue.toUpperCase().indexOf(searcbox) > -1) {
//                 course[i].style.display = "";

                
//             }else{
//                 course[i].style.display = "none";
//             }
//         }

//     }
// }





// const cards= document.getElementById("coursewindows")
// const  course = document.querySelectorAll(".crs")
// let courseName=[document.querySelectorAll("h3")]


// const searchInput = document.querySelector("[data-search]")
// searchInput.addEventListener("input", (e) => {
//     const value = e.target.value
//     for (let i = 0; i< courseName.length; i++) {
//       const result = courseName[i];
//       if (value==courseName) {
//           console.log("uwoaw");
          
//       }
       
//     }
    
// })




// function search(){
//     var input ,filter , ul ,li,name,inn, a ,i ,txtValue ;
//     input =document.getElementById("search-item");
//     filter =input.value.toUpperCase();
//     ul = document.getElementById("coursewindows");
//     // li = ul.querySelector(".crs");
//     // name=li.querySelector(".insideCardText");
//     inn=ul.getElementsByTagName("h3");
//     for(i=0; i<inn.length;i++){
//         a=inn[i].getElementsByTagName("h3")[0];
//         // txtValue=a.textContent || a.innerText;
//         if(txtValue.toUpperCase().indexOf(filter) > -1){
//             inn[i].style.display = "";
//         } else {
//             inn[i].style.display ="none";
//         }
//     }
    
// }




// document.getElementById("search-item").addEventListener('submit',function(e){
//     search(document.getElementById('search-item'));
//     e.preventDeafult();

// },false);
// function search(){
//     var x= document.getElementById("search-item").value;

//     if(x=="dog"){
//         window.open("/index.html");
//     }
// }
