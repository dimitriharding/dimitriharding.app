import React from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import Logo from './Logo'
import MenuItems from './Menu/MenuItems'
import { menuLinks } from '../constants/menu'
import Link from 'next/link'
import { Avatar } from '@chakra-ui/react'

const HeaderProfile = ({ children, ...rest }) => (
  <Box
    alignItems="center"
    padding="0 16px 0 40px"
    marginLeft="auto"
    flexShrink={0}
    {...rest}
  >
    {children}
  </Box>
)

const TopHeader = () => {
  return (
    <Box
      alignItems="center"
      flexShrink={0}
      display="flex"
      h="58px"
      w="100%"
      borderBottom="1px solid var(--border-color)"
      p={['0 16px', '0 30px']}
      whiteSpace="nowrap"
    >
      <Logo />
      <Flex alignItems="center">
        <Box display={['none', 'block', 'block']}>
          {Object.keys(menuLinks).map((menuItem) => {
            return (
              <MenuItems key={menuItem} link={menuLinks[menuItem]}>
                {menuItem}
              </MenuItems>
            )
          })}
        </Box>
        <HeaderProfile display={['block', 'block', 'none']}>
          <Avatar
            size="sm"
            flexShrink={0}
            src="https://ca.slack-edge.com/T0CA1SGCU-U0CA8MY8N-53b022d8447e-512"
            ml="22px"
            border="2px solid var(--theme-color)"
            cursor="pointer"
          />
        </HeaderProfile>
      </Flex>
    </Box>
  )
}

export default TopHeader
