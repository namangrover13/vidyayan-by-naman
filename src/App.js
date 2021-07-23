import './App.css';
import Features from './Components/Features';
import Header from './Components/Header';
import Path from './Components/Path';
import Working from './Components/Working';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h1 className="logo">Vidyayan</h1>
      </div>
      <Header />
      <Features />
      <Path />
      <Working />
    </div>
  );
}

export default App;
