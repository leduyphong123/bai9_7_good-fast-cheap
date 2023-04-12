let toggle=document.getElementById("toggle");
let toggle2=document.getElementById("toggle2");
let toggle3=document.getElementById("toggle3");
toggle3.addEventListener("click",checkToggle3);
toggle2.addEventListener("click",checkToggle2);
toggle.addEventListener("click",checkToggle);
function checkToggle3(){
    if(toggle.checked==true && toggle2.checked==true ){
        toggle2.checked=false
    }
}
function checkToggle2(){
    if(toggle3.checked==true && toggle2.checked==true ){
        toggle.checked=false
    }
}
function checkToggle(){
    if(toggle3.checked==true && toggle2.checked==true ){
        toggle3.checked=false
    }
}