import { BsPlus, BsDash } from 'react-icons/bs'
import { HStack, Text, Button, Icon } from '@chakra-ui/react'

export function ItemCount({ stock, count, setCount, handleAdd }) {
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1)
    } else if (count <= 1);
  }

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  return (
    <HStack>
      <HStack spacing={6}>
        <HStack>
          <Button
            borderColor='gray.500'
            variant='outline'
            onClick={handleDecrement}
          >
            <Icon as={BsDash} />
          </Button>

          <Text textAlign='center' w='2rem'>
            {count}
          </Text>

          <Button
            borderColor='gray.500'
            variant='outline'
            onClick={handleIncrement}
          >
            <Icon as={BsPlus} />
          </Button>
        </HStack>
        <Button onClick={handleAdd}>Add to cart</Button>
      </HStack>
    </HStack>
  )
}
