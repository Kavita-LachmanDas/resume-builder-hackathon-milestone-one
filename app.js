function toggleSkills() {
    var skillList = document.getElementById("skillList");
    var toggleButton = document.getElementById("toggleButton");
    // Toggle the visibility of the skill list
    if (skillList.style.display === "none" || skillList.style.display === "") {
        skillList.style.display = "block";
        toggleButton.innerText = "Hide Skills";
    }
    else {
        skillList.style.display = "none";
        toggleButton.innerText = "Show Skills";
    }
}
