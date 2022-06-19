import "./App.css";
import Vector from "./Vector.jpg";
import Dictionary from "./Dictionary";
import dicpicture from "./dicpicture.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={dicpicture} className="App-logo img-fluid" alt="logo" />
          <img src={Vector} className="App-logo vector img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="lime" />
        </main>
        <footer className="App-footer">
          <small>Coded by Chiara Alicata</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
