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
}
function showGallery(){
    hideAll();
    gallery.classList.add("active");
}
function finalPage(){
    hideAll();
    finalPageDiv.classList.add("active");
}
// Show the home page when the website loads
hideAll();
home.classList.add("active");