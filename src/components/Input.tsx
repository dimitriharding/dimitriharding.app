import React from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

const TextInput = React.forwardRef((props, ref) => {
  const { label, id } = props
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input ref={ref} id={id} {...props} />
    </FormControl>
  )
})

TextInput.displayName = 'TextInput'

export default TextInput
