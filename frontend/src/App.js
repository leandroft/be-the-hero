import React /*, { useState }*/ from 'react';

//import Header from './Header';

import './global.css';

//import Logon from './pages/Logon';
import Routes from './routes';

function App() {
  // const [counter, setCounter] = useState(0);
  // useState retorna um Array com duas posições: [ valor, funcaoDeAtualizacao ]

  //function increment(){
  //  setCounter (counter + 1);
  //}
  
  return (
    //<div>
    //  <Header>Contador: {counter}</Header>
    //  <button onClick={increment}>Incrementar</button>
    //</div>

    <Routes />
  );
}

export default App;
