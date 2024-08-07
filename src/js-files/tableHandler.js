class tableHandler {

    constructor() {
        this.tableHeaders = ["Title", "Description", "Priority", "Created Date", "Due Date", "Completed"];
        this.toDoArr = [];
    }

    /* Methods */

    assignProperties = () => {
        this.table = document.querySelector("#to-do-table");
        this.contentDiv = document.querySelector(".content")
    }

    renderTable = function () {
        const toDoTable = document.createElement("div");
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        toDoTable.id = "project-container";
        table.id = "to-do-table";

        this.assignProperties();

        let thRow = thead.insertRow(-1);

        for (let i = 0; i < 6; i++) {
            let th = document.createElement("th");
            thRow.appendChild(th);
            th.textContent = this.tableHeaders[i];
        };

        toDoTable.appendChild(table);
        table.append(thead, tbody);
        this.contentDiv.appendChild(toDoTable);
    }

    newTableRow = (title, description, priority, createdDate, dueDate) => {
        const row = this.table.insertRow(-1);
        row.insertCell().textContent = title;
        row.insertCell().textContent = description;
        row.insertCell().textContent = priority;
        row.insertCell().textContent = createdDate;
        row.insertCell().textContent = dueDate;
        row.insertCell().textContent = "[]";
    }
};

export { tableHandler }