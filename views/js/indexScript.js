window.onload = function () {
    const server1Button = document.getElementById('server1-button')
    const server2Button = document.getElementById('server2-button')
    const serverRefreshButton = document.getElementById('refresh-button')
    serverRefreshButton.addEventListener('click', function (event) {requestUpdate(server1Button, server2Button)})
}

function requestUpdate(button1, button2) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://192.168.100.10:4000/refresh', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const resp = JSON.parse(xhr.response);
            alert(resp);
        }
    }
    xhr.send(null);
}