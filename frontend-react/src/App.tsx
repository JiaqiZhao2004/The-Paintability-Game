// import { useState } from 'react'

import StartPage from "./pages/StartPage";
import ReactLogo from "./assets/react.svg"; // adjust the path according to your file structure

function App() {
  // const [count, setCount] = useState(0)

  return (
    <StartPage
      title="The Paintability Game"
      description="A single-player strategy game based on graph theory."
      onClickTutorial={() => null}
      onClickPlay={() => null}
      image={ReactLogo}
    />
  );
}

export default App;
