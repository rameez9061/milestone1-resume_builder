var form = document.getElementById("resume-form");
var profilePicInput = document.getElementById('profile-pic');
var profilePicPreview = document.querySelector('.profile-picture img');
// Function to handle the image upload and display it in the preview
profilePicInput.addEventListener('change', function () {
    var _a;
    var file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0]; // Get the uploaded file
    if (file) {
        var reader = new FileReader(); // Use FileReader to read the uploaded file
        reader.onload = function (e) {
            var _a, _b;
            console.log("File read successfully:", (_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
            profilePicPreview.src = (_b = e.target) === null || _b === void 0 ? void 0 : _b.result;
        };
        reader.readAsDataURL(file); // Read the file as a Data URL (base64)
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
