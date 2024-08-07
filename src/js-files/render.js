import { tableHandler } from './tableHandler.js';
import { projectHandler } from './projectHandler.js';

export default (function () {

    const tableH = new tableHandler();
    const projectH = new projectHandler();

    // nav-panel
    projectH.renderProjects();
    projectH.assignProperties();

    projectH.newProject();
 
    // table
    tableH.renderTable();
    tableH.assignProperties();

    for (let i = 0; i < 5; i++) {
        tableH.newTableRow("title", "desc", "prio", "01-01-24", "01-01-24");
    }

}());