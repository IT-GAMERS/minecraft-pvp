// ================================
// IT GAMERS Minecraft PvP Website
// ================================

// Replace this with your Apps Script Web App URL
const WEB_APP_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

const form = document.getElementById("registrationForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const button = form.querySelector("button");
    button.disabled = true;
    button.textContent = "Registering...";

    const data = {
        name: document.getElementById("name").value,
        gamertag: document.getElementById("gamertag").value,
        platform: document.getElementById("platform").value,
        age: document.getElementById("age").value,
        region: document.getElementById("region").value,
        discord: document.getElementById("discord").value
    };

    try {
        const response = await fetch(WEB_APP_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("✅ Registration Successful!");
            form.reset();
        } else {
            alert("❌ Registration Failed!");
        }
    } catch (error) {
        console.error(error);
        alert("❌ Network Error!");
    }

    button.disabled = false;
    button.textContent = "Register";
});
