const xhr = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', () => {
    loadBalance();
});

function loadBalance() {
    var id = sessionStorage.getItem('token');
    var url = `/profile/balance?id=${id}`;

    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText); 
        } else { 
            if (xhr.status === 200) {

                // Replace data from given status
                let data = JSON.parse(xhr.responseText);
                let balanceField = document.querySelector('#balanceField');
                balanceField.innerHTML = data.balance;
            }
        }
    };
    xhr.send();
}

function addBalance() {
    var id = sessionStorage.getItem('token');
    var amount = document.querySelector('#balance-form-deposit').value;
    amount = parseFloat(amount);

    let data = {
        id: id,
        amount: amount
    }
    data = JSON.stringify(data);

    xhr.open('PUT', `/profile/balance`, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText); 
        } else { 
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                let balanceField = document.querySelector('#balanceField');
                balanceField.innerHTML = data.balance;

                document.querySelector('#balance-form-deposit').value = 0.00;
            }
        }
    };
    xhr.send(data);
}