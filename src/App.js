import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Description } from './components/description';
import { Counter } from './components/counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <Description />
        <Counter label='Counter 1'/>
        <Counter label='Counter 2'/>
        <Counter label='Counter 3'/>
      </header>
    </div>
  );
}

export default App;
