function calculateResult() {
  const answers = document.querySelectorAll('input[type=radio]:checked');
  const scores = {
    lemans: 0,
    jerez: 0,
    assen: 0,
    spielberg: 0,
    mugello: 0
  };

  answers.forEach((answer) => {
    if (scores.hasOwnProperty(answer.value)) {
      scores[answer.value]++;
    }
  });

  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  const names = {
    lemans: "Le Mans 🇫🇷",
    jerez: "Jerez 🇪🇸",
    assen: "Assen 🇳🇱",
    spielberg: "Spielberg 🇦🇹",
    mugello: "Mugello 🇮🇹"
  };

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `🏁 Tu es le circuit de <strong>${names[winner]}</strong> !`;
}
