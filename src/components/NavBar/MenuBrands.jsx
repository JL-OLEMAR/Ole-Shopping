import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

export function MenuBrands({ listBrands }) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoIosArrowDown />} size='md'>
        Brands
      </MenuButton>

      <MenuList>
        {listBrands.map(({ url, brand }) => (
          <Link key={brand} to={url}>
            <MenuItem>{brand}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  )
}
