// Cookies in JS
// Sind ein Prop vom document
// document.cookie gibt uns einen String zurück in dem alle Cookies enthalten sind und mit ; getrennte werden
// Cookies werden in Schlüssel=Wert Paaren gespeichert (key=value)
// Cookies können auch in den Browser-Dev Tools unter dem Reiter Anwendungen => Speicher => Cookies ausgelesen
// werden
// die Funktionen erstellen

// 1. Funktion um Cookies zu erstellen
function setCookie(cookieName, cookieValue, expireDays=0) {
    const currentDate = new Date().getTime();
    // Gibt uns die nötigen Millisekunden um das entsprechende Datum zu generieren
    const expireDate= new Date().setTime(currentDate + (expireDays*24*60*60*1000));
    // Erstellt das Datum und fügt es in den String ein
    const expiration = `expires=${new Date(expireDate).toUTCString()};`;
    console.log(expiration);
    // Hier wird der Cookie gesetzt
    document.cookie = `${cookieName}=${cookieValue};${expiration}`;
}

// 2. Funktion um Cookies anzuzeigen (document.querySelector(id).innerText = ...;)
function getCookies() {
    const cookies = document.cookie;
    document.querySelector("#output").innerText = cookies;
}

// 3. Funktion um Cookies zu löschen (expireDate = 0)
// Wenn wir einen Cookie löschen wollen, müssen wir das expiration Date auf ein Datum in der Vergangenheit
// setzen
function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=${new Date(0).toUTCString()};`;
}

// 4. Cookies erlauben per AddEventListener ("click") => Funktion 2. Aufgabe (10Min)
const showCookie = document.querySelector("#showCookies");
showCookie.addEventListener("click", getCookies);

const deleteCookies = document.querySelector("#deleteCookies");
deleteCookies.addEventListener("click", () => {
    deleteCookie("consent");
})

const consentCookies = document.querySelector("#consent");
consentCookies.addEventListener("click", () => {
    setCookie("consent", "yes", 50);
    document.querySelector(".cookie-banner").style.display = "none";
})

// 5. Funktion um das Cookie "Banner" zu verstecken (Falls der Cookie bereits gesetzt ist)
function showBanner() {
    const cookies = document.cookie;
    if(cookies.includes("consent")) {
        document.querySelector(".cookie-banner").style.display = "none";
    }
    else {
        document.querySelector(".cookie-banner").style.display = "block";
        document.querySelectorAll(".cookie-banner");
    }
}

// Event wird ausgelöst, sobald die Seite fertig geladen ist
window.addEventListener("load", showBanner);

deleteCookies.addEventListener("click", showBanner);

// Session & LocalStorage
// Gültigkeit:
// Session Storage nur während der Browsersitzung
// localStorage gilt solange bis er gelöscht wird
// Daten werden nicht an den Server übertragen
// Pro Verbindung, d.h. bei http und https Seiten zwei getrennte Storages
// Maximale Größe: OS und Browser abhängig, laut HTML5 Spezifikation sollten es bis zu 5MB sein