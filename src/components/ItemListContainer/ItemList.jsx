import { Grid } from '@chakra-ui/react'

import { Item } from './Item.jsx'

export function ItemList({ products }) {
  return (
    <Grid
      display={{ base: 'flex', md: 'grid', lg: 'grid' }}
      flexDirection={{ base: 'column' }}
      gap={10}
      templateColumns={{ md: 'repeat(2,1fr)', lg: 'repeat(3, 1fr)' }}
    >
      {products.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </Grid>
  )
}
