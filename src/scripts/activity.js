
document.addEventListener('DOMContentLoaded', () => {

});


function loadActivity() {
    var id = sessionStorage.getItem('token');
    var url = `/profile/activity?id=${id}`;

    xhr.open('GET', url, true);
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