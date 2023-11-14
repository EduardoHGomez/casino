function edit(component) {
    let field = document.querySelector(`#account-input-${component}`);
    
    field.style.dispay = 'none';
    console.log(field);

    field.classList.add('editing');

}