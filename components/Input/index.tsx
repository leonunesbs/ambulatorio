// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef, useState } from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  SelectProps as ChakraSelectProps,
  Select,
  FormHelperText
} from '@chakra-ui/react'
import { useField } from '@unform/core'

interface Props {
  name: string
  label?: string
  helperText?: string
  customType?: string
  options?: string[]
}

type InputProps = ChakraInputProps & ChakraSelectProps & Props

const Input: React.FC<InputProps> = ({
  name,
  label,
  customType,
  options,
  helperText,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement & HTMLSelectElement>(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [inputToRender, setInputToRender] = useState(null)

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current
    })
  }, [fieldName, registerField])

  const inputTypes = [
    {
      type: 'default',
      input: (
        <ChakraInput
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          bg="gray.100"
          borderRadius="sm"
          {...rest}
        />
      )
    },
    {
      type: 'select',
      input: (
        <Select
          ref={inputRef}
          id={fieldName}
          defaultValue={defaultValue}
          bg="gray.100"
          borderRadius="sm"
          placeholder={!options && 'no options'}
          {...rest}
        >
          {options &&
            options.map(option => <option key={option}>{option}</option>)}
        </Select>
      )
    }
  ]

  useEffect(() => {
    for (const t in inputTypes) {
      if (customType) {
        if (customType === inputTypes[t].type) {
          setInputToRender(inputTypes[t])
        }
      } else {
        setInputToRender(inputTypes[0])
      }
    }
  }, [])

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
        {inputToRender?.input}
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
