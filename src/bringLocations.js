function bringLocations() {
    //clear content field
    let mainGrid = document.getElementById('main_grid')
    mainGrid.replaceChildren()
    mainGrid.style.justifyItems= 'start';
    //
    let citiesList = document.createElement('ul')
    let cities = ['Seattle','New York', 'Moscow', 'Vladivostok', 'Berlin', 'London']
    for (let i = 0; i<cities.length; i++) {
        let newCity = document.createElement('li');
        newCity.innerText = cities[i];
        citiesList.appendChild(newCity);
    }
    mainGrid.appendChild(citiesList)
}

export {bringLocations}