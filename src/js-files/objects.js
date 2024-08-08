function project(title) {
    this.title = title;
    this.icon = "#";
    this.todo = [];
}

function toDo(title, description, priority, createdDate, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.createdDate = createdDate;
    this.dueDate = dueDate;
    this.completed = false;

    this.markCompleted = () => {
        this.completed = true;
    }
};

function domHandler() {
    this.object = [];
    this.modalHeader;
    this.modalBody;
      
};

export {project, toDo, domHandler};