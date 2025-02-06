
function yesButtonClick() {
    window.location.href = "YIPPIE.html";
}

function noButtonClick() {
    console.log("Submit")

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
         var i = Math.floor(Math.random()*300)+1;
         var j = Math.floor(Math.random()*300)+1;
         console.warn(i);
         noButton.style.left = i+"px";
         noButton.style.top = j+"px";

         document.getElementById("whyText").style.display = "block";
}
//async function submitEmailButton() {
//console.log("Submit")
//  try {
//        // Send the email using the backend API
//        const response = await fetch('http://localhost:8080/send-email', {
//          method: 'POST',
//          headers: {
//            'Content-Type': 'application/json',
//          },
//          body: 'epic',
//        });
//
//        const result = await response.json();
//
//        // Show the response message
//        if (response.status === 200) {
//          document.getElementById('response-message').textContent = 'Email sent successfully!';
//        } else {
//          document.getElementById('response-message').textContent = `Error: ${result.error}`;
//        }
//      } catch (error) {
//        document.getElementById('response-message').textContent = `Error: ${error.message}`;
//      };

//}


  document.getElementById('valentineOptionForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    console.log("Submit button clicked");
        const email = document.getElementById('email').value;
        const kisses = document.getElementById('kisses').value;
        const hugs = document.getElementById('hugs').value;
        const cuddles = document.getElementById('cuddles').value;
        const extra = document.getElementById('extra').value;
        console.log('extra')
        const data = { email, kisses, hugs, cuddles, extra };


        try {
          const response = await fetch('http://localhost:8080/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });

          const result = await response.json();

          if (response.status === 200) {
            document.getElementById('response-message').textContent = 'Email sent successfully!';
          } else {
            document.getElementById('response-message').textContent = `Error: ${result.error}`;
          }
        } catch (error) {
          document.getElementById('response-message').textContent = `Error: ${error.message}`;
        }

      });
