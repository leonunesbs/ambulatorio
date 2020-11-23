// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef } from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  SelectProps as ChakraSelectProps,
  FormHelperText,
  Select
} from '@chakra-ui/react'
import { useField } from '@unform/core'

interface Props {
  name: string
  label?: string
  helperText?: string
  options: string[]
}

type InputProps = ChakraSelectProps & Props

const SelectInput: React.FC<InputProps> = ({
  name,
  label,
  helperText,
  options,
  ...rest
}) => {
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

export default SelectInput
