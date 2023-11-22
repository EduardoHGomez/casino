const xhr = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', () => {
    loadBalance();
});

function showDepositForm() {
    document.querySelector('.balance-container-form').style.display = 'block';
    document.querySelector('.balance-container-form-withdraw').style.display = 'none';
}

function showWithdrawForm() {
    document.querySelector('.balance-container-form').style.display = 'none';
    document.querySelector('.balance-container-form-withdraw').style.display = 'block';
}


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
    document.getElementById('value-1').addEventListener('change', showDepositForm);
    document.getElementById('value-2').addEventListener('change', showWithdrawForm);
}

function addBalance() {
    var id = sessionStorage.getItem('token');
    var amount = document.querySelector('#balance-form-deposit').value;
    amount = parseFloat(amount);

    if (isNaN(amount) || amount <= 0) {
        alert('Ingrese un monto válido para retirar.');
        return;
    }

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

                document.querySelector('#balance-form-deposit').value = '';
            }
        }
    };
    xhr.send(data);
    showDepositForm();
}

function withdrawBalance() {
    var id = sessionStorage.getItem('token');
    var amount = document.querySelector('#balance-form-withdraw').value;
    amount = parseFloat(amount);

    if (isNaN(amount) || amount <= 0) {
        alert('Ingrese un monto válido para retirar.');
        return;
    }

    amount = -amount;

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

                document.querySelector('#balance-form-withdraw').value = '';
            }
        }
    };
    xhr.send(data);

    showDepositForm();
}

