// React Imports
import NavBar from './NavBar'
import CollectionScreen from './CollectionScreen'
import MintScreen from './MintScreen'
import React, { useEffect, useState } from 'react'


// zk Login imports
import { generateNonce, generateRandomness, jwtToAddress } from '@mysten/zklogin';
import jwt_decode from 'jwt-decode';
// Style Imports
import { Box, Text } from '@chakra-ui/react'
import { SuiClient } from '@mysten/sui.js/client';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';

interface JwtPayload {
  iss?: string;  
  sub?: string;  //Subject ID
  aud?: string[] | string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
}

const ZkLogin = () => {
    const [zkLoginUrl, setZkLoginUrl] = useState("")
const [userSalt, setUserSalt] = useState("")
const [jwtToken, setjwtToken] = useState("")
const [loggedIn, setLoggedIn] = useState(true) 
const [suiAddress, setSuiAddress] = useState("") 
  const [decoded, setDecoded] = useState()
  const [nonce, setNonce] = useState("")
// zk Login Test
  const zkLogin = async() => {

    const FULLNODE_URL = 'https://fullnode.devnet.sui.io'; // replace with the RPC URL you want to use
  const suiClient = new SuiClient({ url: FULLNODE_URL });
  const { epoch, epochDurationMs, epochStartTimestampMs } = await suiClient.getLatestSuiSystemState();
  const maxEpoch = Number(epoch) + 2; // this means the ephemeral key will be active for 2 epochs from now.
  const ephemeralKeyPair = new Ed25519Keypair();
  const randomness = generateRandomness();
  const testNonce = generateNonce(ephemeralKeyPair.getPublicKey(), maxEpoch, randomness);
  setNonce(testNonce)
  const REDIRECT_URI = 'http://localhost:5173/';
    const params = new URLSearchParams({
       // See below for how to configure client ID and redirect URL
       client_id: "373117764115-hgbv3uuvr7vu76ic1c4g7a73hsjlio48.apps.googleusercontent.com",
       redirect_uri: REDIRECT_URI,
       response_type: 'id_token',
       scope: 'openid',
       // See below for details about generation of the nonce
       nonce: nonce,
    });
    
    const loginURL = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
    setZkLoginUrl(loginURL) 
  }
  useEffect(() => {
    zkLogin()
  }, [])

  // decode Jwt Token
    useEffect(() => {
      const urlFragment = window.location.hash;

      // Parse the URL fragment to extract the id_token parameter
      const tokenMatch = urlFragment.match(/id_token=([^&]+)/);
      
      if (tokenMatch && tokenMatch[1]) {
        // The JWT token is in tokenMatch[1]
        const token = tokenMatch[1];
      
        // Now you can use jwtToken for further processing
        setjwtToken(token)
      } else {
        console.error("JWT Token not found in URL");
      }
    }, [])


  // get user salt

  const getUserSalt = () => {
//     let body = JSON.stringify({ token: id_token });
//     fetch('https://salt.api.mystenlabs.com/get_salt', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: body
// })
// .then(response => response.json()) // Parse the response as JSON
// .then(data => {
//   setUserSalt(data)
//   console.log(data);
// })
// .catch(error => {
//   // Handle any errors
//   console.error(error);
// });
let user_salt; // get the user salt from local storage if it exists
  user_salt = prompt("Please enter your user salt. This is a secret value that you should not share with anyone. You can use any string you want, such as your favorite word or phrase.");
  if (user_salt) { // if the user entered a valid string, store it in local storage
    localStorage.setItem("user_salt", user_salt); // store the user salt in local storage
    setUserSalt(user_salt)
  } else { // if the user did not enter a valid string, show an error message and exit
    alert("Invalid user salt. Please try again.");
    return;
  }

  }
  // const zkUserAddress = jwtToAddress(id_token, salt)
  // console.warn(zkUserAddress)



  const openNewWindow = () => {
    window.open(zkLoginUrl, "_blank");
    setLoggedIn(true)
  };

  // Jwt to Sui Address ========================================================== solve the error for jwtToAddress
  const getSuiAddress = () => {
    console.log("handling to get sui address")
    // console.log(localStorage.getItem("user_salt"))
    console.log(jwtToken)
    const decodedJwt= jwt_decode(jwtToken)
    console.log("TYPE==================" )
    console.log(typeof(decodedJwt) )
    let localUserSalt = localStorage.getItem("user_salt")
    if (jwtToken && localUserSalt) {
      console.log("getting the sui address")
      try {
        // ts-ignore
        const suiAddress2 = jwtToAddress(jwtToken, "testSaltAnnneneselamlar")
        
        console.log(suiAddress2)
      } catch (error) {
        console.warn(error)
      }
      
    }
  }
  return (
    <Box justifyContent="center" display="grid">
      <Text fontSize="2xl" color="white" cursor="pointer" onClick={openNewWindow}>
    zkLogin Test
  </Text>
  <Text fontSize="2xl" color="white" cursor="pointer" onClick={getUserSalt}>
    Get User Salt
  </Text>
  <Text fontSize="2xl" color="white" cursor="pointer" onClick={getSuiAddress}>
    Get Sui Address
  </Text>

      </Box>
  )
}

export default ZkLogin
