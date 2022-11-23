import Seattle from './seattle.jpg'
import Salmon from './salmon.jpg'
function pageLoad() {
    let content = document.getElementById('content');
    // MAIN PAGE
    let grid = document.createElement('div')
    grid.setAttribute('id','main_grid')
    content.appendChild(grid);

    let gridText1 = document.createElement('h3')
    gridText1.innerText =   
    'Celebrating 5 years since first opening in Seattle'
    grid.appendChild(gridText1);
    let seattleImg = new Image();
    seattleImg.src = Seattle;
    seattleImg.setAttribute('id','seattle_image')
    grid.appendChild(seattleImg);

    let gridText2 = document.createElement('h3')
    gridText2.innerText =
    'Japanese cuisine topped with love from our brand chef Kenshin'
    grid.appendChild(gridText2)

    let salmonImg = new Image();
    salmonImg.src = Salmon;
    grid.appendChild(salmonImg);

    let hero = document.getElementById('hero')
    let reservationButton = document.createElement('button');
    reservationButton.setAttribute('id','reservation_button')
    reservationButton.innerText =   'Make a reservation'
    hero.appendChild(reservationButton)
}




export {pageLoad}