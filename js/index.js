//////////////////////////////////////////////////
//Navbar mobile size
//////////////////////////////////////////////////
const toggleButton = document.getElementById("toggle-button");
const navigationList = document.getElementById("navigation-list");

toggleButton.addEventListener("click", () => {
  navigationList.classList.toggle("active");
});
//////////////////////////////////////////////////
// Copyright
//////////////////////////////////////////////////
var today = new Date();

var thisYear = today.getFullYear();

var footer = document.querySelector("footer");
var copyright = document.createElement("p");

copyright.innerHTML = `&copy;Xeniya Dobrogorskaya  ${thisYear}`;

footer.appendChild(copyright);
//////////////////////////////////////////////////
//Skills
//////////////////////////////////////////////////
let skill0 = `React <i class="fab fa-react"></i>`;
let skill1 = `JavaScript <i class="fab fa-js-square"></i>`;
let skill2 = `HTML <i class="fab fa-html5"></i>`;
let skill3 = `CSS <i class="fab fa-css3-alt"></i>`;

const skills1 = [skill0, skill1, skill2, skill3];

var skills = new Array();
skills.push(skill0);
skills.push(skill1);
skills.push(skill2);
skills.push(skill3);

const skillsSection = document.querySelector("#skills-container");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.setAttribute("class", "skills-li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

//////////////////////////////////////////////////
//Fetch API
//////////////////////////////////////////////////
fetch("https://api.github.com/users/XeniyaDob/repos") //fetch the data
  .then((response) => {
    //fire a function when there is a success

    console.log("resolved", response);
    return response.json(); //returns a promise
  })
  .then((repositories) => {
    //fire function  when there is the access to the data
    //Display Repositories in the browser
    let projectSection = document.getElementById("projects-container");
    let projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      if (repositories[i].stargazers_count != 0) {
        let project = document.createElement("li");
        let linkProject = document.createElement("a");
        linkProject.className = "project-link";
        linkProject.href = repositories[i].html_url;
        linkProject.target = "_blank";
        linkProject.innerText = repositories[i].description;
        project.className = "projects-li";
        projectList.appendChild(project);
        project.appendChild(linkProject);
      }
    }
  })
  .catch((err) => {
    //fire a function when there is an error
    console.log("rejected", err.message);
  });
