import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Ação de Bolso</h1>
        <table class="table table-striped">
            <tbody>
                <tr>
                    <td class="category">P</td>
                    <td class="text">enxame de abelhas</td>
                    <td class="score">2</td>
                </tr>
                <tr>
                    <td class="category">O</td>
                    <td class="text">porta-malas</td>
                    <td class="score">4</td>
                </tr>
                <tr>
                    <td class="category">A</td>
                    <td class="text">marcar</td>
                    <td class="score">3</td>
                </tr>
                <tr>
                    <td class="category">D</td>
                    <td class="text">ocioso</td>
                    <td class="score">5</td>
                </tr>
                <tr>
                    <td class="category">L</td>
                    <td class="text">Olga</td>
                    <td class="score">1</td>
                </tr>
                <tr>
                    <td class="category">M</td>
                    <td class="text">guaraná</td>
                    <td class="score">6</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td class="card-info" colspan="3">#385-2</td>
                </tr>
            </tfoot>
        </table>
    </div>
  );
}

export default App;
