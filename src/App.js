import './App.css';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Intervalo from './components/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo title="intervalo"></Intervalo>
      </div>
      <div className='linha'>
        <Media title="card 1"></Media>
        <Soma title="card 2"></Soma>
        <Sorteio title="card 2"></Sorteio>
      </div>
    </div>
  );
}

export default App;
