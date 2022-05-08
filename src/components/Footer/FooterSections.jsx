import { Link } from 'react-router-dom'
import { Flex, Stack, Text, UnorderedList, ListItem } from '@chakra-ui/react'

export function FooterSections() {
  return (
    <Flex py={6} w='50%'>
      <Flex alignItems='flex-start' justifyContent='space-evenly' w='full'>
        <Stack flex='1' pt={6}>
          <Text fontSize='2xl' fontWeight='500'>
            About
          </Text>
          <UnorderedList m={0} pt={2} spacing={2} styleType='none'>
            <Link to='/provider'>
              <ListItem>Provider</ListItem>
            </Link>
            <ListItem>History</ListItem>
            <ListItem>Terms of use</ListItem>
          </UnorderedList>
        </Stack>

        <Stack flex='1' pt={6}>
          <Text fontSize='2xl' fontWeight='500'>
            Social
          </Text>
          <UnorderedList m={0} pt={2} spacing={2} styleType='none'>
            <ListItem>Instagram</ListItem>
            <ListItem>Twitter</ListItem>
          </UnorderedList>
        </Stack>

        <Stack flex='1' pt={6}>
          <Text fontSize='2xl' fontWeight='500'>
            More
          </Text>
          <UnorderedList m={0} pt={2} spacing={2} styleType='none'>
            <ListItem>Work on Ole-Shopping</ListItem>
            <ListItem>Others</ListItem>
          </UnorderedList>
        </Stack>
      </Flex>
    </Flex>
  )
}
