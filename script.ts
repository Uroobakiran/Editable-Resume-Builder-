function initializeResumeForm(){
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const objective = (document.getElementById("profile-summary") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education-institution") as HTMLInputElement).value;
    const educationDegree = (document.getElementById("degree") as HTMLInputElement).value;
    const educationYears = (document.getElementById("years") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;
    const jobDescription = (document.getElementById("job-description") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const certifications = (document.getElementById("certifications") as HTMLInputElement).value;
    const language = (document.getElementById("languages") as HTMLInputElement).value;

    // Process the profile image
const profileImageInput = document.getElementById("profile-image") as HTMLInputElement;
const file = profileImageInput?.files?.[0];

if (file) {
    // Read and display the image
    const reader = new FileReader();
    reader.onload = function (e) {
        const profileImageUrl = e.target?.result as string;
        renderResume(profileImageUrl);
    };
    reader.readAsDataURL(file);
} else {
    renderResume(""); }

 function renderResume(profileImageUrl: string){
    const resumeHTML = `<h2><b>Editable Resume</b></h2>
                        <h3>Profile Image</h3>
                        <p contentededitable="true"><img src="${profileImageUrl}" alt="Profile Image" width="100"/></p>

                        <h3>Objective</h3>
                        <p contentededitable="true">${objective}</p>

                        <h3>Personal Information</h3>
                        <p><b>Name:</b> <span contentededitable="true">${name}</span></p>
                        <p><b>Email:</b> <span contentededitable="true">${email}</span></p>
                        <p><b>Phone:</b> <span contentededitable="true">${phone}</span></p>

                        <h3>Education</h3>
                        <p><b>Education Institution:</b><span contentededitable="true"> ${education}</span></p>
                        <p><b>Degree:</b><span contentededitable="true"> ${educationDegree}</span></p>
                        <p><b>Years:</b> <span contentededitable="true">${educationYears}</span></p>

                        <h3>Experience</h3>
                        <p><b>Job Title:</b> <span contentededitable="true">${jobTitle}</span></p>
                        <p><b>Company:</b> <span contentededitable="true">${company}</span></p>
                        <p><b>Job Description:</b> <span contentededitable="true">${jobDescription}</span></p>

                         <h3>Skills</h3>
                         <p span contentededitable="true">${skills}</p>

                        <h3>Certifications</h3>
                        <p contentededitable="true">${certifications}</p>

                        <h3>Language</h3>
                        <p contentededitable="true">${language}</p>`;
    
    resumeDisplayElement.innerHTML = resumeHTML;
}
});
}
initializeResumeForm()