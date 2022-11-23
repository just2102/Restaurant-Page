function bringAbout() {
    //clear content field
    let mainGrid = document.getElementById('main_grid')
    mainGrid.replaceChildren()
    mainGrid.style.gridTemplateColumns = 'auto';
    mainGrid.style.justifyItems = 'center';
    //
    let aboutHeader = document.createElement('h2')
    aboutHeader.innerText = 'WE'

    let aboutText = document.createElement('p');
    aboutText.innerText = 'Serve high-quality Japanese cuisine all over the world'

    mainGrid.appendChild(aboutHeader)
    mainGrid.appendChild(aboutText)
}

export {bringAbout}