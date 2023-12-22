// React Imports
import React from 'react'
import MintItem from './MintItem'
// Style Imports
import {Box, Button, Grid, Text} from '@chakra-ui/react'
import Spinner from '../Utils/Loader'

const MintScreen = () => {

const isLoading = true
  return (
    <Box margin={30}>
      {!isLoading ?
    <MintItem />
       : <Grid justifyItems="center" mt="20%">
        <Spinner />
       </Grid> 
      
    }
    </Box>
  )
}

export default MintScreen
