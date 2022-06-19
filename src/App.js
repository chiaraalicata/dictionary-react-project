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
          This project is coded by{" "}
          <a
            href="https://www.linkedin.com/in/chiara-alicata-9b0529177/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chiara Alicata
          </a>{" "}
          and it is open-sourced on{" "}
          <a
            href="https://github.com/chiaraalicata/react-weather-project-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
