const form = document.getElementById("resume-form") as HTMLFormElement;
const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
const profilePicPreview = document.querySelector('.profile-picture img') as HTMLImageElement;
const toggleSkillsBtn = document.getElementById("toggle-skills-btn") as HTMLButtonElement;

let skillsVisible = true;


profilePicInput.addEventListener('change', function() {
    const file = profilePicInput.files?.[0];  

    if (file) {
        const reader = new FileReader(); 
        
        reader.onload = function(e) {
            profilePicPreview.src = e.target?.result as string;
        };

        reader.readAsDataURL(file);  
    }
});


toggleSkillsBtn.addEventListener("click", () => {
    const skills = document.getElementById("skills") as HTMLTextAreaElement;

    if (skillsVisible) {
       skills.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills Section";
        skills.removeAttribute('required');
    } else {
        skills.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills Section";
        skills.setAttribute('required','true');
    }

    skillsVisible = !skillsVisible;
});


form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted");

    
    form.reset();
    profilePicPreview.src = "";
});
