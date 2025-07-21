---
layout: default
title: Quiz MotoGP 2026 - Quel circuit es-tu ?
---

# Quiz MotoGP 2026

Réponds aux 50 questions pour découvrir quel circuit MotoGP européen 2026 te correspond le mieux !

<form id="quizForm">
  {% assign circuits = "lemans,jerez,assen,mugello,spielberg,misano,silverstone,barcelona,portimao" | split: "," %}
  
  <!-- Questions 1 à 10 -->
  <section>
  <h2>Questions 1 à 10</h2>

  <p>1. Quel est le style de pilotage que tu préfères ?</p>
  <label><input type="radio" name="q1" value="lemans" required> Fluide et précis, comme sur Le Mans</label><br/>
  <label><input type="radio" name="q1" value="jerez"> Agressif et technique, à la Jerez</label><br/>
  <label><input type="radio" name="q1" value="assen"> Rapide et engagé, comme Assen</label><br/>
  <label><input type="radio" name="q1" value="mugello"> Puissant et contrôlé, Mugello style</label><br/>
  <label><input type="radio" name="q1" value="spielberg"> Stratégique et calculateur, Spielberg</label><br/>
  <label><input type="radio" name="q1" value="misano"> Agile et rapide, Misano</label><br/>
  <label><input type="radio" name="q1" value="silverstone"> Endurant et courageux, Silverstone</label><br/>
  <label><input type="radio" name="q1" value="barcelona"> Technique et polyvalent, Barcelone</label><br/>
  <label><input type="radio" name="q1" value="portimao"> Audacieux et imprévisible, Portimão</label><br/>

  <p>2. Quelle météo préfères-tu pour une course ?</p>
  <label><input type="radio" name="q2" value="lemans" required> Fraîche et légèrement humide, Le Mans</label><br/>
  <label><input type="radio" name="q2" value="jerez"> Ensoleillée et chaude, Jerez</label><br/>
  <label><input type="radio" name="q2" value="assen"> Pluvieuse et technique, Assen</label><br/>
  <label><input type="radio" name="q2" value="mugello"> Ensoleillée avec des pics de chaleur, Mugello</label><br/>
  <label><input type="radio" name="q2" value="spielberg"> Variable et fraîche, Spielberg</label><br/>
  <label><input type="radio" name="q2" value="misano"> Ensoleillée mais fraîche, Misano</label><br/>
  <label><input type="radio" name="q2" value="silverstone"> Changeante et souvent humide, Silverstone</label><br/>
  <label><input type="radio" name="q2" value="barcelona"> Chaude et stable, Barcelone</label><br/>
  <label><input type="radio" name="q2" value="portimao"> Variable et imprévisible, Portimão</label><br/>

  <p>3. Quel type de virage préfères-tu ?</p>
  <label><input type="radio" name="q3" value="lemans" required> Virages rapides et fluides, Le Mans</label><br/>
  <label><input type="radio" name="q3" value="jerez"> Virages serrés et techniques, Jerez</label><br/>
  <label><input type="radio" name="q3" value="assen"> Virages rapides et sinueux, Assen</label><br/>
  <label><input type="radio" name="q3" value="mugello"> Virages longs et rapides, Mugello</label><br/>
  <label><input type="radio" name="q3" value="spielberg"> Combinaison de virages lents et rapides, Spielberg</label><br/>
  <label><input type="radio" name="q3" value="misano"> Virages lents et serrés, Misano</label><br/>
  <label><input type="radio" name="q3" value="silverstone"> Virages rapides et variés, Silverstone</label><br/>
  <label><input type="radio" name="q3" value="barcelona"> Virages lents et moyens, Barcelone</label><br/>
  <label><input type="radio" name="q3" value="portimao"> Virages en montée et descente, Portimão</label><br/>

  <p>4. Quelle ambiance de paddock préfères-tu ?</p>
  <label><input type="radio" name="q4" value="lemans" required> Traditionnelle et calme, Le Mans</label><br/>
  <label><input type="radio" name="q4" value="jerez"> Festive et animée, Jerez</label><br/>
  <label><input type="radio" name="q4" value="assen"> Passionnée et locale, Assen</label><br/>
  <label><input type="radio" name="q4" value="mugello"> Festive avec des fans passionnés, Mugello</label><br/>
  <label><input type="radio" name="q4" value="spielberg"> Familiale et accueillante, Spielberg</label><br/>
  <label><input type="radio" name="q4" value="misano"> Chaleureuse et proche des fans, Misano</label><br/>
  <label><input type="radio" name="q4" value="silverstone"> Professionnelle et intense, Silverstone</label><br/>
  <label><input type="radio" name="q4" value="barcelona"> Décontractée et technique, Barcelone</label><br/>
  <label><input type="radio" name="q4" value="portimao"> Dynamique et imprévisible, Portimão</label><br/>

  <p>5. Quel est ton type de freinage préféré ?</p>
  <label><input type="radio" name="q5" value="lemans" required> Progressif et précis, Le Mans</label><br/>
  <label><input type="radio" name="q5" value="jerez"> Fort et tardif, Jerez</label><br/>
  <label><input type="radio" name="q5" value="assen"> Modéré et technique, Assen</label><br/>
  <label><input type="radio" name="q5" value="mugello"> Très fort et puissant, Mugello</label><br/>
  <label><input type="radio" name="q5" value="spielberg"> Mesuré et stratégique, Spielberg</label><br/>
  <label><input type="radio" name="q5" value="misano"> Rapide et contrôlé, Misano</label><br/>
  <label><input type="radio" name="q5" value="silverstone"> Intense et physique, Silverstone</label><br/>
  <label><input type="radio" name="q5" value="barcelona"> Technique et fluide, Barcelone</label><br/>
  <label><input type="radio" name="q5" value="portimao"> Brutal et audacieux, Portimão</label><br/>

  <p>6. Quelle est ta couleur de combinaison préférée ?</p>
  <label><input type="radio" name="q6" value="lemans" required> Bleu et blanc, Le Mans</label><br/>
  <label><input type="radio" name="q6" value="jerez"> Rouge vif, Jerez</label><br/>
  <label><input type="radio" name="q6" value="assen"> Jaune et noir, Assen</label><br/>
  <label><input type="radio" name="q6" value="mugello"> Vert et noir, Mugello</label><br/>
  <label><input type="radio" name="q6" value="spielberg"> Blanc et rouge, Spielberg</label><br/>
  <label><input type="radio" name="q6" value="misano"> Rouge et blanc, Misano</label><br/>
  <label><input type="radio" name="q6" value="silverstone"> Noir et gris, Silverstone</label><br/>
  <label><input type="radio" name="q6" value="barcelona"> Bleu foncé, Barcelone</label><br/>
  <label><input type="radio" name="q6" value="portimao"> Orange et noir, Portimão</label><br/>

  <p>7. Quel type de fans admires-tu ?</p>
  <label><input type="radio" name="q7" value="lemans" required> Passionnés mais calmes, Le Mans</label><br/>
  <label><input type="radio" name="q7" value="jerez"> Très bruyants et festifs, Jerez</label><br/>
  <label><input type="radio" name="q7" value="assen"> Loyaux et locaux, Assen</label><br/>
  <label><input type="radio" name="q7" value="mugello"> Enthousiastes et colorés, Mugello</label><br/>
  <label><input type="radio" name="q7" value="spielberg"> Famille et amis, Spielberg</label><br/>
  <label><input type="radio" name="q7" value="misano"> Proches et accueillants, Misano</label><br/>
  <label><input type="radio" name="q7" value="silverstone"> Très connaisseurs, Silverstone</label><br/>
  <label><input type="radio" name="q7" value="barcelona"> Passionnés et techniques, Barcelone</label><br/>
  <label><input type="radio" name="q7" value="portimao"> Spontanés et enthousiastes, Portimão</label><br/>

  <p>8. Quelle est ta moto idéale ?</p>
  <label><input type="radio" name="q8" value="lemans" required> Équilibrée et fiable, Le Mans</label><br/>
  <label><input type="radio" name="q8" value="jerez"> Puissante et nerveuse, Jerez</label><br/>
  <label><input type="radio" name="q8" value="assen"> Agile et rapide, Assen</label><br/>
  <label><input type="radio" name="q8" value="mugello"> Puissante et stable, Mugello</label><br/>
  <label><input type="radio" name="q8" value="spielberg"> Polyvalente et précise, Spielberg</label><br/>
  <label><input type="radio" name="q8" value="misano"> Rapide et légère, Misano</label><br/>
  <label><input type="radio" name="q8" value="silverstone"> Solide et robuste, Silverstone</label><br/>
  <label><input type="radio" name="q8" value="barcelona"> Technique et réactive, Barcelone</label><br/>
  <label><input type="radio" name="q8" value="portimao"> Puissante et audacieuse, Portimão</label><br/>

  <p>9. Quel est ton moment préféré dans une course ?</p>
  <label><input type="radio" name="q9" value="lemans" required> La ligne droite des stands, Le Mans</label><br/>
  <label><input type="radio" name="q9" value="jerez"> La chicane rapide, Jerez</label><br/>
  <label><input type="radio" name="q9" value="assen"> Le dernier tour, Assen</label><br/>
  <label><input type="radio" name="q9" value="mugello"> Les dépassements en courbe, Mugello</label><br/>
  <label><input type="radio" name="q9" value="spielberg"> Le départ stratégique, Spielberg</label><br/>
  <label><input type="radio" name="q9" value="misano"> Les freinages en douceur, Misano</label><br/>
  <label><input type="radio" name="q9" value="silverstone"> Les longues lignes droites, Silverstone</label><br/>
  <label><input type="radio" name="q9" value="barcelona"> Les virages techniques, Barcelone</label><br/>
  <label><input type="radio" name="q9" value="portimao"> Les bosses et reliefs, Portimão</label><br/>

  <p>10. Quel est ton pilote préféré parmi ces légendes ?</p>
  <label><input type="radio" name="q10" value="lemans" required> Johann Zarco (Le Mans)</label><br/>
  <label><input type="radio" name="q10" value="jerez"> Marc Márquez (Jerez)</label><br/>
  <label><input type="radio" name="q10" value="assen"> Valentino Rossi (Assen)</label><br/>
  <label><input type="radio" name="q10" value="mugello"> Francesco Bagnaia (Mugello)</label><br/>
  <label><input type="radio" name="q10" value="spielberg"> Brad Binder (Spielberg)</label><br/>
  <label><input type="radio" name="q10" value="misano"> Enea Bastianini (Misano)</label><br/>
  <label><input type="radio" name="q10" value="silverstone"> Cal Crutchlow (Silverstone)</label><br/>
  <label><input type="radio" name="q10" value="barcelona"> Pol Espargaró (Barcelone)</label><br/>
  <label><input type="radio" name="q10" value="portimao"> Miguel Oliveira (Portimão)</label><br/>
  </section>


<p>11. Quelle est ta distance préférée pour une course ?</p>
<label><input type="radio" name="q11" value="lemans" required> Moyenne, Le Mans</label><br/>
<label><input type="radio" name="q11" value="jerez"> Courte et intense, Jerez</label><br/>
<label><input type="radio" name="q11" value="assen"> Longue et stratégique, Assen</label><br/>
<label><input type="radio" name="q11" value="mugello"> Moyenne avec des pics de vitesse, Mugello</label><br/>
<label><input type="radio" name="q11" value="spielberg"> Courte et technique, Spielberg</label><br/>
<label><input type="radio" name="q11" value="misano"> Moyenne et rythmée, Misano</label><br/>
<label><input type="radio" name="q11" value="silverstone"> Longue et exigeante, Silverstone</label><br/>
<label><input type="radio" name="q11" value="barcelona"> Moyenne et variée, Barcelone</label><br/>
<label><input type="radio" name="q11" value="portimao"> Variable et imprévisible, Portimão</label><br/>

<p>12. Quel est ton moment préféré sur le podium ?</p>
<label><input type="radio" name="q12" value="lemans" required> La montée des marches, Le Mans</label><br/>
<label><input type="radio" name="q12" value="jerez"> La célébration avec les fans, Jerez</label><br/>
<label><input type="radio" name="q12" value="assen"> Le sourire et la détente, Assen</label><br/>
<label><input type="radio" name="q12" value="mugello"> Les feux d’artifice, Mugello</label><br/>
<label><input type="radio" name="q12" value="spielberg"> Le champagne et la fête, Spielberg</label><br/>
<label><input type="radio" name="q12" value="misano"> Le partage avec l’équipe, Misano</label><br/>
<label><input type="radio" name="q12" value="silverstone"> Le respect des adversaires, Silverstone</label><br/>
<label><input type="radio" name="q12" value="barcelona"> La photo souvenir, Barcelone</label><br/>
<label><input type="radio" name="q12" value="portimao"> L’énergie brute, Portimão</label><br/>

<p>13. Quel est ton style musical préféré pour te motiver ?</p>
<label><input type="radio" name="q13" value="lemans" required> Rock classique, Le Mans</label><br/>
<label><input type="radio" name="q13" value="jerez"> Flamenco et rythmes chauds, Jerez</label><br/>
<label><input type="radio" name="q13" value="assen"> Electro dynamique, Assen</label><br/>
<label><input type="radio" name="q13" value="mugello"> Pop italienne, Mugello</label><br/>
<label><input type="radio" name="q13" value="spielberg"> Jazz et blues, Spielberg</label><br/>
<label><input type="radio" name="q13" value="misano"> Rock moderne, Misano</label><br/>
<label><input type="radio" name="q13" value="silverstone"> Hard rock, Silverstone</label><br/>
<label><input type="radio" name="q13" value="barcelona"> Indie et folk, Barcelone</label><br/>
<label><input type="radio" name="q13" value="portimao"> Musique alternative, Portimão</label><br/>

<p>14. Quelle est ta boisson préférée avant une course ?</p>
<label><input type="radio" name="q14" value="lemans" required> Eau minérale, Le Mans</label><br/>
<label><input type="radio" name="q14" value="jerez"> Café fort, Jerez</label><br/>
<label><input type="radio" name="q14" value="assen"> Boisson énergisante, Assen</label><br/>
<label><input type="radio" name="q14" value="mugello"> Jus de fruit, Mugello</label><br/>
<label><input type="radio" name="q14" value="spielberg"> Thé vert, Spielberg</label><br/>
<label><input type="radio" name="q14" value="misano"> Eau pétillante, Misano</label><br/>
<label><input type="radio" name="q14" value="silverstone"> Café noir, Silverstone</label><br/>
<label><input type="radio" name="q14" value="barcelona"> Smoothie, Barcelone</label><br/>
<label><input type="radio" name="q14" value="portimao"> Boisson sportive, Portimão</label><br/>

<p>15. Quel est ton type de virage préféré pour dépasser ?</p>
<label><input type="radio" name="q15" value="lemans" required> Virage rapide en épingle, Le Mans</label><br/>
<label><input type="radio" name="q15" value="jerez"> Virage serré en aveugle, Jerez</label><br/>
<label><input type="radio" name="q15" value="assen"> Virage en courbe rapide, Assen</label><br/>
<label><input type="radio" name="q15" value="mugello"> Virage long et rapide, Mugello</label><br/>
<label><input type="radio" name="q15" value="spielberg"> Virage en montée, Spielberg</label><br/>
<label><input type="radio" name="q15" value="misano"> Virage lent et serré, Misano</label><br/>
<label><input type="radio" name="q15" value="silverstone"> Virage rapide et technique, Silverstone</label><br/>
<label><input type="radio" name="q15" value="barcelona"> Virage moyen, Barcelone</label><br/>
<label><input type="radio" name="q15" value="portimao"> Virage en descente, Portimão</label><br/>

<p>16. Quelle est ta préparation physique favorite ?</p>
<label><input type="radio" name="q16" value="lemans" required> Endurance et souplesse, Le Mans</label><br/>
<label><input type="radio" name="q16" value="jerez"> Force et explosivité, Jerez</label><br/>
<label><input type="radio" name="q16" value="assen"> Coordination et équilibre, Assen</label><br/>
<label><input type="radio" name="q16" value="mugello"> Résistance et puissance, Mugello</label><br/>
<label><input type="radio" name="q16" value="spielberg"> Relaxation et récupération, Spielberg</label><br/>
<label><input type="radio" name="q16" value="misano"> Vitesse et agilité, Misano</label><br/>
<label><input type="radio" name="q16" value="silverstone"> Explosivité et endurance, Silverstone</label><br/>
<label><input type="radio" name="q16" value="barcelona"> Agilité et technique, Barcelone</label><br/>
<label><input type="radio" name="q16" value="portimao"> Puissance et contrôle, Portimão</label><br/>

<p>17. Quel est ton souvenir préféré d’une course ?</p>
<label><input type="radio" name="q17" value="lemans" required> Victoire serrée, Le Mans</label><br/>
<label><input type="radio" name="q17" value="jerez"> Chute spectaculaire, Jerez</label><br/>
<label><input type="radio" name="q17" value="assen"> Drapeau à damier, Assen</label><br/>
<label><input type="radio" name="q17" value="mugello"> Record du tour, Mugello</label><br/>
<label><input type="radio" name="q17" value="spielberg"> Départ sous la pluie, Spielberg</label><br/>
<label><input type="radio" name="q17" value="misano"> Duel intense, Misano</label><br/>
<label><input type="radio" name="q17" value="silverstone"> Première pole position, Silverstone</label><br/>
<label><input type="radio" name="q17" value="barcelona"> Premier podium, Barcelone</label><br/>
<label><input type="radio" name="q17" value="portimao"> Accident évité, Portimão</label><br/>


<p>18. Quel est ton animal totem pour la course ?</p>
<label><input type="radio" name="q18" value="lemans" required> Faucon, Le Mans</label><br/>
<label><input type="radio" name="q18" value="jerez"> Taureau, Jerez</label><br/>
<label><input type="radio" name="q18" value="assen"> Cheval, Assen</label><br/>
<label><input type="radio" name="q18" value="mugello"> Lion, Mugello</label><br/>
<label><input type="radio" name="q18" value="spielberg"> Loup, Spielberg</label><br/>
<label><input type="radio" name="q18" value="misano"> Tigre, Misano</label><br/>
<label><input type="radio" name="q18" value="silverstone"> Aigle, Silverstone</label><br/>
<label><input type="radio" name="q18" value="barcelona"> Renard, Barcelone</label><br/>
<label><input type="radio" name="q18" value="portimao"> Serpent, Portimão</label><br/>

<p>19. Quelle météo préfères-tu pour une course ?</p>
<label><input type="radio" name="q19" value="lemans" required> Temps frais et sec, Le Mans</label><br/>
<label><input type="radio" name="q19" value="jerez"> Chaleur sèche, Jerez</label><br/>
<label><input type="radio" name="q19" value="assen"> Pluie modérée, Assen</label><br/>
<label><input type="radio" name="q19" value="mugello"> Soleil éclatant, Mugello</label><br/>
<label><input type="radio" name="q19" value="spielberg"> Temps changeant, Spielberg</label><br/>
<label><input type="radio" name="q19" value="misano"> Humidité et chaleur, Misano</label><br/>
<label><input type="radio" name="q19" value="silverstone"> Temps frais et humide, Silverstone</label><br/>
<label><input type="radio" name="q19" value="barcelona"> Soleil et vent, Barcelone</label><br/>
<label><input type="radio" name="q19" value="portimao"> Pluie forte, Portimão</label><br/>

<p>20. Quel est ton type de circuit préféré ?</p>
<label><input type="radio" name="q20" value="lemans" required> Circuit technique, Le Mans</label><br/>
<label><input type="radio" name="q20" value="jerez"> Circuit sinueux, Jerez</label><br/>
<label><input type="radio" name="q20" value="assen"> Circuit rapide, Assen</label><br/>
<label><input type="radio" name="q20" value="mugello"> Circuit rapide avec longues lignes droites, Mugello</label><br/>
<label><input type="radio" name="q20" value="spielberg"> Circuit vallonné, Spielberg</label><br/>
<label><input type="radio" name="q20" value="misano"> Circuit urbain, Misano</label><br/>
<label><input type="radio" name="q20" value="silverstone"> Circuit historique, Silverstone</label><br/>
<label><input type="radio" name="q20" value="barcelona"> Circuit moderne, Barcelone</label><br/>
<label><input type="radio" name="q20" value="portimao"> Circuit imprévisible, Portimão</label><br/>


<p>21. Quelle est ta technique préférée pour négocier un virage ?</p>
<label><input type="radio" name="q21" value="lemans" required> Freinage tardif, Le Mans</label><br/>
<label><input type="radio" name="q21" value="jerez"> Glisse contrôlée, Jerez</label><br/>
<label><input type="radio" name="q21" value="assen"> Prise d’angle maximale, Assen</label><br/>
<label><input type="radio" name="q21" value="mugello"> Accélération progressive, Mugello</label><br/>
<label><input type="radio" name="q21" value="spielberg"> Freinage en descente, Spielberg</label><br/>
<label><input type="radio" name="q21" value="misano"> Changement de ligne, Misano</label><br/>
<label><input type="radio" name="q21" value="silverstone"> Précision et fluidité, Silverstone</label><br/>
<label><input type="radio" name="q21" value="barcelona"> Dosage parfait, Barcelone</label><br/>
<label><input type="radio" name="q21" value="portimao"> Adaptabilité, Portimão</label><br/>

<p>22. Quel est ton moment préféré de la saison ?</p>
<label><input type="radio" name="q22" value="lemans" required> Le début, Le Mans</label><br/>
<label><input type="radio" name="q22" value="jerez"> Le milieu, Jerez</label><br/>
<label><input type="radio" name="q22" value="assen"> La fin, Assen</label><br/>
<label><input type="radio" name="q22" value="mugello"> Les courses clés, Mugello</label><br/>
<label><input type="radio" name="q22" value="spielberg"> Les nouveautés techniques, Spielberg</label><br/>
<label><input type="radio" name="q22" value="misano"> Les duels serrés, Misano</label><br/>
<label><input type="radio" name="q22" value="silverstone"> Les circuits légendaires, Silverstone</label><br/>
<label><input type="radio" name="q22" value="barcelona"> Les week-ends festifs, Barcelone</label><br/>
<label><input type="radio" name="q22" value="portimao"> Les surprises, Portimão</label><br/>

<p>23. Quelle est ta couleur préférée sur la moto ?</p>
<label><input type="radio" name="q23" value="lemans" required> Bleu, Le Mans</label><br/>
<label><input type="radio" name="q23" value="jerez"> Rouge, Jerez</label><br/>
<label><input type="radio" name="q23" value="assen"> Vert, Assen</label><br/>
<label><input type="radio" name="q23" value="mugello"> Jaune, Mugello</label><br/>
<label><input type="radio" name="q23" value="spielberg"> Noir, Spielberg</label><br/>
<label><input type="radio" name="q23" value="misano"> Blanc, Misano</label><br/>
<label><input type="radio" name="q23" value="silverstone"> Gris, Silverstone</label><br/>
<label><input type="radio" name="q23" value="barcelona"> Orange, Barcelone</label><br/>
<label><input type="radio" name="q23" value="portimao"> Violet, Portimão</label><br/>

<p>24. Quelle est ta marque préférée en MotoGP ?</p>
<label><input type="radio" name="q24" value="lemans" required> Yamaha, Le Mans</label><br/>
<label><input type="radio" name="q24" value="jerez"> Honda, Jerez</label><br/>
<label><input type="radio" name="q24" value="assen"> Ducati, Assen</label><br/>
<label><input type="radio" name="q24" value="mugello"> Suzuki, Mugello</label><br/>
<label><input type="radio" name="q24" value="spielberg"> KTM, Spielberg</label><br/>
<label><input type="radio" name="q24" value="misano"> Aprilia, Misano</label><br/>
<label><input type="radio" name="q24" value="silverstone"> MV Agusta, Silverstone</label><br/>
<label><input type="radio" name="q24" value="barcelona"> Beta, Barcelone</label><br/>
<label><input type="radio" name="q24" value="portimao"> GasGas, Portimão</label><br/>

<p>25. Quel est ton pilote préféré ?</p>
<label><input type="radio" name="q25" value="lemans" required> Fabio Quartararo, Le Mans</label><br/>
<label><input type="radio" name="q25" value="jerez"> Marc Marquez, Jerez</label><br/>
<label><input type="radio" name="q25" value="assen"> Francesco Bagnaia, Assen</label><br/>
<label><input type="radio" name="q25" value="mugello"> Joan Mir, Mugello</label><br/>
<label><input type="radio" name="q25" value="spielberg"> Brad Binder, Spielberg</label><br/>
<label><input type="radio" name="q25" value="misano"> Aleix Espargaro, Misano</label><br/>
<label><input type="radio" name="q25" value="silverstone"> Maverick Viñales, Silverstone</label><br/>
<label><input type="radio" name="q25" value="barcelona"> Jorge Martin, Barcelone</label><br/>
<label><input type="radio" name="q25" value="portimao"> Enea Bastianini, Portimão</label><br/>

<!-- Bouton pour afficher le résultat -->
<form id="quizForm">
  <!-- (Tes questions ici, sous forme d'inputs radio) -->

  <button type="submit" id="btnResult">Voir mon circuit</button>
</form>

<!-- Zone pour afficher le résultat -->
<div id="result" style="margin-top: 20px; font-size: 1.2em; font-weight: bold;"></div>

<!-- Script JS à placer ici, ou mieux dans assets/js/script.js -->
<script>
  function calculateResult(event) {
    event.preventDefault(); // bloque le rechargement de la page

    const answers = document.querySelectorAll('input[type=radio]:checked');
    if (answers.length < 50) {
      alert('Merci de répondre à toutes les questions avant de voir le résultat !');
      return;
    }

    const scores = {
      lemans: 0, jerez: 0, assen: 0, mugello: 0,
      spielberg: 0, misano: 0, silverstone: 0,
      barcelona: 0, portimao: 0
    };

    answers.forEach(answer => {
      if (scores.hasOwnProperty(answer.value)) {
        scores[answer.value]++;
      }
    });

    const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

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
    resultDiv.innerHTML = `
      🏁 Tu es le circuit de <strong>${names[winner]}</strong> !<br/>
      Prépare-toi pour un week-end de folie sur ce tracé légendaire !
    `;
    resultDiv.scrollIntoView({ behavior: "smooth" });
  }

  document.getElementById('quizForm').addEventListener('submit', calculateResult);
</script>


