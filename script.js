var form = document.getElementById("resume-form");
var profilePicInput = document.getElementById('profile-pic');
var profilePicPreview = document.querySelector('.profile-picture img');
var toggleSkillsBtn = document.getElementById("toggle-skills-btn");
var skillsVisible = true;
profilePicInput.addEventListener('change', function () {
    var _a;
    var file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePicPreview.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
});
toggleSkillsBtn.addEventListener("click", function () {
    var skills = document.getElementById("skills");
    if (skillsVisible) {
        skills.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills Section";
        skills.removeAttribute('required');
    }
    else {
        skills.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills Section";
        skills.setAttribute('required', 'true');
    }
    skillsVisible = !skillsVisible;
});
form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted");
    form.reset();
    profilePicPreview.src = "";
});
