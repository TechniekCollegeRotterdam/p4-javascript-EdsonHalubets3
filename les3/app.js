//Oefening angry-birds
const bird = document.querySelector(".bird");
let count = 0;

bird.addEventListener("click", function(){
    count= count + 50;
    bird.style.left= count + "px" ;
});
window.addEventListener("keydown",function(e){
    console.log(e);
    if(e.key=="ArrowDown"){
        count= count + 50;
        bird.style.left= count + "px" ;
        bird.src = "img/b-down.svg"
    }
    if(e.key=="ArrowRight"){
        count+= 50;
        bird.style.left= count + "px" ;
        bird.src = "img/b-right.svg"
    }
    if(e.key=="ArrowLeft"){
        count-=  50;
        bird.style.left= count + "px" ;
        bird.src = "img/b-left.svg"
    }
    if(e.key=="ArrowUp"){
        count+=  50;
        bird.style.left= count + "px" ;
        bird.src = "img/b-up.svg"
    }});