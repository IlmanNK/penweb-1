// membuat semua element a dengan looping
document.querySelector("#option a").foreach((a) => {
    a.addEventListener('click', (element) => {
        computerChoice(element);
    })
})
function computerChoice(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung
    // nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");

    // membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissores"];

    // Pilihan random untuk komputer
    pilihanComputer.innerHTML = choices[Math.round(Math.random() * choices.length)]
    pilihanComputer = pilihanComputer.innerHTML;

    // jika pilihan komputer sama dengan pilihan user(Draw)
    if (pilihanUser == pilihanComputer) {
        alert("DRAW");
    }
}
// Jika pilihan user yang menang
if (pilihanUser == "Rock" && pilihanComputer == "Scissores") {
    alert("YOU WIN")
} else if (pilihanUser == "Paper" && pilihanComputer == "Rock") {
    alert("YOU WIN")
} else if (pilihanUser == "Scissores" && pilihanComputer == "Rock") {
    alert("YOU WIN")
} else {
    alert("Tidak ada pilihan");
}

if (pilihanComputer == "Rock" && pilihanUser == "Scissores") {
    alert("cOMPUTER WIN")
} else if (pilihanComputer == "Paper" && pilihanUser == "Rock") {
    alert("cOMPUTER WIN")
} else if (pilihanComputer == "Scissores" && pilihanUser== "Rock") {
    alert("cOMPUTER WIN")
} else {
    alert("Tidak ada pilihan");
}