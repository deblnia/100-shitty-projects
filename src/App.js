import './App.css';
import ProgressBar from './components/progressBar';

function App() {
  return (
    <div className="App">
      <h1> 💩 100 Shitty Projects </h1>
      <p> I believe that 100 shitty projects started as a extension of <a href='https://www.visakanv.com/blog/do100things/'> @visakanv's "Do 100 Things"</a>. I believe in repetition, so here are mine.</p>
      <ProgressBar currentProgress={10}/> 
    </div>
  );
}

export default App;
