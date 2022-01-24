import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyle";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
