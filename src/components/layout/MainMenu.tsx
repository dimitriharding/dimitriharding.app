import React from 'react'
import {
  Flex,
  Icon,
  Switch,
  useColorMode,
  IconButton,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from '@chakra-ui/react'
import { BsDot } from 'react-icons/bs'
import Link from 'next/link'
import { FaSun, FaMoon } from 'react-icons/fa'

const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Flex
      alignItems="center"
      py={4}
      px={10}
      w="full"
      justifyContent="space-between"
    >
      <Flex alignItems="center" minH="8">
        <Breadcrumb
          fontSize="lg"
          separator={<Icon as={BsDot} color="gray.500" />}
          spacing="8px"
          color={mode('gray.800', 'gray.100')}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/docs">
              Docs
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/about">
              About
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Box d="flex" alignItems="center">
        {/* <SearchBox /> */}
        <IconButton
          aria-label="Color mode switch"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          color="gray.300"
          ml={2}
          background="none"
          _hover={{
            background: 'none',
          }}
        />
      </Box>
    </Flex>
  )
}

export default Header
