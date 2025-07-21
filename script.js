function showResult() {
  const result = document.getElementById('result');
  const circuits = ["Le Mans", "Jerez", "Mugello", "Silverstone", "Spielberg", "Assen"];
  const circuit = circuits[Math.floor(Math.random() * circuits.length)];
  result.innerText = "🏁 Tu es le circuit de " + circuit + " !";
}