function toggleMode() {
    const body = document.body;
    const modeSwitch = document.getElementById("modeSwitch");
    const modeText = document.getElementById("modeText");

    if (modeSwitch.checked) {
        body.classList.add("dark-mode");
        modeText.innerText = "Dark Mode";
    } else {
        body.classList.remove("dark-mode");
        modeText.innerText = "Light Mode";
    }
}

