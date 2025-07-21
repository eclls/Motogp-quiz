function calculateResult() {
  const answers = document.querySelectorAll('input[type=radio]:checked');
  const scores = {
    lemans: 0, jerez: 0, assen: 0, mugello: 0,
    spielberg: 0, misano: 0, silverstone: 0,
    barcelona: 0, portimao: 0
  };

  answers.forEach((answer) => {
    if (scores.hasOwnProperty(answer.value)) {
      scores[answer.value]++;
    }
  });

  if (answers.length === 0) {
    document.getElementById("result").innerHTML = "⚠️ Tu n'as sélectionné aucune réponse !";
    return;
  }

  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  const names = {
    lemans: "Le Mans 🇫🇷",
    jerez: "Jerez 🇪🇸",
    assen: "Assen 🇳🇱",
    mugello: "Mugello 🇮🇹",
    spielberg: "Spielberg 🇦🇹",
    misano: "Misano 🇮🇹",
    silverstone: "Silverstone 🇬🇧",
    barcelona: "Barcelona-Catalunya 🇪🇸",
    portimao: "Portimão 🇵🇹"
  };

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `🏁 Tu es le circuit de <strong>${names[winner]}</strong> !`;
}
