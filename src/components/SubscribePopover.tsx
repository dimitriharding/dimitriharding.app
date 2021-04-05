import React, { useState } from 'react'
import {
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
} from '@chakra-ui/react'
import FocusLock from 'react-focus-lock'
import { createSubscription } from '../util/api'
import { useNotification } from '../hooks'
import Form from './Form'

const SubscribePopover = ({ children }) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const notification = useNotification()
  const [loading, setLoading] = useState(false)
  const firstFieldRef = React.useRef(null)

  const handleOnSave = (values) => {
    setLoading(true)
    createSubscription(values)
      .then(() => {
        setLoading(false)
        onClose()
        notification(
          'Thanks for subscribing!',
          'You are now added to my newsletter. Please check your email for confirmation.',
          'success'
        )
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
        notification(
          'There was an error!',
          "We couldn't add you to the newsletter. Please try again later.",
          'error'
        )
      })
  }

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="bottom"
        closeOnBlur={false}
      >
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form loading={loading} onSave={handleOnSave} onCancel={onClose} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default SubscribePopover
