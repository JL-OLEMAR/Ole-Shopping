import { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Flex, Text, Icon } from '@chakra-ui/react'

import { CartContext } from '../../context'

export function CartWidget() {
  const { cart, countCart } = useContext(CartContext)

  if (cart.length === 0) return

  return (
    <Flex>
      <Icon as={FaShoppingCart} color='red.500' h={6} w={6} />
      <Text px={2}>{countCart()}</Text>
    </Flex>
  )
}
