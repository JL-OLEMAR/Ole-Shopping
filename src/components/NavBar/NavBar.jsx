import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack
} from '@chakra-ui/react'

import { MenuBrands } from './MenuBrands.jsx'
import { CartWidget } from './CartWidget.jsx'

export function NavBar() {
  const [display, setDisplay] = useState('none')

  const listBrands = [
    { url: '/category/Adidas', brand: 'Adidas' },
    { url: '/category/Nike', brand: 'Nike' },
    { url: '/category/Jordan', brand: 'Jordan' },
    { url: '/category/UA', brand: 'Under Armour' }
  ]

  return (
    <Flex bg='gray.50' p={6} w='full'>
      {/* Desktop */}
      <Flex
        display={['none', 'none', 'flex', 'flex']}
        justifyContent='space-between'
        w='full'
      >
        <Link to='/'>
          <Heading fontSize='4xl' px={6}>
            Ole Shopping
          </Heading>
        </Link>

        <HStack
          alignItems='center'
          direction={{ base: 'column', md: 'column' }}
          spacing={6}
        >
          <Link to='/'>
            <Text fontWeight='500'>Home</Text>
          </Link>
          <Link to='/provider'>
            <Text fontWeight='500'>Provider</Text>
          </Link>
          <MenuBrands listBrands={listBrands} />
          <Link to='/cart'>
            <CartWidget />
          </Link>
        </HStack>
      </Flex>

      <Flex
        display={{ base: 'flex', md: 'none', lg: 'none' }}
        justifyContent='space-between'
        w='full'
      >
        <Link to='/'>
          <Heading fontSize='2xl' px={6}>
            Ole Shopping
          </Heading>
        </Link>

        <IconButton
          icon={<GiHamburgerMenu />}
          onClick={() => setDisplay('flex')}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        bgColor='gray.50'
        display={display}
        flexDirection='column'
        h='50vh'
        left='0'
        overflowY='auto'
        position='fixed'
        top='0'
        w='100w'
        zIndex={20}
      >
        <Flex justifyContent='flex-end' p={6} w='full'>
          <IconButton
            arial-label='Open Menu'
            icon={<AiOutlineClose />}
            mr={4}
            onClick={() => setDisplay('none')}
          />
        </Flex>

        <VStack alignItems='center' spacing={10}>
          <Link to='/'>
            <Text fontWeight='500'>Home</Text>
          </Link>
          <Link to='/provider'>
            <Text fontWeight='500'>Provider</Text>
          </Link>
          <MenuBrands listBrands={listBrands} />
          <Link to='/cart'>
            <CartWidget />
          </Link>
        </VStack>
      </Flex>
    </Flex>
  )
}
