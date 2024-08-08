import { tableHandler } from './tableHandler.js';
import { projectHandler } from './projectHandler.js';
import { modalHandler } from './modalHandler.js';

export default (function () {

    const tableH = new tableHandler();
    const projectH = new projectHandler();
    const modalH = new modalHandler();

    // modal
    modalH.renderModal();

    // nav-panel
    projectH.renderProjectSection(modalH);
    projectH.assignProperties();
 
    // table
    tableH.renderTable();
    tableH.assignProperties();

    for (let i = 0; i < 5; i++) {
        tableH.newTableRow("title", "desc", "prio", "01-01-24", "01-01-24");
    }

}());