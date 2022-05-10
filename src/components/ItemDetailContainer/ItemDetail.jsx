import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useToast,
  VStack
} from '@chakra-ui/react'

import { CartContext } from '../../context'

import { ItemCount } from './ItemCount.jsx'

export function ItemDetail({
  id,
  brand,
  model,
  color,
  price,
  img,
  description,
  stock
}) {
  const { addToCart, isInCart } = useContext(CartContext)
  const [count, setCount] = useState(1)
  const toastAdd = useToast()

  const handleAdd = () => {
    if (!isInCart(id)) {
      addToCart({ id, brand, model, price, img, count })
    }

    toastAdd({
      description: 'Added product',
      status: 'success',
      duration: 3000,
      position: 'bottom-right'
    })
  }

  return (
    <>
      <Flex justifyContent='center'>
        <Heading pb={6}>
          {brand} {model}
        </Heading>
      </Flex>

      <Center display={{ md: 'flex' }} py={{ base: 0, md: 10, lg: 15 }}>
        <VStack
          bg='gray.50'
          h='full'
          justifyContent='center'
          p={10}
          spacing={10}
          w='full'
        >
          <Image src={img} />
        </VStack>

        <VStack h='full' justifyContent='stretch' p={10} spacing={10} w='full'>
          <Text fontSize='lg' fontWeight='500'>
            ID: {id}
          </Text>

          <Text fontSize='xl' lineHeight={10}>
            {description}
          </Text>

          <HStack>
            <Text fontSize='lg'>{color}</Text>
            <Divider borderColor='black' h='20px' orientation='vertical' />
            <Text fontSize='lg' fontWeight='500'>
              ${price},00
            </Text>
            <Divider borderColor='black' h='20px' orientation='vertical' />
            <Text fontSize='lg'>Stock: {stock}</Text>
          </HStack>

          {isInCart(id) ? (
            <HStack spacing={6}>
              <Link to='/'>
                <Button>View more products</Button>
              </Link>
              <Link to='/cart'>
                <Button
                  _hover={{ bg: 'blackAlpha.900', color: 'white' }}
                  bg='blackAlpha.900'
                  color='whiteAlpha.900'
                >
                  Go to cart
                </Button>
              </Link>
            </HStack>
          ) : (
            <ItemCount
              count={count}
              handleAdd={handleAdd}
              setCount={setCount}
              stock={stock}
            />
          )}

          <VStack>
            <Text fontWeight='500'>All methods of payment</Text>
            <Text fontWeight='500'>Arrives in 7 business days</Text>
          </VStack>
        </VStack>
      </Center>
    </>
  )
}
