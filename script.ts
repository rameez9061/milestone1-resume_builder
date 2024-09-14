const form = document.getElementById("resume-form") as HTMLFormElement;
const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
const profilePicPreview = document.querySelector('.profile-picture img') as HTMLImageElement;

// Function to handle the image upload and display it in the preview
profilePicInput.addEventListener('change', function() {
    const file = profilePicInput.files?.[0];  // Get the uploaded file

    if (file) {
        const reader = new FileReader();  // Use FileReader to read the uploaded file
        
        reader.onload = function(e) {
            console.log("File read successfully:", e.target?.result);
            profilePicPreview.src = e.target?.result as string;
        };

        reader.readAsDataURL(file);  // Read the file as a Data URL (base64)
    }
});

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");

    // Clear the form fields and reset the profile picture
    form.reset();
    profilePicPreview.src = "";
});
