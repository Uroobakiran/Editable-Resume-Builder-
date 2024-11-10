function initializeResumeForm() {
    var form = document.getElementById('resume-form');
    var resumeDisplayElement = document.getElementById('resume-display');
    form.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        var objective = document.getElementById("profile-summary").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education-institution").value;
        var educationDegree = document.getElementById("degree").value;
        var educationYears = document.getElementById("years").value;
        var jobTitle = document.getElementById("job-title").value;
        var company = document.getElementById("company").value;
        var jobDescription = document.getElementById("job-description").value;
        var skills = document.getElementById("skills").value;
        var certifications = document.getElementById("certifications").value;
        var language = document.getElementById("languages").value;
        // Process the profile image
        var profileImageInput = document.getElementById("profile-image");
        var file = (_a = profileImageInput === null || profileImageInput === void 0 ? void 0 : profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            // Read and display the image
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                var profileImageUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                renderResume(profileImageUrl);
            };
            reader.readAsDataURL(file);
        }
        else {
            renderResume("");
        }
        function renderResume(profileImageUrl) {
            var resumeHTML = "<h2><b>Editable Resume</b></h2>\n                        <h3>Profile Image</h3>\n                        <p contentededitable=\"true\"><img src=\"".concat(profileImageUrl, "\" alt=\"Profile Image\" width=\"100\"/></p>\n\n                        <h3>Objective</h3>\n                        <p contentededitable=\"true\">").concat(objective, "</p>\n\n                        <h3>Personal Information</h3>\n                        <p><b>Name:</b> <span contentededitable=\"true\">").concat(name, "</span></p>\n                        <p><b>Email:</b> <span contentededitable=\"true\">").concat(email, "</span></p>\n                        <p><b>Phone:</b> <span contentededitable=\"true\">").concat(phone, "</span></p>\n\n                        <h3>Education</h3>\n                        <p><b>Education Institution:</b><span contentededitable=\"true\"> ").concat(education, "</span></p>\n                        <p><b>Degree:</b><span contentededitable=\"true\"> ").concat(educationDegree, "</span></p>\n                        <p><b>Years:</b> <span contentededitable=\"true\">").concat(educationYears, "</span></p>\n\n                        <h3>Experience</h3>\n                        <p><b>Job Title:</b> <span contentededitable=\"true\">").concat(jobTitle, "</span></p>\n                        <p><b>Company:</b> <span contentededitable=\"true\">").concat(company, "</span></p>\n                        <p><b>Job Description:</b> <span contentededitable=\"true\">").concat(jobDescription, "</span></p>\n\n                         <h3>Skills</h3>\n                         <p span contentededitable=\"true\">").concat(skills, "</p>\n\n                        <h3>Certifications</h3>\n                        <p contentededitable=\"true\">").concat(certifications, "</p>\n\n                        <h3>Language</h3>\n                        <p contentededitable=\"true\">").concat(language, "</p>");
            resumeDisplayElement.innerHTML = resumeHTML;
        }
    });
}
initializeResumeForm();
