// React Imports
import React, { useState } from 'react'
import MainPage from "./Components/MainPage"

// ThirdWeb Imports

// Style Imports
import '@fontsource/croissant-one';
import { ChakraProvider } from '@chakra-ui/react';


function App() {

 
 return (
    <ChakraProvider>
<MainPage/>
    </ChakraProvider>
    )
}

export default App
