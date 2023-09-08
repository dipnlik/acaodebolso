import { useState } from 'react';
import './App.css';
import cards from "./cards.json";

Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
}

const Card = ({ contents }) => {
  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          <td className="category">P</td>
          <td className="text">{contents.P}</td>
          <td className="score">{contents.vP}</td>
        </tr>
        <tr>
          <td className="category">O</td>
          <td className="text">{contents.O}</td>
          <td className="score">{contents.vO}</td>
        </tr>
        <tr>
          <td className="category">A</td>
          <td className="text">{contents.A}</td>
          <td className="score">{contents.vA}</td>
        </tr>
        <tr>
          <td className="category">D</td>
          <td className="text">{contents.D}</td>
          <td className="score">{contents.vD}</td>
        </tr>
        <tr>
          <td className="category">L</td>
          <td className="text">{contents.L}</td>
          <td className="score">{contents.vL}</td>
        </tr>
        <tr>
          <td className="category">M</td>
          <td className="text">{contents.M}</td>
          <td className="score">{contents.vM}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td className="card-info" colSpan="3">#{contents.id}-{contents.gid}</td>
        </tr>
      </tfoot>
    </table>
  )
}

function App() {
  const [currentCard, setCurrentCard] = useState(cards.random());

  const onRefresh = () => {
    setCurrentCard(cards.random());
  }

  return (
    <div className="App">
      <h1>Ação de Bolso</h1>
      <Card contents={currentCard} />
      <p>
        <button onClick={onRefresh}>🔀</button>
      </p>
      <p>
        Gostou do app? Não esqueça que ele é só uma conveniência.
        Suporte os criadores e editoras comprando o jogo físico!
      </p>
    </div>
  );
}

export default App;
