// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Nav from "./components/nav/Nav";
// import Nav from "./components/nav/nav";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Nav></Nav>
      </nav>
      <h1 className="text-6xl">Vite + React</h1>

    </>
  );
}

export default App;
