function bringMenu() {
    //clear content field
    let mainGrid = document.getElementById('main_grid')
    mainGrid.replaceChildren()
    mainGrid.style.gridTemplateColumns = 'repeat(auto-fit,minmax(200px,1fr))'
    mainGrid.style.gap = '15px';
    mainGrid.style.justifyItems = 'center';
    //
    // declaring some variables
    let menuSushiTitle = 'Sushi';
    let menuLunchTitle = 'Lunch';
    let menuDessertTitle = 'Dessert';
    let menuBbqTitle = 'BBQ';
    let menuDrinksTitle = 'Drinks';
    //
    let menuBox1 = document.createElement('div')
    menuBox1.setAttribute('class','menuBox')
    menuBox1.setAttribute('id','menuBox1');
    let menuBox1Title = document.createElement('h3')
    menuBox1Title.innerText = menuSushiTitle;
    mainGrid.appendChild(menuBox1)
    menuBox1.appendChild(menuBox1Title)

    let menuBox2 = document.createElement('div')
    menuBox2.setAttribute('class','menuBox')
    menuBox2.setAttribute('id','menuBox2');
    let menuBox2Title = document.createElement('h3')
    menuBox2Title.innerText = menuLunchTitle;
    mainGrid.appendChild(menuBox2);
    menuBox2.appendChild(menuBox2Title)

    let menuBox3 = document.createElement('div')
    menuBox3.setAttribute('class','menuBox')
    menuBox3.setAttribute('id','menuBox3');
    let menuBox3Title = document.createElement('h3')
    menuBox3Title.innerText = menuDessertTitle;
    mainGrid.appendChild(menuBox3)
    menuBox3.appendChild(menuBox3Title)

    let menuBox4 = document.createElement('div')
    menuBox4.setAttribute('class','menuBox')
    menuBox4.setAttribute('id','menuBox4');
    let menuBox4Title = document.createElement('h3')
    menuBox4Title.innerText = menuBbqTitle;
    mainGrid.appendChild(menuBox4)
    menuBox4.appendChild(menuBox4Title)

    let menuBox5 = document.createElement('div')
    menuBox5.setAttribute('class','menuBox')
    menuBox5.setAttribute('id','menuBox5');
    let menuBox5Title = document.createElement('h3')
    menuBox5Title.innerText = menuDrinksTitle;
    mainGrid.appendChild(menuBox5)
    menuBox5.appendChild(menuBox5Title)

}

export {bringMenu}