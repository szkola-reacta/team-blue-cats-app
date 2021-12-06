import './App.css';
import Button from "components/atoms/Button";
import ProgressBar from './components/atoms/ProgressBar/ProgressBar'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          The best Memrise Clone in the Universe!
        </h1>
        <Button/>
        <ProgressBar />
      </header>
    </div>
  );
}

export default App;
