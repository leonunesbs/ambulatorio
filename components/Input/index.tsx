// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef } from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  SelectProps as ChakraSelectProps,
  FormHelperText
} from '@chakra-ui/react'
import { useField } from '@unform/core'

interface Props {
  name: string
  label?: string
  helperText?: string
}

type InputProps = ChakraInputProps & Props

const Input: React.FC<InputProps> = ({ name, label, helperText, ...rest }) => {
  const inputRef = useRef<HTMLInputElement & HTMLSelectElement>(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current
    })
  }, [fieldName, registerField])

  return (
    <>
      <FormControl id={fieldName}>
        <FormLabel
          color="blue.500"
          fontWeight="normal"
          fontSize="md"
          lineHeight={0.8}
        >
          {label}
        </FormLabel>
        <ChakraInput
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          bg="gray.100"
          borderRadius="sm"
          {...rest}
        />
        {helperText && (
          <FormHelperText fontSize="sm" color="gray.100" fontWeight="light">
            {helperText}
          </FormHelperText>
        )}
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    </>
  )
}

export default Input
