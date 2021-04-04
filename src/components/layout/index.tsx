import {
  Box,
  Avatar,
  chakra,
  Icon,
  ChakraProps,
  Center,
  Button,
  Image,
  Flex,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import React from 'react'
import { FaLock } from 'react-icons/fa'
import SideBio from '../SideBio'
import LeftSide from '../layout/LeftSide'
import TopHeader from '../TopHeader'

const Body = chakra(Box, { baseStyle: { display: 'flex' } })
const App = chakra(Box, { baseStyle: { display: 'flex' } })
const Header = chakra(Box, { baseStyle: { display: 'flex' } })
const MenuContainer = chakra(Box, { baseStyle: { display: 'flex' } })
const Wrapper = chakra(Box, {
  baseStyle: { display: 'flex', flexGrow: '1', overflow: 'hidden' },
})
const SideTitle = chakra(Box, {
  baseStyle: { marginBottom: '14px', color: 'var(--inactive-color);' },
})
const SideWrapper = chakra(Box, {
  baseStyle: {
    marginTop: '20px',
  },
})
const SideMenu = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    whiteSpace: 'no-wrap',
  },
})

const ContentText = chakra(Box, {
  baseStyle: {
    fontWeight: '400',
    fontSize: '14px',
    marginTop: '16px',
    lineHeight: '1.7em',
    color: '#ebecec',
    display: '-webkit-box',
    overflow: 'hidden',
    // 'webkitlineclamp': '4',
    // 'webkitboxorient': 'vertical',
    textOverflow: 'ellipsis',
    width: 'auto',
  },
})

const ContentButton = chakra(Box, {
  baseStyle: {
    backgroundColor: '#3a6df0',
    border: 'none',
    padding: '8px 26px',
    color: '#fff',
    borderRadius: '20px',
    marginTop: '16px',
    cursor: 'pointer',
    transition: '0.3s',
    whiteSpace: 'nowrap',
  },
})

const ContentWrapper = ({ children }) => (
  <chakra.div
    display="flex"
    flexDirection="column"
    color="var(--theme-color)"
    padding="20px 40px"
    height="100%"
    overflow="auto"
    backgroundColor="var(--theme-bg-color)"
  >
    {children}
  </chakra.div>
)

const ContentWrapperHeader = ({ children }) => (
  <Flex
    alignItems="center"
    w="100%"
    justifyContent="space-between"
    backgroundImage={`url("https://www.transparenttextures.com/patterns/cubes.png"),
        linear-gradient(
         to right top,
         #cf4af3,
         #e73bd7,
         #f631bc,
         #fd31a2,
         #ff3a8b,
         #ff4b78,
         #ff5e68,
         #ff705c,
         #ff8c51,
         #ffaa49,
         #ffc848,
         #ffe652
        );`}
    borderRadius="14px"
    padding="20px 40px"
  >
    {children}
  </Flex>
)

const MainContainer = ({ children }) => (
  <chakra.div display="flex" flexDirection="column" flexGrow={1}>
    {children}
  </chakra.div>
)

const Logo = () => (
  <Box
    w="15px"
    h="15px"
    backgroundColor="#f96057"
    borderRadius="50%"
    boxShadow="24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65"
    marginRight="195px"
    flexShrink={0}
    display={['none', 'none', 'block']}
  />
)

const BannerIconAndText = ({ children }) => (
  <chakra.h3
    fontWeight={500}
    fontSize="17px"
    d="flex"
    alignItems="center"
    margin="0"
  >
    <Icon viewBox="0 0 512 512" boxSize="7" marginRight="14px">
      <path
        d="M467 0H45C20.099 0 0 20.099 0 45v422c0 24.901 20.099 45 45 45h422c24.901 0 45-20.099 45-45V45c0-24.901-20.099-45-45-45z"
        fill="#d6355b"
        data-original="#ff468c"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M512 45v422c0 24.901-20.099 45-45 45H256V0h211c24.901 0 45 20.099 45 45z"
        fill="#d6355b"
        data-original="#d72878"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M467 30H45c-8.401 0-15 6.599-15 15v422c0 8.401 6.599 15 15 15h422c8.401 0 15-6.599 15-15V45c0-8.401-6.599-15-15-15z"
        fill="#2e000a"
        data-original="#700029"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M482 45v422c0 8.401-6.599 15-15 15H256V30h211c8.401 0 15 6.599 15 15z"
        fill="#2e000a"
        data-original="#4d0e06"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M181 391c-41.353 0-75-33.647-75-75 0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45c41.353 0 75 33.647 75 75s-33.647 75-75 75z"
        fill="#d6355b"
        data-original="#ff468c"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M391 361h-30c-8.276 0-15-6.724-15-15V211h45c8.291 0 15-6.709 15-15s-6.709-15-15-15h-45v-45c0-8.291-6.709-15-15-15s-15 6.709-15 15v45h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v135c0 24.814 20.186 45 45 45h30c8.291 0 15-6.709 15-15s-6.709-15-15-15z"
        fill="#d6355b"
        data-original="#d72878"
      />
    </Icon>
    {children}
  </chakra.h3>
)

const ListView = ({ items }) => (
  <chakra.ul
    d="flex"
    flexDirection="column"
    w="100%"
    h="100%"
    justifyContent="space-around"
    backgroundColor="var(--content-bg)"
    pl={0}
    m={0}
    borderRadius="14px"
    border="1px solid var(--theme-bg-color)"
    cursor="pointer"
  >
    {items.map((item, key) => (
      <chakra.li
        key={key}
        listStyle="none"
        p="10px 18px"
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        fontSize="16px"
        w="100%"
        h="100%"
        transition="0.3s"
        borderTop="1px solid var(--border-color)"
        _hover={{
          backgroundColor: 'var(--theme-bg-color)',
        }}
        _first={{
          borderRadius: '13px 13px 0 0',
          borderTop: 'none',
        }}
        _last={{
          borderRadius: '0 0 13px 13px',
        }}
      >
        {item}
        <MoreOptions />
      </chakra.li>
    ))}
  </chakra.ul>
)

const MoreOptions = () => (
  <Box
    w="5px"
    h="5px"
    backgroundColor="var(--button-inactive)"
    borderRadius="50%"
    boxShadow="7px 0 0 0 var(--button-inactive), 14px 0 0 0 var(--button-inactive)"
    m="0 12px"
  />
)

const CardView = ({ title, subText }) => (
  <WrapItem
    d="flex"
    flexDirection="column"
    w={{
      base: 'calc(33.3% - 20px)',
      sm: 'calc(96% - 20px)',
      md: 'calc(50% - 20px)',
      lg: 'calc(50% - 20px)',
    }}
    fontSize="16px"
    backgroundColor="var(--content-bg)"
    borderRadius="14px"
    border="1px solid var(--theme-bg-color)"
    p="20px"
    cursor="pointer"
    transition="0.3s ease"
    _hover={{
      transform: 'scale(1.02)',
      backgroundColor: 'var(--theme-bg-color)',
    }}
    mb="20px"
    _last={{
      marginLeft: '0',
    }}
  >
    <Flex alignItems="center">
      <Icon
        borderRadius="6px"
        mr="12px"
        flexShrink={0}
        boxSize="8"
        viewBox="0 0 512 512"
        border="1px solid #a059a9"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M480 0H32C14.368 0 0 14.368 0 32v448c0 17.664 14.368 32 32 32h448c17.664 0 32-14.336 32-32V32c0-17.632-14.336-32-32-32z"
          fill="#210027"
          data-original="#7b1fa2"
        />
        <g xmlns="http://www.w3.org/2000/svg" />
        <path
          d="M192 64h-80c-8.832 0-16 7.168-16 16v352c0 8.832 7.168 16 16 16s16-7.168 16-16V256h64c52.928 0 96-43.072 96-96s-43.072-96-96-96zm0 160h-64V96h64c35.296 0 64 28.704 64 64s-28.704 64-64 64zM400 256h-32c-18.08 0-34.592 6.24-48 16.384V272c0-8.864-7.168-16-16-16s-16 7.136-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16v-96c0-26.464 21.536-48 48-48h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
          fill="#f6e7fa"
          data-original="#e1bee7"
        />
      </Icon>
      {title}
    </Flex>
    <Box
      fontSize="14px"
      fontWeight={400}
      lineHeight="1.6em"
      mt="20px"
      borderBottom="1px solid var(--border-color)"
      pb="20px"
    >
      {subText}
    </Box>
    <Flex
      justifyContent="flex-end"
      w={['auto', '187px']}
      ml="auto"
      alignItems="center"
      mt="16px"
    >
      <Box
        as="button"
        backgroundColor="#3a6df0"
        border="none"
        p="3px 26px"
        color="#fff"
        borderRadius="20px"
        cursor="pointer"
        transition="0.3s"
        whiteSpace="nowrap"
        w="auto"
        fontFamily="sans-serif"
        fontSize="15px"
      >
        Update
      </Box>
      <MoreOptions />
    </Flex>
  </WrapItem>
)

const CardsContainer = ({ children }) => (
  <Wrap spacing="20px" alignItems="center" width="calc(99% + 20px)">
    {children}
    {/* <PopUp
        title="My title"
        isOpen={false}
        onClose={() => console.log('closing')}
      >
        Adjust your selections for advanced options as desired before continuing.
        Learn more
        <br />
        Testing
        <br />1 2
      </PopUp> */}
  </Wrap>
)

const ContentSection = ({ title, children }) => (
  <Box mb="30px" mt="30px" flexDirection="column">
    <Box color="var(--content-title-color)" mb="14px">
      {title}
    </Box>
    {children}
  </Box>
)

const Layout = ({ children }) => {
  return (
    <Body
      w="100%"
      h="100vh"
      bgImage="url(https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-dark-wwdc-2020-5120x2880-1432.jpg)"
      backgroundSize="cover"
      backgroundPosition="center"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      p={['0.8em', '0.8em', '2em']}
    >
      <App
        backgroundColor="var(--theme-bg-color)"
        maxW="1500px"
        maxH="900px"
        h="90vh"
        flexDirection="column"
        overflow="hidden"
        borderRadius="14px"
        fontSize="15px"
        fontWeight={500}
        webkitfontsmoothing="blur(20px)"
        backdropfilter="blur(20px)"
        pos="relative"
        w="100%"
      >
        <TopHeader />
        <Wrapper>
          <LeftSide>
            <SideBio />
          </LeftSide>
          <MainContainer>
            <ContentWrapper>{children}</ContentWrapper>
          </MainContainer>
        </Wrapper>
        <AppOverlay isActive={false} />
      </App>
    </Body>
  )
}

const AppOverlay = ({ isActive }) => (
  <chakra.div
    left="0"
    top="0"
    w="100%"
    h="100%"
    pos="absolute"
    pointerEvents="all"
    backgroundColor="rgba(36, 39, 59, 0.8)"
    opacity={isActive ? 1 : 0}
    visibility={isActive ? 'visible' : 'hidden'}
    transition="0.3s"
  />
)

interface ISideMenuItem {
  children: any
  icon?: any
}

const SideMenuItem = ({ children, icon }: ISideMenuItem) => (
  <chakra.button
    textDecor="none"
    color="var(--theme-color)"
    display="flex"
    alignItems="center"
    fontWeight={400}
    padding="10px"
    fontSize="14px"
    borderRadius="6px"
    transition="0.3s"
    _hover={{
      bgColor: 'var(--hover-menu-bg);',
    }}
  >
    <Center>
      <Icon
        w="16px"
        mr="8px"
        color="var(--theme-color)"
        as={icon ? icon : undefined}
      />
      {children}
    </Center>
  </chakra.button>
)

const MenuItems = ({ children, isActive }) => (
  <chakra.button
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
    {children}
  </chakra.button>
)

const SearchBar = () => (
  <Box h="40px" w="100%" maxW="400px" paddingLeft="16px" borderRadius="4px">
    <chakra.input
      bgColor="var(--search-bg)"
      border="none"
      placeholder="Basic usage"
      h="100%"
      w="100%"
      borderRadius="4px"
      fontSize="15px"
      fontWeight={500}
      padding="0 20px 0 40px"
      box-shadow="0 0 0 2px rgb(134 140 160 / 2%);"
      backgroundImage={`url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");`}
      backgroundSize="14px"
      backgroundRepeat="no-repeat"
      backgroundPosition="16px 48%;"
      _placeholder={{
        color: 'var(--inactive-color)',
      }}
    />
  </Box>
)

const HeaderProfile = ({ children }) => (
  <Box
    alignItems="center"
    padding="0 16px 0 40px"
    marginLeft="auto"
    flexShrink={0}
  >
    {children}
  </Box>
)

const WorkspaceLock = (props: ChakraProps) => (
  <Icon {...props} color="var(--theme-color)" as={FaLock} />
)

export default Layout
