import './App.css';
import HelloWord from './components/HelloWord';

function App() {

  const name = 'Gabriel'

  const newName = name.toUpperCase()

  function sum(a,b) {
    return a + b
  }

  const url = "https://placehold.co/150"

  return (
    <div className="App">
        <h1>Alterando o JSX</h1>
        <p>Olá, {newName}</p>
        <p>soma: 2+2 = {sum(2,2)}</p>
        <HelloWord/>
    </div>
  );
}

export default App;
