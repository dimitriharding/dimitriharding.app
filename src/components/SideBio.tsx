import React from 'react'
import {
  Avatar,
  Box,
  Stack,
  Text,
  Button,
  useColorModeValue,
  Heading,
  Wrap,
} from '@chakra-ui/react'
import Tag from './Tag'
import SubscribePopover from './SubscribePopover'

const SideBio = () => {
  const handleSubscribe = () => {}

  return (
    <Box
      p="3"
      rounded="xl"
      transition="background 0.1s ease 0s"
      fontSize="sm"
      lineHeight="tall"
    >
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
      >
        <Avatar
          size={'lg'}
          src={'https://ca.slack-edge.com/T0CA1SGCU-U0CA8MY8N-53b022d8447e-512'}
          alt={'Dimitri Harding'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 3,
            h: 3,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 2,
          }}
        />
        <Heading
          color={useColorModeValue('gray.800', 'gray.100')}
          fontSize={'2xl'}
          fontFamily={'body'}
        >
          Dimitri Harding
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @irtimid_harding
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          Jamaican who loves to create and innovate.
        </Text>

        <Wrap align={'center'} mt={5} justify={'center'}>
          <Tag>#react</Tag>
          <Tag>#photography</Tag>
          <Tag>#testing</Tag>
          <Tag>#innovation</Tag>
        </Wrap>

        <Stack mt={5} direction={'row'} spacing={4}>
          <SubscribePopover>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
            >
              Subscribe
            </Button>
          </SubscribePopover>
          <Button
            as="a"
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
            href="https://twitter.com/irtimid_harding"
            target="_blank"
          >
            Follow
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default SideBio
