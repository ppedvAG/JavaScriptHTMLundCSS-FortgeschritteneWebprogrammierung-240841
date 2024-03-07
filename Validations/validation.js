const passwordInp = document.querySelector("#password");

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