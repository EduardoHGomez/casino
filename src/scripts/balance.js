const xhr = new XMLHttpRequest();


function addBalance() {
    let amount = document.querySelector('#balance-form-deposit').value;
    amount = parseFloat(amount);

    xhr.open('PUT', `/profile/balance`, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText); 
        } else { 
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            }
        }
    };
    xhr.send();
}