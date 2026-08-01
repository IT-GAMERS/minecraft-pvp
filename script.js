const form = document.getElementById("registrationForm");
const button = form.querySelector("button");

let submitted = false;

form.addEventListener("submit", function (e) {

    if (submitted) {
        e.preventDefault();
        return;
    }

    submitted = true;

    button.disabled = true;
    button.innerHTML = "⏳ Registering...";

    setTimeout(function () {

        alert("🎉 Registration Successful!\n\nThank you for registering for the IT GAMERS Minecraft PvP Tournament!");

        form.reset();

        button.disabled = false;
        button.innerHTML = "Register Now";

        submitted = false;

    }, 1500);

});
