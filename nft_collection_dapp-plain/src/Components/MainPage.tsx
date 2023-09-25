// React Imports
import NavBar from './NavBar'
import CollectionScreen from './CollectionScreen'
import MintScreen from './MintScreen'
import React, { useEffect, useState } from 'react'


// Style Imports
import { Box, Button } from '@chakra-ui/react'


function MainPage() {
    
  // Navbar Tab Info 
    const [mintScreen , setMintScreen] = useState(true)
  
  // Retrieve Navbar Tab Info
  const getScreenStatus = (data: boolean) => {
    setMintScreen(data)
  }

  return (
    <Box bgImg={"https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg"} position="absolute"  mb="-12" bgAttachment="fixed" w="100vw" h="120vh"  bgSize={"cover"} bgRepeat={"no-repeat"} objectFit={"cover"}>
      <NavBar getScreenStatus = {getScreenStatus}/>
      {mintScreen ? (
        <MintScreen/>
      ) : (
        <CollectionScreen />
      )}
    </Box>
  )
}

export default MainPage
