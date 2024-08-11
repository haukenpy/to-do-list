function project(title) {
    this.title = title;
    this.icon = "#";
    this.todo = [];
}

function toDo(projectTitle, title, description, priority, createdDate, dueDate) {
    this.project = projectTitle;
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

export {project, toDo};