import React from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import NvBar from './components/NvBar';
import Principal from './components/Principal';


function App() {


  return (
    <div className="App">
<NvBar/>
<Principal/>
<ItemDetailContainer/>
    </div>
  );
}

export default App;
