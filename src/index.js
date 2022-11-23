import './style.css';
import { pageLoad } from "./pageLoad";
import { bringForm } from './bringForm';
import { bringMenu } from './bringMenu';

pageLoad()


let reservationButton = document.getElementById('reservation_button');
reservationButton.addEventListener('click',bringForm)

let menuButton = document.getElementById('menu_button');
menuButton.addEventListener('click',bringMenu)