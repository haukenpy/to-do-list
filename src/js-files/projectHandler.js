import { project } from "./objects";

function projectHandler() {
 
    this.defaultTextArr = ["Search", "Inbox", "Today"];
    this.defaultIconArr = ["#", "#", "#"];
    this.projectsArr = [];

    /* Methods */
    this.assignProperties = () => {
        this.projectListDiv = document.querySelector("#project-list");
        this.contentDiv = document.querySelector(".content");
    };

    this.newProject = (icon, title) => {

            let prj = new project(title);

            let ul = document.createElement("ul")
            let li = document.createElement("li");
            let idiv = document.createElement("div");
            let tdiv = document.createElement("div");
    
            idiv.classList = "icon-div";
            tdiv.classList = "name-div";
    
            idiv.textContent = "#";
            tdiv.textContent = "text";
            
            this.projectListDiv.appendChild(ul);
            ul.appendChild(li);
            li.append(idiv, tdiv);

            this.projectsArr.push(prj);
    }

    this.newProjectForm = (icon, title) => {
        console.log("new project");
    }

    this.renderProjects = function () {
        const navPanel = document.createElement("div");
        const titleDiv = document.createElement("div");
        const projectListDiv = document.createElement("div");
        const navUl = document.createElement("ul");
        const addBtn = document.createElement("button");

        navPanel.id = "nav-panel";
        titleDiv.id = "title-div";
        projectListDiv.id = "project-list";
        navUl.classList = "project-ul";
        addBtn.id = "add-project";

        this.assignProperties();
    
        titleDiv.textContent = "To do list";
        addBtn.textContent = "Add Project";
  
        this.contentDiv.appendChild(navPanel);
        navPanel.append(titleDiv, projectListDiv);
        projectListDiv.append(addBtn, navUl);

        addBtn.addEventListener("click", this.newProject);

        for (let i = 0; i < 3; i++) {
            let li = document.createElement("li");
            let idiv = document.createElement("div");
            let tdiv = document.createElement("div");
    
            idiv.classList = "icon-div";
            tdiv.classList = "name-div";
    
            idiv.textContent = this.defaultIconArr[i];
            tdiv.textContent = this.defaultTextArr[i];
    
            navUl.appendChild(li);
            li.append(idiv, tdiv);
        }

    }
};

export { projectHandler }