// React Imports
import React from 'react'

// Sui Imports
import { ConnectButton} from '@mysten/wallet-kit'

// Style Imports
import {Box, Image} from "@chakra-ui/react"
import logo from "../Utils/logo.png"
import ZkLogin from './ZkLogin'

const NavBar = () => {



  return (
    <Box  shadow={"2xl"} blur={10} borderBottomRadius={"2xl"} fontSize={"24px"} alignItems={"center"} cursor={"pointer"} justifyContent={"space-between"} display={"grid"} position={"sticky"} bgGradient='linear(to-r,  #131235,teal, #131235)' textColor="white"  gridAutoFlow={"column"} h="24" p={"4"} fontFamily={"mono"} fontWeight={"bold"}  borderColor={"pink"}>
      <Box marginLeft={10}>
        <Image src={logo} alt='logo'/>
      </Box>

        <Box >
        Developer Hub
      </Box>
      <Box >
      <ZkLogin/>
      </Box>
    </Box>
  )
}

export default NavBar
