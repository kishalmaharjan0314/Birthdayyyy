function showMessage(){

document.getElementById("message").style.display="block";

createHearts();

}


function createHearts(){

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=Math.random()*25+"px";

heart.style.animation="float 5s linear";

document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},5000);

}

}