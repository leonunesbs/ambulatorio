// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef } from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  TextareaProps as ChakraTextareaProps,
  FormHelperText,
  Textarea as ChakraTextarea
} from '@chakra-ui/react'
import { useField } from '@unform/core'

interface Props {
  name: string
  label?: string
  helperText?: string
}

type TextareaProps = ChakraTextareaProps & Props

const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  helperText,
  ...rest
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
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
        <ChakraTextarea
          ref={inputRef}
          id={fieldName}
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

export default Textarea
