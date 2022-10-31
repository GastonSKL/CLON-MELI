import logo from './logo.svg';
import React from 'react';
import GlobalStyles from "./styles/GlobalStyles";
import { Layout } from "./Components/Layout/Index";

function App() {
  return (
    <div className="App">
      <Layout />
      <GlobalStyles />
    </div>
  );
}

export default App;
