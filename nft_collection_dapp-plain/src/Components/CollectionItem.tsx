// React Imports
import React from 'react'

// Style Imports
import { Grid, Text } from '@chakra-ui/react'
import { useMoveCalls } from './Move Calls/MoveCalls'
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client'

const CollectionItem = () => {
 const {getCards, handleCreateDeveloperCard, updateCardDescritonFunction, deactivateCard, devhub} = useMoveCalls()
 const client = new SuiClient({url: getFullnodeUrl('devnet')})
 const obj = client?.getObject({
  id: "0x046aa8eb2e7e2d26ea876634e2bf1c0cfa2c9908d0ee14309c62e949656f8adf",
  options:{showContent: true}
 }).then(response => {
  console.log(response.data?.content.fields.cards.fields)
 });

// const obj2 = client?.getObject({
// 	id: '0x046aa8eb2e7e2d26ea876634e2bf1c0cfa2c9908d0ee14309c62e949656f8adf',
// }).then(response => {
//   console.warn(response)
// })

// const arda = async() => {
//   await getCards(2)
// }
// const tolga = arda()
// console.log(obj)
//  console.log(obj)

    return (
        <Grid fontFamily="fantasy"  justifyItems="center" templateColumns='repeat(3, 1fr)' alignItems="center" gap={10} p={4}>
      <Text onClick={() => getCards(2)} >TEST</Text>
    </Grid>
  )
}

export default CollectionItem