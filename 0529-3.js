






const $popup = document.querySelector("#popup");
$popup.children[1].addEventListener("click",dat);

const $footer = document.querySelector("footer");
$footer.addEventListener("click",bo);

function dat(){
$popup.style.display ='none';
} 
function bo() {
    $popup.style.display='block';
}



const $subMenu24 = document.querySelector("#blue");
$subMenu24.addEventListener("click",blue);

function blue(){
    $subMenu24.style.background = "blue";

}


const $sm41 = document.querySelector("#sm41");

function tr() {
    $sm41.style.color = "red";
    $sm41.style.textDecoration="none";
}

$popup.addEventListener("click", tomato);
function tomato() {
    $popup.style.background='tomato';

}