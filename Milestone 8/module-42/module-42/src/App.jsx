// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Suspense } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import PricingCards from "./components/Pricing/PricingCards";
// import Nav from "./components/nav/nav";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Nav></Nav>
      </nav>
      <main>
        <Suspense>
          <PricingCards></PricingCards>
        </Suspense>
      </main>

    </>
  );
}

export default App;
