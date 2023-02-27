var navLinksObject=document.getElementById("mini-menu-bar")
var closeBtn=document.getElementById("closeMenuButton");

var openBtn=document.getElementById("openMenuButton");

var bodyobce=document.getElementById("body");


function closeMenu(){
navLinksObject.style.right="-500px"
bodyobce.style.backgroundColor="var(--lightGreen-2) ";

document.addEventListener("click",function(e){
if(!e.composedPath().includes(navLinksObject)&&!e.composedPath().includes(openBtn))
{
  navLinksObject.style.right="-500px"
bodyobce.style.backgroundColor="var(--lightGreen-2) ";
}
})
}

function openMenu(){
navLinksObject.style.right="0"
bodyobce.style.backgroundColor="rgba(0, 0, 0, 0.5)";
bodyobce.style.transition="1s all";

}

