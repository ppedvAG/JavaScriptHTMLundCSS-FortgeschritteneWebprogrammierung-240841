// Gibt Zugriff auf die Position des Users, falls dieser es erlaubt 

function locate() {
    const output = document.querySelector("#output");
    const position = document.querySelector("#position");

    // Gibt uns einen einmaligen Standort zurück
    navigator.geolocation.getCurrentPosition(
        (location) => {
            output.innerText = `Lat: ${location.coords.latitude} Long: ${location.coords.longitude}
            Accuracy: ${location.coords.accuracy}`;
            position.href = `https://www.openstreetmap.org/#map=18/${location.coords.latitude}/${location.coords.longitude}`;
            console.log(location);
        },
        (error) => {
            output.innerText = error.message + " " + error.code;
        }
    )
}

const button = document.querySelector("#allow");
button.addEventListener("click", locate);