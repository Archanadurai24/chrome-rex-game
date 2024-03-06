const dino=document.getElementById("dino");
const cactus=document.getElementById("cactus");

function jump(){
    if(dino.classList!="jump"){
    dino.classList.add("jump");
    setTimeout(function(){
        dino.classList.remove("jump");
    },300);
}
}

let isAlive=setInterval(function(){
    //dino y position
    let dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    //console.log(dinoTop);

    //cactus x position
    let cactusLeft=parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    console.log(cactusLeft);

    //detect collision
    if(cactusLeft<50 && cactusLeft>0 && dinoTop>=140){
        alert("Game Over..!");
    }
},10);   //10s it checks whether dino is alive or not

document.addEventListener("keydown",function(event){
    jump();
});