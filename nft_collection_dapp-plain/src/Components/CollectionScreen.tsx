// React Imports
import React from 'react'
import CollectionItem from './CollectionItem'
// Style Imports
import {Box ,Grid} from '@chakra-ui/react'
import Spinner from '../Utils/Loader'


const CollectionScreen = () => {

  // Implement Loading Logic 
const isLoading = true

return (
    <Box margin={30} >
      {
        isLoading ? 
        (
          <Grid justifyItems="center" mt="20%">
        <Spinner />
       </Grid> 
        ) :

      <CollectionItem/>
      }
    </Box>
  )
}

export default CollectionScreen
