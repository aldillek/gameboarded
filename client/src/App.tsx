import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const data = [
    {
      name: "Adam",
      age: 28,
      group: "Sem I / Group B",
    },
    {
      name: "Roman",
      age: 30,
      group: "Sem III / Group C",
    },
    {
      name: "Ania",
      age: 27,
      group: "Sem I / Group A",
    },
    {
      name: "Karol",
      age: 31,
      group: "Sem IV / Group A",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>

        {count % 5 === 0
          ? data.map(({ name }) => <p key={name}> {name}</p>)
          : "Nie ma ludzi"}
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count} {"testse"}
        </button>
      </header>
    </div>
  );
}

export default App;
