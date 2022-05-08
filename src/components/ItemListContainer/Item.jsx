import { Link } from 'react-router-dom'
import { Flex, VStack, Image, Text, Button } from '@chakra-ui/react'

export function Item({ prod }) {
  return (
    <Flex
      _hover={{ boxShadow: '2xl' }}
      boxShadow='xl'
      flexDirection='column'
      p={6}
      w='100%'
    >
      <Link to={`/item/${prod.id}`}>
        <Image bg={'gray.50'} p={4} src={prod.img} w={{ base: '100%' }} />
      </Link>

      <VStack py={4}>
        <Text fontSize='xl' fontWeight='700'>
          {prod.brand} {prod.model}
        </Text>
        <Text fontSize='lg'>${prod.price},00</Text>
        <Link to={`/item/${prod.id}`}>
          <Button>See details</Button>
        </Link>
      </VStack>
    </Flex>
  )
}
