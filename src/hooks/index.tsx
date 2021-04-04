import { useToast } from '@chakra-ui/react'

export const useNotification = () => {
  const toast = useToast()
  const notification = (
    title,
    description,
    status,
    duration = 9000,
    isClosable = true
  ) => {
    toast({
      title,
      description,
      status,
      duration,
      isClosable,
      position: 'top',
    })
  }

  return notification
}
