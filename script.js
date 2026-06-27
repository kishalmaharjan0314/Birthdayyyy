const home = document.getElementById("home");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const finalPageDiv = document.getElementById("final");
function hideAll(){
    home.classList.remove("active");
    letter.classList.remove("active");
    gallery.classList.remove("active");
    finalPageDiv.classList.remove("active");
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