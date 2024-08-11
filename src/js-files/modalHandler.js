import './../css-files/modal.css';
import { project, toDo } from './objects.js';
import { projectHandler } from './projectHandler.js';
import { pubsub } from './pubsub.js';
import { tableHandler } from './tableHandler.js';

export const modalHandler = {

    mDiv: "",
    title: "",
    description: "",
    dueDate: "",

    /* Methods */
    renderModal: function() {

        pubsub.subscribe("addProjectBtn", this.renderForm);
        pubsub.subscribe("addToDo", this.renderToDoForm);

        // DOM creation
        const contentDiv = document.querySelector(".content");
        const modalDiv = document.createElement("div");
        const modalContent = document.createElement("div");
        const modalHeader = document.createElement("div");
        const modalBody = document.createElement("div");
        const span = document.createElement("span");
        const modalHeaderH2 = document.createElement("h2");

        // ID and class assignment
        modalDiv.id = "modal";
        modalHeader.id = "modal-header";
        modalContent.id = "modal-content";
        span.id = "modal-span";

        // Content assignment
        span.textContent = "close";
        modalHeaderH2.textContent = "New project";

        // Bind events
        span.addEventListener("click", () => {
            this.hideModal();
            this.clearForm();
        });

        // Append elements
        modalDiv.appendChild(modalContent);
        modalContent.append(modalHeader, modalBody);
        modalHeader.append(modalHeaderH2, span);
        contentDiv.appendChild(modalDiv);

        this.mBody = modalBody;
        this.mHeader = modalHeader;
        this.mDiv = modalDiv;

    },

    renderForm: function() {

        const form = document.createElement("form");
        const titleInput = document.createElement("input");
        const descriptionInput = document.createElement("input");
        const dueDateInput = document.createElement("input");
        const submitBtn = document.createElement("button");
    
        submitBtn.id = "submit-button";
    
        form.setAttribute("method", "post");
        form.setAttribute("action", "submit");
    
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("name", "title");
        titleInput.setAttribute("placeholder", "Enter title");
    
        descriptionInput.setAttribute("type", "text");
        descriptionInput.setAttribute("name", "description");
    
        dueDateInput.setAttribute("type", "text");
        dueDateInput.setAttribute("name", "dueDate");
    
        submitBtn.setAttribute("type", "button");
        submitBtn.setAttribute("name", "submit");
    
        submitBtn.textContent = "Submit";
        submitBtn.addEventListener("click", () => {
             modalHandler.submitForm();
            });
    
        form.append(titleInput, descriptionInput, dueDateInput, submitBtn)
    
        modalHandler.mBody.appendChild(form);

        modalHandler.title = titleInput;
        modalHandler.description = descriptionInput;
        modalHandler.dueDate = dueDateInput;

        modalHandler.displayModal();
    },

    renderToDoForm: function () {

        const form = document.createElement("form");
        const projectTitle = document.createElement("input");
        const titleInput = document.createElement("input");
        const descriptionInput = document.createElement("input");
        const dueDateInput = document.createElement("input");
        const createdDate = document.createElement("input");
        const submitBtn = document.createElement("button");
    
        submitBtn.id = "submit-button";
    
        form.setAttribute("method", "post");
        form.setAttribute("action", "submit");
    
        projectTitle.setAttribute("type", "text");
        projectTitle.setAttribute("name", "project-title");
        projectTitle.setAttribute("placeholder", "Select project");

        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("name", "title");
        titleInput.setAttribute("placeholder", "Enter title");
    
        descriptionInput.setAttribute("type", "text");
        descriptionInput.setAttribute("name", "description");
    
        dueDateInput.setAttribute("type", "text");
        dueDateInput.setAttribute("name", "dueDate");

        createdDate.setAttribute("type", "text");
        createdDate.setAttribute("name", "created-date");
    
        submitBtn.setAttribute("type", "button");
        submitBtn.setAttribute("name", "submit");
    
        submitBtn.textContent = "Submit";
        submitBtn.addEventListener("click", () => {
             modalHandler.submitToDoForm();
            });
    
        form.append(projectTitle, titleInput, descriptionInput, dueDateInput, createdDate, submitBtn);
    
        modalHandler.mBody.appendChild(form);

        modalHandler.projectTitle = projectTitle;
        modalHandler.title = titleInput;
        modalHandler.description = descriptionInput;
        modalHandler.dueDate = dueDateInput;
        modalHandler.createdDate = createdDate;
        modalHandler.displayModal();
    },

    submitToDoForm: function() {

        let newToDo = new toDo();
        newToDo.projectTitle = modalHandler.projectTitle.value;

        for (let phproject of projectHandler.projects) {
            if (newToDo.projectTitle == phproject.title) {
                newToDo.title = modalHandler.title.value;
                newToDo.priority = "Low";
                newToDo.createdDate = "20240810";
                newToDo.description = modalHandler.description.value;
                newToDo.dueDate = modalHandler.dueDate.value;

                phproject.todo.push(newToDo);
                pubsub.publish('newToDo', newToDo);
                
                this.clearForm();
                this.hideModal();
                return;
            }
        }
        alert("Hello World");
    },

    submitForm: function() {

        let prj = new project();
        prj.title = modalHandler.title.value;
        if (prj.title) {
            prj.description = modalHandler.description.value;
            prj.dueDate = modalHandler.dueDate.value;
            pubsub.publish('newProject', prj);
        }

        this.clearForm();
        this.hideModal();
    },

    displayModal: function() {
        this.mDiv.style.display = "block";
    },

    hideModal: function() {
        this.mDiv.style.display = "none";
    },

    clearForm: function() {
        this.mBody.innerHTML = "";
    },
};