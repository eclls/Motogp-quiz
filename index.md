---
layout: default
title: Quiz MotoGP 2026
---
<h1>Quel circuit MotoGP es-tu ?</h1>
<p>Bienvenue dans ce quiz fun pour découvrir ton circuit préféré !</p>
<div id="quiz">
<form id="quiz-form">
  <div class="question">
    <p>1. Lequel de ces moments te donne le plus de frissons ?</p>
    <label><input type="radio" name="q1" value="lemans"> Le départ dans la pluie à domicile</label><br>
    <label><input type="radio" name="q1" value="jerez"> Un duel serré sous le soleil andalou</label><br>
    <label><input type="radio" name="q1" value="assen"> Des dépassements en chicane à haute vitesse</label><br>
    <label><input type="radio" name="q1" value="spielberg"> Un finish au millimètre après 300 km/h</label><br>
    <label><input type="radio" name="q1" value="mugello"> L’ambiance tifosi sous les collines italiennes</label>
  </div>
  
  <div class="question">
    <p>2. Si tu étais pilote, tu serais plutôt...</p>
    <label><input type="radio" name="q2" value="lemans"> Méthodique et constant, même sous la pluie</label><br>
    <label><input type="radio" name="q2" value="jerez"> Technique et à l’aise en virages serrés</label><br>
    <label><input type="radio" name="q2" value="assen"> Vif, imprévisible et adepte de la glisse</label><br>
    <label><input type="radio" name="q2" value="spielberg"> Ultra rapide et précis en ligne droite</label><br>
    <label><input type="radio" name="q2" value="mugello"> Emporté par la foule, 100% émotion</label>
  </div>

  <!-- Tu peux dupliquer ce bloc pour ajouter jusqu'à 50 questions -->
  
  <button type="button" onclick="calculateResult()">Voir mon circuit</button>
</form>
<div id="result"></div>
</div>
<button onclick="showResult()">Voir mon circuit</button>
<div id="result"></div>
