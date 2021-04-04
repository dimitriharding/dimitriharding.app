import { chakra, Icon, Stack } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'

interface MenuItemProps {
  icon?: typeof Icon
  children?: React.ReactChild
  link: string
}

const MenuItems = ({ children, link, icon }: MenuItemProps) => {
  const router = useRouter()

  const handleClick = (link) => {
    router.push(link)
  }
  const isActive = router.asPath === link
  return (
    <chakra.button
      onClick={(e) => {
        e.preventDefault()
        handleClick(link)
      }}
      py="20px"
      px="30px"
      textDecor="none"
      color={isActive ? 'var(--theme-color)' : 'var(--inactive-color)'}
      borderBottom={isActive ? '2px' : '2px solid transparent'}
      transition="0.3s"
      cursor="pointer"
      isActive={isActive ? isActive : null}
      _hover={{
        color: 'var(--theme-color)',
        borderBottom: '1px',
      }}
    >
      <Stack alignItems="center" direction="row">
        {icon && <Icon as={icon}></Icon>}
      </Stack>
      {children}
    </chakra.button>
  )
}

export default MenuItems
