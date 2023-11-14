function edit(component) {
    let components = getFields(component);
    let field = components[0];
    let confirm = components[1];
    let cancel = components[2];
    let span = components[3];

    // Change styles
    field.disabled = false;
    field.classList.remove('account-input');
    field.classList.add('editing');

    // Add confirm and delete buttons
    span.style.display = 'none';
    confirm.style.display = 'block';
    cancel.style.display = 'block';
}

function confirm(component) {
    let components = getFields(component);
    let field = components[0];
    let confirm = components[1];
    let cancel = components[2];
    let span = components[3];

    // Change styles
    field.disabled = true;
    field.classList.add('account-input');
    field.classList.remove('editing');

    // Add confirm and delete buttons
    span.style.display = 'block';
    confirm.style.display = 'none';
    cancel.style.display = 'none';

    // Update previous value
    field.dataset.prev = field.value;
}

function cancel(component) {
    let components = getFields(component);
    let field = components[0];
    let confirm = components[1];
    let cancel = components[2];
    let span = components[3];

    // Change styles
    field.disabled = true;
    field.classList.add('account-input');
    field.classList.remove('editing');

    // Add confirm and delete buttons
    span.style.display = 'block';
    confirm.style.display = 'none';
    cancel.style.display = 'none';

    // Change value to the previous one
    field.value = field.dataset.prev;

}

function getFields(component) {
    let field = document.querySelector(`#account-input-${component}`);
    let confirm = document.querySelector(`#account-input-${component}-confirm`);
    let cancel = document.querySelector(`#account-input-${component}-cancel`);
    let span = document.querySelector(`#account-input-${component}-span`);

    let components = [];
    components.push(field);
    components.push(confirm);
    components.push(cancel);
    components.push(span);

    return components;
}