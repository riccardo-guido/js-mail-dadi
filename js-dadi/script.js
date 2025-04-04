const risultati = [0, 0]; // Indice 0 per il giocatore, indice 1 per il computer

for (let i = 0; i < 2; i++) {
    risultati[i] = Math.floor(Math.random() * 6) + 1; // Genera numero casuale tra 1 e 6
}

console.log("Giocatore ha ottenuto:", risultati[0]);
console.log("Computer ha ottenuto:", risultati[1]);

if (risultati[0] > risultati[1]) {
    console.log("Hai vinto!");
} else if (risultati[0] < risultati[1]) {
    console.log("Hai perso. Vince il computer!");
} else {
    console.log("Pareggio!");
}
