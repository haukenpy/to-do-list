import { tableHandler } from './tableHandler.js';
import { projectHandler } from './projectHandler.js';
import { modalHandler } from './modalHandler.js';


export default (function () {

    // modal
    modalHandler.renderModal();

    // nav-panel
    projectHandler.renderProjectSection();
 
    // table
    tableHandler.renderTable();
    

    for (let i = 0; i < 5; i++) {
        tableHandler.newTableRow("title", "desc", "prio", "01-01-24", "01-01-24");
    }

}());