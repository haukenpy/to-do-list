import './css-files/landingpage.css';
import { projectHandler } from './js-files/projectHandler.js';
import './js-files/render.js';
import { tableHandler } from './js-files/tableHandler.js';


const tableH = new tableHandler();
const projectH = new projectHandler();
projectH.assignProperties();
tableH.assignProperties();

projectH.newProject();