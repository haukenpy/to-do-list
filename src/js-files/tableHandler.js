import { pubsub } from "./pubsub";

export const tableHandler = {

        tableHeaders: ["Title", "Description", "Priority", "Created Date", "Due Date", "Completed"],
        toDoArr: [],
        contentDiv: document.querySelector(".content"),
        table: "",
    
    /* Methods */
    setTable: function(value) {
        this.table = value;
    },

    renderTable: function() {

        pubsub.subscribe("newToDo", this.newToDo);
        pubsub.subscribe("clearTable", this.clearTable);
        pubsub.subscribe("appendRow", this.appendRows);

        const toDoTable = document.createElement("div");
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        toDoTable.id = "project-container";
        table.id = "to-do-table";

        this.table = table;
        this.tbody = tbody;

        let thRow = thead.insertRow(-1);

        for (let i = 0; i < 6; i++) {
            let th = document.createElement("th");
            thRow.appendChild(th);
            th.textContent = this.tableHeaders[i];
        };

        toDoTable.appendChild(table);
        table.append(thead, tbody);
        this.contentDiv.appendChild(toDoTable);
    },

    newTableRow: function(title, description, priority, createdDate, dueDate) {
        const row = tableHandler.tbody.insertRow(-1);
        row.insertCell().textContent = title;
        row.insertCell().textContent = description;
        row.insertCell().textContent = priority;
        row.insertCell().textContent = createdDate;
        row.insertCell().textContent = dueDate;
        row.insertCell().textContent = "[]";
    },

    newToDo: function(toDo) {
        tableHandler.newTableRow(toDo.title, toDo.description, toDo.priority, toDo.dueDate, toDo.createdDate);
    },

    clearTable: () => {
        let newTableBody = document.createElement("tbody");
        tableHandler.tbody.parentNode.replaceChild(newTableBody, tableHandler.tbody);
        tableHandler.tbody = newTableBody;
    },

    appendRows: function(prj) {
        for (let row of prj) {
            tableHandler.newTableRow(row.title, row.description, row.priority, row.createdDate, row.dueDate);
        }
    },

};