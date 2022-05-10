import { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { HStack, Image, Text, Button, Icon } from '@chakra-ui/react'

import { CartContext } from '../../context'

export function CartList() {
  const { cart, cleanItem } = useContext(CartContext)

  return cart.map((item) => (
    <HStack
      key={item.id}
      borderBottom='1px'
      borderColor='gray.300'
      justifyContent='space-around'
      w='full'
    >
      <HStack justifyContent='space-around' w='50%'>
        <Button variant='ghost' onClick={() => cleanItem(item.id)}>
          <Icon as={FaTrashAlt} color='red.500' />
        </Button>
        <Image src={item.img} w='10rem' />
        <Text>
          {item.brand} {item.model}
        </Text>
      </HStack>

      <Text textAlign='center' w='25%'>
        {item.count}
      </Text>

      <Text textAlign='center' w='25%'>
        ${item.price * item.count},00
      </Text>
    </HStack>
  ))
}
