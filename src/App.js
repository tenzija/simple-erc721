import './App.css';
import Blockies from 'react-blockies'

function App() {
  return (
    <div className="App">
      Hello blockies
      <br/>
      <br/>
      <Blockies
        size={20}
        scale={15}
        seed={'0'}
      />
    </div>
  );
}

export default App;
