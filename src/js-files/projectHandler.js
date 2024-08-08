import { project } from './objects.js';

function projectHandler() {
 
    this.defaultTextArr = ["Search", "Inbox", "Today", "Projects"];
    this.projects = [];
    this.navUl;
    this.projectListDiv;
    this.contentDiv;

    /* Methods */
    this.newProject = (modalHandler) => {

        modalHandler.renderForm();
        modalHandler.displayModal();
    };

    this.assignProperties = () => {
        this.contentDiv = document.querySelector(".content");
    };

    this.renderProjectSection = function(modalHandler) {
        const navPanel = document.createElement("div");
        const titleDiv = document.createElement("div");
        const projectListDiv = document.createElement("div");
        const navList = document.createElement("ul");
        const addBtn = document.createElement("button");

        navPanel.id = "nav-panel";
        titleDiv.id = "title-div";
        projectListDiv.id = "project-list";
        navList.classList = "project-ul";
        addBtn.id = "add-project";
    
        titleDiv.textContent = "To do list";
        addBtn.textContent = "Add Project";

        this.navUl = navList;
        this.projectListDiv = projectListDiv;
        this.contentDiv = document.querySelector(".content");

        this.contentDiv.appendChild(navPanel);
        navPanel.append(titleDiv, projectListDiv);
        projectListDiv.append(addBtn, navList);

        addBtn.addEventListener("click", () => {
            this.newProject(modalHandler)
        });

        for (let entry of this.defaultTextArr) {
            this.renderProject(entry);
        }
    };

    this.renderProject = (title) => {
        let li = document.createElement("li");
        let idiv = document.createElement("div");
        let tdiv = document.createElement("div");

        idiv.classList = "icon-div";
        tdiv.classList = "name-div";

        idiv.textContent = "#";
        tdiv.textContent = title;

        this.navUl.appendChild(li);
        li.append(idiv, tdiv);
    }
};

export { projectHandler }