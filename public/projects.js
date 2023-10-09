
function toggleHidden() {
    let explanation = this.lastElementChild;
    if (explanation.style.display === "") {
        explanation.style.display = "inline-block";
        explanation.parentNode.style.backgroundColor = "hsl(230, 50%, 80%)";
        explanation.parentNode.style.color = "hsl(230, 50%, 20%)";
    } else if (explanation.style.display === "inline-block") {
        explanation.style.display = "";
        explanation.parentNode.style.backgroundColor = "";
        explanation.parentNode.style.color = "";
    }
}

let firstSynopsis = document.getElementById("project1");
let secondSynopsis = document.getElementById("project2");
let thirdSynopsis = document.getElementById("project3");
let fourthSynopsis = document.getElementById("project4");

firstSynopsis.addEventListener("click", toggleHidden);
secondSynopsis.addEventListener("click", toggleHidden);
thirdSynopsis.addEventListener("click", toggleHidden);
fourthSynopsis.addEventListener("click", toggleHidden);