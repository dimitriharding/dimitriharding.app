import React from 'react'
import { Box, Stack, Text, Icon } from '@chakra-ui/react'
import { GiStarsStack } from 'react-icons/gi'
import { useRouter } from 'next/router'

interface MenuSectionProps {
  children: React.ReactChild | React.ReactChild[]
  title?: string
}

const MenuSection = ({ children, title }: MenuSectionProps) => (
  <Stack spacing={2} direction="column" pb={6}>
    {title && (
      <Text
        paddingInlineStart={3}
        letterSpacing="wide"
        textTransform="uppercase"
        fontWeight="semibold"
        fontSize="xs"
        color="gray.400"
      >
        {title}
      </Text>
    )}
    {children}
  </Stack>
)

interface MenuItemProps {
  icon?: any
  label: string
  children?: React.ReactChild
  link: string
}
const MenuItem = ({ icon, label, children, link }: MenuItemProps) => {
  const router = useRouter()

  const handleClick = (link) => {
    router.push(link)
  }
  return (
    <Box
      _hover={{
        color: 'white',
        background: 'blue.700',
      }}
      color="gray.400"
      marginInlineEnd="2"
      fontSize="sm"
      cursor="pointer"
      fontWeight="medium"
      transition="background 0.1s ease-out 0s"
      borderRadius="md"
      px={3}
      py={1}
      alignItems="center"
      onClick={(e) => {
        e.preventDefault()
        handleClick(link)
      }}
    >
      <Stack alignItems="center" direction="row">
        {children && children}
        {!children && <Icon as={icon}></Icon>}
        <Text color="gray.200" mt={0} marginInlineStart="0.5">
          {label}
        </Text>
      </Stack>
    </Box>
  )
}

const SideMenu = () => {
  return (
    <Box overflowY="auto" maxH="full" minH="px" h="80vh" pt={5} pb={6}>
      <MenuSection>
        <MenuItem link="#home" label={'Home'} icon={GiStarsStack} />
      </MenuSection>
    </Box>
  )
}

export default SideMenu
