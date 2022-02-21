import React from 'react';
import { AppProvider } from './contexts/AppContext/AppContext';
import "./index.css";
import Wrapper from './screens/Wrapper';
import "./App.css";

const App = () => {
  //
  //
  return (
    <AppProvider>
      <Wrapper>
      </Wrapper>
    </AppProvider>
  )
}

export default App;

