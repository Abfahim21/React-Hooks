import './App.css';
import UseEffect from './components/UseEffect';
import UseStateV1 from './components/UseStateV1';
import UseStateV2 from './components/UseStateV2';
import UseStateV3 from './components/UseStateV3';
import UseStateWithArray from './components/UseStateWithArray';
import UseStateWithObject from './components/UseStateWithObject';

function App() {
  return (
    <div className="App">
      <UseStateV1/>
      <UseStateV2/>
      <UseStateV3/>
      <UseStateWithObject/>
      <UseStateWithArray/>
      <UseEffect/>
    </div>
  );
}

export default App;
