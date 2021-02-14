import React from 'react'
import './App.css';
import LocationContainer from './components/LocationContainer'
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <LocationContainer />
      </ChakraProvider>
    </div>
  );
}

export default App;
