function bringForm() {
    //clear content field
    let mainGrid = document.getElementById('main_grid')
    mainGrid.replaceChildren()
    //
    mainGrid.style.gridTemplateColumns = 'auto';
    mainGrid.style.justifyItems = 'center';
    let form = document.createElement('form')
    form.setAttribute('id','reservation_form')

    // name field
    let nameLabel = document.createElement('label')
    nameLabel.innerText = 'Your name: '
    nameLabel.setAttribute('id','name_label')
    nameLabel.htmlFor= 'name_input';
    let nameInput = document.createElement('input')
    nameInput.placeholder = 'No last name required 👌'
    nameInput.setAttribute('id','name_input')
    form.appendChild(nameLabel)
    form.appendChild(nameInput)
    // email field
    let emailLabel = document.createElement('label');
    emailLabel.innerText = 'Your email: '
    emailLabel.setAttribute('id', 'email_label');
    emailLabel.htmlFor= 'email_input'
    let emailInput = document.createElement('input');
    emailInput.setAttribute('id','email_input');
    form.appendChild(emailLabel)
    form.appendChild(emailInput)
    // OR
    let or = document.createElement('p');
    or.innerText = 'OR'
    form.appendChild(or);
    // phone field
    let phoneLabel = document.createElement('label');
    phoneLabel.innerText = 'Your phone number: '
    phoneLabel.setAttribute('id', 'phone_label');
    phoneLabel.htmlFor= 'phone_input'
    let phoneInput = document.createElement('input');
    phoneInput.setAttribute('id','phone_input');
    phoneInput.type = 'tel';
    form.appendChild(phoneLabel)
    form.appendChild(phoneInput)
    // date field
    let dateLabel = document.createElement('label');
    dateLabel.innerText = 'Date of reservation: '
    dateLabel.setAttribute('id', 'date_label');
    dateLabel.htmlFor= 'date_input'
    let dateInput = document.createElement('input');
    dateInput.setAttribute('id','date_input');
    dateInput.type='date';
    form.appendChild(dateLabel)
    form.appendChild(dateInput)
    // comment field
    let commentField = document.createElement('textarea')
    commentField.setAttribute('id','comment_field')
    let commentFieldLabel = document.createElement('label')
    commentFieldLabel.htmlFor = 'comment_field'
    commentFieldLabel.innerText = 'Your comments'
    form.appendChild(commentFieldLabel)
    form.appendChild(commentField)

    mainGrid.appendChild(form)
}


export {bringForm};