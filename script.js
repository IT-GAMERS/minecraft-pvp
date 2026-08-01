const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxP4SHfm8eytkwIp2BPohptAOx72nS2hMiNYgH29HnGE1b16gxHlRp3IfMHiLKhan6b/exec";

const form = document.getElementById("registrationForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const button = form.querySelector("button");
    button.disabled = true;
    button.innerText = "Registering...";

    const formData = new URLSearchParams();

    formData.append("name", document.getElementById("name").value);
    formData.append("gamertag", document.getElementById("gamertag").value);
    formData.append("platform", document.getElementById("platform").value);
    formData.append("age", document.getElementById("age").value);
    formData.append("region", document.getElementById("region").value);
    formData.append("discord", document.getElementById("discord").value);

    try {

        const response = await fetch(WEB_APP_URL, {
            method: "POST",
            body: formData
        });

        const text = await response.text();

        if (text === "SUCCESS") {
            alert("✅ Registration Successful!");
            form.reset();
        } else {
            alert("❌ " + text);
        }

    } catch (err) {

        console.error(err);
        alert("❌ Network Error");

    }

    button.disabled = false;
    button.innerText = "Register";

});
