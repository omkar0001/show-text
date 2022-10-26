import './App.css';
import {useState} from "react";

function App() {
  let [text, setText] = useState("Hello")
  function showText() {
    setText("Bond")
  }
  return (
    <div>
      <header>
        <button onClick={showText}>Show Text</button>
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
