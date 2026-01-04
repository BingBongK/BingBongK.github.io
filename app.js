function yesButtonClick() {
    window.location.href = "YIPPIE.html";
}

function noButtonClick() {

    let img = document.getElementById("catImage"); // Ensure the ID is a string
    let imgs = ["sadCat1.jpg","sadCat2.jpg","sadCat3.jpg","sadCat4.jpg"]; // Corrected 'let' keyword
    let random = Math.floor(Math.random() * imgs.length);

    let prevRandom = null;
        while (prevRandom === random) {
            random = Math.floor(Math.random() * imgs.length);
        }
    if (img) { // Check if the element exists
        img.src = imgs[random]; // Assign the image source
        prevRandom = random;
    } else {
        console.error("Element with ID 'catImage' not found.");
    }
    let noButton = document.getElementById("noButton");
    let noButtonScale = parseFloat(noButton.style.transform.replace("scale(", "").replace(")", "")) || 1;
    let newScale = noButtonScale * 0.9;
                console.warn(newScale);

     if (newScale >= 0.5) { // Prevent shrinking too much
            noButton.style.transform ='scale(' + newScale + ')';

        } else {
            console.warn("Button is too small!");
        }
         var i = Math.floor(Math.random()*500)+1;
         var j = Math.floor(Math.random()*200)+1;
         console.warn(i);
         noButton.style.left = i+"px";
         noButton.style.top = j+"px";

}
