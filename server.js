function login() {
    let firstname = document.getElementById("firstname").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");

    if (firstname === "raymond" && password === "raymond") {
        message.style.color = "green";
        message.textContent = "Redirecting....";

        // Fade in
        message.style.opacity = 1;

        // Optional: fade out after 2 seconds
        setTimeout(() => {
            message.style.opacity = 0;
            // Redirect after fade out completes
            setTimeout(() => {
                window.location.href = "home.html";
            }, 500); // matches transition duration
        }, 2000);
    } else {
        message.style.color = "red";
        message.textContent = "Invalid First Name or Password";

        // Fade in
        message.style.opacity = 1;

        // Fade out after 3 seconds
        setTimeout(() => {
            message.style.opacity = 0;
        }, 3000);
    }
}

function contact() {
    
    const info = document.getElementById("contactInfo");

    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

