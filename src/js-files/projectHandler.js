import { pubsub } from './pubsub.js';

export const projectHandler = {
 
    defaultTextArr: ["Search", "Inbox", "Today", "Projects"],
    projects: [],
    navUl: "",

    /* Methods */
    deleteProject: ev => {
        let item = ev.target.closest('li');
        let name = ev.target.name;

        console.log(name);
        item.parentElement.removeChild(item);
    },

    addNewProject: function(project) {
        projectHandler.projects.push(project);
        projectHandler.renderProject(project.title, true);
        console.log(projectHandler.projects.length);
    },

    renderProjectSection: () => {

        pubsub.subscribe("newProject", projectHandler.addNewProject);
        const navPanel = document.createElement("div");
        const titleDiv = document.createElement("div");
        const plDiv = document.createElement("div");
        const navUl = document.createElement("ul");
        const addBtn = document.createElement("button");
        const addToDo = document.createElement("button");

        const contentDiv = document.querySelector(".content");

        navPanel.id = "nav-panel";
        titleDiv.id = "title-div";
        plDiv.id = "project-list";
        navUl.classList = "project-ul";
        addBtn.id = "add-project";
        addToDo.id = "to-do-btn";
    
        titleDiv.textContent = "To do list";
        addBtn.textContent = "Add Project";
        addToDo.textContent = "Add To-Do";

        contentDiv.appendChild(navPanel);
        navPanel.append(titleDiv, plDiv);
        plDiv.append(addBtn, addToDo, navUl);

        addBtn.addEventListener("click", () => {
            pubsub.publish("addProjectBtn");
        });

        addToDo.addEventListener("click", () => {
            pubsub.publish("addToDo");
        });

        for (let entry of projectHandler.defaultTextArr) {
            projectHandler.renderProject(entry, false);
        }
    },

    renderProject: (title, bool) => {
        let li = document.createElement("li");
        let idiv = document.createElement("div");
        let tdiv = document.createElement("div");

        idiv.classList = "icon-div";
        tdiv.classList = "name-div";

        if (bool) {idiv.addEventListener("click", projectHandler.deleteProject);};

        idiv.textContent = "#";
        tdiv.textContent = title;

        const navUl = document.querySelector(".project-ul");
        navUl.appendChild(li);
        li.append(idiv, tdiv);
    },
};