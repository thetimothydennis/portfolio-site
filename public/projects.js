

let firstSynopsis = document.getElementById("project1");
let secondSynopsis = document.getElementById("project2");


firstSynopsis.onclick = function() {
    let explanation = firstSynopsis.lastElementChild;
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

secondSynopsis.onclick = function() {
    let explanation = secondSynopsis.lastElementChild;
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

