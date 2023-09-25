// React Imports
import React from 'react'

// Style Imports
import { Grid, GridItem, Image, Text } from '@chakra-ui/react'
import Loader from "../Utils/Loader"
const DUMMY_NFT_COLLECTION: any = []

const CollectionItem = () => {

// Get Your Owned NFTs and Replace DUMMY_NFT_COLLECTION with your collection  

  


    return (
        <Grid fontFamily="fantasy"  justifyItems="center" templateColumns='repeat(3, 1fr)' alignItems="center" gap={10} p={4}>
        {
        DUMMY_NFT_COLLECTION?.map((element: any, index: any) => (
        <GridItem bgImage={"https://images.pexels.com/photos/3435272/pexels-photo-3435272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} borderRadius={"3xl"} shadow={"2xl"} p={8} key={index}>
            <Grid gap={2} >
            <Image justifySelf="center" borderRadius={"md"} border={"2px"} borderColor="white" src={element.metadata.image} boxSize={200} alt='Nft img'/>
          <Text color="wheat" textAlign={"center"} fontSize="xl" fontWeight="bold" fontFamily="Croissant one">
          NTF Name  
          </Text>
          <Text fontSize="3xl" textAlign="center" color="whatsapp.100">{element.metadata.name}</Text>
            </Grid>
          
        </GridItem>))}
    </Grid>
  )
}

export default CollectionItem