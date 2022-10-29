import './App.css';
import {useEffect, useState} from "react";
import {apiUrl} from "./constants";
import axios from "axios";

async function fetchText() {
  return (await axios.get(apiUrl)).data?.text
}

async function updateText(text) {
  await axios.put(apiUrl, {text: text})
}

function App() {
  let [text, setText] = useState("")
  let [newText, setNewText] = useState("")
  async function show() {
    let text = await fetchText()
    setText(text)
  }

  async function update() {
    await updateText(newText)
    setText(newText)
  }

  useEffect(() => {
    show()
  });

  return (
    <div>
      <header>
        <button onClick={show}>Show Text</button>
        <br/>
        <span>Text: {text}</span>
        <br/><br/>

        <input placeholder={"Update text"} type="text" value={newText} onChange={(e) => {setNewText(e.target.value)}}/>
        <br/>
        <button onClick={update}>Update Text</button>
      </header>
    </div>
  );
}

export default App;
