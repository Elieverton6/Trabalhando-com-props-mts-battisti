import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'

function App() {
  
  const nome = "Maria"

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Matheus" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa nome="Elieverton" idade="16" profissao="Programador" />
    </div>
  );
}

export default App;
