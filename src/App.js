import { useState } from 'react';
import './App.css';
import cards from "./cards.json";
import Card from './components/Card';

const sampleFrom = (list) => {
  return list[Math.floor((Math.random() * list.length))];
}

function App() {
  const [currentCard, setCurrentCard] = useState(sampleFrom(cards));

  const onRefresh = () => {
    setCurrentCard(sampleFrom(cards));
  }

  const handleShare = () => {
    if (!navigator.canShare) return;

    navigator.share({
      url: 'https://dipnlik.github.io/acaodebolso/',
    });
  }

  return (
    <div className="App">
      <h1>Ação de Bolso</h1>
      <Card contents={currentCard} />
      <p>
        <button onClick={onRefresh}>🔀</button>
        {navigator.canShare && (
          <button onClick={handleShare}>↗️</button>
        )}
      </p>
      <p>
        Gostou do app? Não esqueça que ele é só uma conveniência.
        Suporte os criadores e editoras comprando o jogo físico!
      </p>
    </div>
  );
}

export default App;
