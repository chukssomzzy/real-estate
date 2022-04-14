import Link from 'next/link'
import {Menu, MenuButton, MenuList, MenuItem, Flex,IconButton, Box, Spacer} from "@chakra-ui/react"
import {FiKey} from 'react-icons/fi'
import {BsSearch} from "react-icons/bs"
import {FcMenu, FcHome, FcAbout} from "react-icons/fc"

const Navbar = () => {
  return (
    <section>
      <Flex p="2" borderBottom="1" borderColor="gray.100">
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
          <Link href="/" paddingLeft="2">Rentage</Link>
        </Box>
        <Spacer />
        <Box>
           <Menu>
            <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color="red.400" />
              <MenuList>
              <Link href="/" passHref>
                <MenuItem icon={<FcHome/>}>Home</MenuItem>
              </Link>
                 <Link href="/Search" passHref>
                <MenuItem icon={<BsSearch/>}>Search</MenuItem>
              </Link>
                <Link href="/Search?purpose=for-sale" passHref>
                <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
              </Link>
                <Link href="/Search?purpose=for-rent" passHref>
                <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </section>
  )
}

export default Navbar
