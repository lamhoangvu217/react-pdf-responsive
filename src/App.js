import { useState } from "react";

import PdfViewerComponent from "./components/PdfViewerComponent";
import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  const [document, setDocument] = useState("document.pdf");

  const handleOpen = () => setDocument("another-example.pdf");

  return (
    <div className="App">
      <div className="App-viewer">
        <Wrapper />
      </div>
    </div>
  );
}

export default App;
