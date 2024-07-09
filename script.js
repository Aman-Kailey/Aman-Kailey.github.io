document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Animal Project",
            description: "This project showcases various animals using HTML.",
            link: "animal_project.html"
        }
        // Add more projects here if needed
    ];

    const projectList = document.getElementById("project-list");
    
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        
        const projectTitle = document.createElement("h3");
        projectTitle.textContent = project.title;
        projectDiv.appendChild(projectTitle);
        
        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;
        projectDiv.appendChild(projectDescription);
        
        const projectLink = document.createElement("a");
        projectLink.href = project.link;
        projectLink.textContent = "View Project";
        projectLink.target = "_blank";
        projectDiv.appendChild(projectLink);
        
        projectList.appendChild(projectDiv);
    });
});
