// eslint-disable-next-line no-use-before-define
import React, { forwardRef } from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const ContinuarButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = ({ ...rest }, ref) => {
  return (
    <Button
      ref={ref}
      rightIcon={<MdKeyboardArrowRight />}
      variant="solid"
      bg="blue.500"
      color="gray.100"
      fontWeight="normal"
      borderRadius="sm"
      _hover={{ bg: 'blue.400', color: 'blue.500' }}
      type="submit"
      {...rest}
    >
      Continuar
    </Button>
  )
}

export default forwardRef(ContinuarButton)
