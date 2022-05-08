import { Flex, VStack, Text } from '@chakra-ui/react'

import { FooterSections } from './FooterSections.jsx'

export function Footer() {
  return (
    <Flex
      alignItems='center'
      bg='gray.50'
      flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
      justifyContent='space-around'
    >
      <VStack justifyContent='flex-start' p={6} w='50%'>
        <Text fontSize='2xl' fontWeight='500'>
          Ole Shopping
        </Text>

        <Text>© 2022 José Olemar</Text>
      </VStack>
      <FooterSections />
    </Flex>
  )
}
