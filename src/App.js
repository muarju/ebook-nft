import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Home from "./pages/Home/Home";
import NftDetails from "./pages/NFT/NftDetails";
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/nft/:id" exact element={<NftDetails />} />
          </Routes>
        </Worker>
      </div>
    </BrowserRouter>
  );
}

export default App;
