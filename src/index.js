import './style.css';

import { pageLoad } from "./pageLoad";
import { bringForm } from './bringForm';
import { bringMenu } from './bringMenu';
import { bringLocations } from './bringLocations';
import { bringAbout } from './bringAbout';

pageLoad()


let reservationButton = document.getElementById('reservation_button');
reservationButton.addEventListener('click',bringForm);

let menuButton = document.getElementById('menu_button');
menuButton.addEventListener('click',bringMenu);

let locationButton = document.getElementById('location_button');
locationButton.addEventListener('click',bringLocations);

let aboutButton = document.getElementById('about_button');
aboutButton.addEventListener('click',bringAbout);