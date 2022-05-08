import { useState, useContext } from 'react'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import {
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack
} from '@chakra-ui/react'

import { db } from '../../firebase'
import { CartContext } from '../../context'

import { CheckoutSuccess } from './CheckoutSuccess.jsx'
import { CheckoutFailed } from './CheckoutFailed.jsx'

export function Checkout() {
  const { cart, totalPriceCart, cleanCart } = useContext(CartContext)
  const [orderId, setOrderId] = useState(null)
  const [values, setValues] = useState({
    name: '',
    email: '',
    tel: ''
  })

  const sendOrder = () => {
    const order = {
      buyer: values,
      items: cart,
      date: Timestamp.fromDate(new Date()),
      total: totalPriceCart()
    }

    const ordersCollection = collection(db, 'orders')

    addDoc(ordersCollection, order).then((doc) => {
      setOrderId(doc.id)
      cleanCart()
    })
  }

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendOrder()
  }

  if (orderId) return <CheckoutSuccess orderId={orderId} />
  if (cart.length === 0) return <CheckoutFailed />

  return (
    <Container h={{ lg: '100vh' }} maxW='container.xl' py={10}>
      <Flex justifyContent='center'>
        <Heading py={6}>Checkout</Heading>
      </Flex>

      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              name='name'
              placeholder='First name'
              type='text'
              value={values.name}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              name='email'
              placeholder='Email address'
              type='email'
              value={values.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Phone number</FormLabel>
            <Input
              name='tel'
              placeholder='Phone number'
              type='tel'
              value={values.tel}
              onChange={handleInputChange}
            />
          </FormControl>
          <Checkbox required lineHeight={8}>
            I understand that once the purchase is completed, I have a 30-day
            return period in case of regret of purchase or manufacturing
            defects.
          </Checkbox>
          <Button type='submit'>Submit</Button>
        </VStack>
      </form>
    </Container>
  )
}
