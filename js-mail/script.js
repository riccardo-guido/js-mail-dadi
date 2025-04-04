const listaInvitati = [
    "mail1@email.com",
    "mail2@email.com",
    "mail3@email.com",
    "mail4@email.com"
];

const emailUtente = prompt("Inserisci la tua email:");

let accessoConsentito = false;

for (let i = 0; i < listaInvitati.length; i++) {
    if (listaInvitati[i] === emailUtente) {
        accessoConsentito = true;
    }
}

if (accessoConsentito) {
    console.log("Accesso consentito! Benvenuto!");
} else {
    console.log("Accesso negato. Il tuo nome non è nella lista degli invitati.");
}
