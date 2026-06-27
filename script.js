const home = document.getElementById("home");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const finalPageDiv = document.getElementById("final");
const forever = document.getElementById("forever");
function hideAll(){

    home.classList.remove("active");

    letter.classList.remove("active");

    gallery.classList.remove("active");

    finalPageDiv.classList.remove("active");

    if (forever) {

        forever.classList.remove("active");

    }

}
function openSurprise(){

    hideAll();

    letter.classList.add("active");

    for(let i=0; i<50; i++){

        const confetti = document.createElement("div");

        confetti.innerHTML = "🎉";

        confetti.style.position = "fixed";

        confetti.style.left = Math.random()*100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.fontSize = "24px";

        confetti.style.animation = "fall 3s linear";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },3000);

    }

}
function showGallery(){
    hideAll();
    gallery.classList.add("active");
}
function finalPage(){
    hideAll();
    finalPageDiv.classList.add("active");
}

function showForever(){

    hideAll();

    if (forever) {

        forever.classList.add("active");

    }

}

hideAll();
home.classList.add("active");
function openImage(src){
    document.getElementById("imageViewer").style.display="flex";
    document.getElementById("fullImage").src=src;
}

function closeImage(){
    document.getElementById("imageViewer").style.display="none";
}

setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (20 + Math.random()*20) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

},500);

document.addEventListener("mousemove", function(e){

    let heart = document.createElement("div");

    heart.className = "trail-heart";

    heart.innerHTML = "❤️";

    heart.style.left = e.clientX + "px";

    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },1000);

});
document.addEventListener("touchmove", function(e){

    let touch = e.touches[0];

    let heart = document.createElement("div");

    heart.className = "trail-heart";

    heart.innerHTML = "❤️";

    heart.style.left = touch.clientX + "px";

    heart.style.top = touch.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },1000);

});

const startDate = new Date("2026-02-14"); // Change this

function updateLoveCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff/(1000*60*60*24));

    const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((diff%(1000*60*60))/(1000*60));

    document.getElementById("loveCounter").innerHTML =

        days + " Days ❤️<br>" +

        hours + " Hours ❤️<br>" +

        minutes + " Minutes";

}

updateLoveCounter();

setInterval(updateLoveCounter,60000);
