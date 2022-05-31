import "./App.css";
import dictionary from "./dictionary.jpeg";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={dictionary} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Chiara Alicata</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
