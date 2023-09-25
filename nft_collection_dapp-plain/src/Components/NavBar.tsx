// React Imports
import React, { useEffect, useState } from 'react'

// Style Imports
import {Box, Center, Image} from "@chakra-ui/react"
import SelectorIcon from '../Utils/SelectorIcon'
import logo from "../Utils/logo.png"

const NavBar = ({getScreenStatus}: any) => {
  // Navbar Logic
    const [selectedMint, setSelectedMint] = useState(true)

    useEffect(() => {
        getScreenStatus(selectedMint)
    }, [selectedMint])
    
  return (
    <Box  shadow={"2xl"} blur={10} borderBottomRadius={"2xl"} fontSize={"24px"} alignItems={"center"} cursor={"pointer"} justifyContent={"space-between"} display={"grid"} position={"sticky"} bgGradient='linear(to-r,  #131235,teal, #131235)' textColor="white"  gridAutoFlow={"column"} h="24" p={"4"} fontFamily={"mono"} fontWeight={"bold"}  borderColor={"pink"}>
      <Box marginLeft={10}>
        <Image src={logo} alt='logo'/>
      </Box>
      <Box w={"25rem"} ml={150} position={"relative"} justifyContent={"space-between"}  display={"grid"} gridAutoFlow={"column"}>
        <Box onClick={() => setSelectedMint(true)}>
        Mint NFT
      {selectedMint === true && <Box position={"absolute"} left={"10"} transform="rotate(0deg)"
      
      top={"30px"}>
      <SelectorIcon/>
      </Box>}
        </Box>
        <Box position={"relative"} onClick={() => setSelectedMint(false)}>
        My Collection
        {!selectedMint && <Box hidden={selectedMint} position={"absolute"} left={"4rem"} transform="rotate(0deg)"
      
      top={"30px"}>
      <SelectorIcon/>
      </Box>}
        </Box>
      </Box>
      <Box >
        Conntect Wallet Component
      </Box>
    </Box>
  )
}

export default NavBar
