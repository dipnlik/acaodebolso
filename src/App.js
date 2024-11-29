import { useState } from 'react';
import './App.css';
import cards from './api/cards';
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
    if (!navigator.share) return;

    navigator.share({
      title: 'Ação de Bolso',
      url: 'https://dipnlik.github.io/acaodebolso/',
    });
  }

  return (
    <div className="App">
      <h1>Ação de Bolso</h1>
      <Card contents={currentCard} />
      <p>
        <button onClick={onRefresh}>Nova carta</button>
      </p>
      <p>
        Gostou do app? Não esqueça que ele é só uma conveniência.
        Suporte os criadores e editoras comprando jogos físicos!
      </p>
      {navigator.share && (
        <p><button onClick={handleShare}>Compartilhar o app</button></p>
      )}
    </div>
  );
}

export default App;
