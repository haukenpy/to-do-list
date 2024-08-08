import './../css-files/modal.css';
import { project } from './objects.js';

function modalHandler() {
    this.mBody;
    this.mHeader;
    this.mDiv;
    this.title;
    this.description;
    this.dueDate;
    this.forms = [];

    /* Methods */
    this.renderModal = function() {
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
        });

        // Append elements
        modalDiv.appendChild(modalContent);
        modalContent.append(modalHeader, modalBody);
        modalHeader.append(modalHeaderH2, span);
        contentDiv.appendChild(modalDiv);

        this.mBody = modalBody;
        this.mHeader = modalHeader;
        this.mDiv = modalDiv;

    }

    this.renderForm = function() {

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
             this.submitForm();
            });
    
        form.append(titleInput, descriptionInput, dueDateInput, submitBtn)
    
        this.mBody.appendChild(form);

        this.title = titleInput;
        this.description = descriptionInput;
        this.dueDate = dueDateInput;
    }

    this.submitForm = () => {

        let prj = new project("test-project");
        prj.title = this.title.value;
        prj.description = this.description.value;
        prj.dueDate = this.dueDate.value;
        this.forms.push(prj);

        this.clearForm();
        this.hideModal();
    }

    this.displayModal = () => {
        this.mDiv.style.display = "block";
    }

    this.hideModal = () => {
        this.mDiv.style.display = "none";
    }

    this.clearForm = () => {
        this.mBody.innerHTML = "";
    }
};

export { modalHandler }