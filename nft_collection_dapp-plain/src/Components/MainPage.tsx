// React Imports
import NavBar from './NavBar'
import CollectionScreen from './CollectionScreen'
import React, { useEffect, useState } from 'react'


// zk Login imports

// Style Imports
import { Box, Text } from '@chakra-ui/react'


// todo 

const MainPage = () => {

  return (
    <Box bgImg={"https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg"} position="absolute"  mb="-12" bgAttachment="fixed" w="100vw" h="120vh"  bgSize={"cover"} bgRepeat={"no-repeat"} objectFit={"cover"}>
      <NavBar />  
        <CollectionScreen />
    </Box>
  )
}

export default MainPage
