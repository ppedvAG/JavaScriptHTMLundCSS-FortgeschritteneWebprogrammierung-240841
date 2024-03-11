/*const passwordInp = document.querySelector("#password");

const multiply = (x, y) => x * y;

multiply(5,5);

passwordInp.addEventListener("focus", function (ev) {
    if(passwordInp.validity.valueMissing) {
        passwordInp.setCustomValidity("Das Passwort darf nicht leer sein!");
        // ERlaubt es uns eine eigene Fehlermeldung zu schreiben
        // Solange diese kein leerer String ist, gilt die form als invalid
        passwordInp.reportValidity();
    } else {
        // Entfernen die Error-Message sobald das Input-Feld gültig ist
        passwordInp.setCustomValidity("");
    }
})

// Mögliche Validity Props
/*
    patternMismatch - Inhalt stimmt nicht mit pattern überein
    tooLong - Inhalt ist zu lang
    tooShort - Inhalt ist zu kurz
    valueMissing - Wenn das Input-Element das Attribut required hat und das Feld leer ist
    valid - Gibt true zurück, wenn alles gültig ist
    typeMismatch - Wert ist nicht der richtige Typ, z.B email ohne @
    rangeOverflow - Wert ist höher als im Max-Attribut bestimmt
    rangeUnderflow - Wert ist niedriger als im Min-Attribut bestimmt
*/

// Wenn der Benutzer ein Passwort will, und die Taste loslässt (keyup) dann soll überprüft ob das Passwort 8 Zeichen lang ist
// wenn nicht dann sollte eine Fehlermeldung kommen bzgl 8 Zeichenlängen und wie viel Zeichen man momentan hat
/*
passwordInp.addEventListener("keyup", function (ev) {
    if (passwordInp.validity.tooShort) {
        passwordInp.setCustomValidity(`Das Passwort muss mindestens 8 Zeichen lang sein. Gerade hat es ${passwordInp.value.length} Zeichen.`);
        passwordInp.reportValidity();
    } else {
        passwordInp.setCustomValidity("");
    }
})
*/
const zipCode = document.querySelector("#zipCode");
const country = document.querySelector("#country");


function checkPlz() {
    let constraints= {
        ch: ['^(X-)?\\d{4}$', "Schweizerische PLZ müssen aus genau 4 Zeichen bestehen: e.g. CH-1950 or 1950"],
        fr: ['^(F-)?\\d{5}$', "Französische PLZ müssen aus genau 5 Zeichen bestehen: e.g. F-75012 or 75012"],
        de: ['^(D-)?\\d{5}$', "Deutsche PLZ müssen aus genau 5 Zeichen bestehen: e.g. D-12345 or 12345"]
    }

    const countryValue = country.value;
    const zipCodeValue = zipCode.value;

    let constraint = new RegExp(constraints[countryValue][0], "");

    if(constraint.test(zipCodeValue)) {
        zipCode.setCustomValidity("");
    } else {
        zipCode.setCustomValidity(constraints[countryValue][1]);
        zipCode.reportValidity();
    }
}

zipCode.addEventListener("input", checkPlz);
country.addEventListener("input", checkPlz);

document.querySelector("form").addEventListener("submit", function(ev) {
    // Auf die Form angewendet verhindert event.preventDefault() Das neuladen der seite bei senden der Form
    ev.preventDefault();
})


const password = document.querySelector("#passwordEx");
const confirmation = document.querySelector("#confirmation");
const submitBtn = document.querySelector("#pwSubmit");


function checkPassword() {
    if(password.value === confirmation.value) {
        confirmation.setCustomValidity("");
        submitBtn.removeAttribute("disabled");
    }
    else {
        confirmation.setCustomValidity("Die Passwörter stimmen nicht überein.");
        confirmation.reportValidity();
        submitBtn.setAttribute("disabled", "");
    }
}

confirmation.addEventListener("keyup", checkPassword);
password.addEventListener("change", checkPassword);


console.log(submitBtn.classList);


