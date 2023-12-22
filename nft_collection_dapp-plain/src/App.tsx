// React Imports
import React, { useState } from 'react'
import MainPage from "./Components/MainPage"



// Style Imports
import '@fontsource/croissant-one';
import { ChakraProvider, Text } from '@chakra-ui/react';


function App() {

 return (

    <ChakraProvider>
<MainPage/>
    </ChakraProvider>
    )
}

export default App
