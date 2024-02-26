import React from "react";
import EasterEgg from '../components/EastarEgg'; // Importera påskägget

export default function App(){
  return(
    <div>
      <h1 className="välkommen">Välkommen till min hemsida</h1>
      <h4 className="nourozi">jag heter Zia Nourozi. Jag är en student på utbildningen Systemutvecklare .NET med AI kompetens.</h4>
      <EasterEgg /> {/* Inkludera påskägget här */}
    </div>
  );
}