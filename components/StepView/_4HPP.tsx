// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useRef } from 'react'
import { Button, Stack } from '@chakra-ui/react'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import { StepViewProps } from '.'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Textarea from '../Textarea'

const HPP: React.FC<StepViewProps> = ({
  currentStep,
  prevStep,
  nextStep,
  getInitialData,
  focusContinueButtonOnBlur
}) => {
  const formRef = useRef<FormHandles>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => formRef.current.getFieldRef('hpp').focus(), [])

  const handleSubmit: SubmitHandler<FormData> = useCallback(() => {
    const data = JSON.stringify(formRef.current.getData())
    localStorage.setItem('@ambulatorio:HPP', data)
    nextStep()
  }, [])

  return (
    <Form
      ref={formRef}
      onSubmit={handleSubmit}
      initialData={getInitialData('HPP')}
    >
      <Stack spacing={4}>
        <Textarea
          name="hpp"
          label="História patológica pregressa"
          placeholder="Comorbidades, alergias, cirurgias, internações..."
          minH="180px"
          onBlur={() => focusContinueButtonOnBlur(btnRef)}
        />
        <Stack direction="row" mt={4} justify="flex-end">
          <Button
            leftIcon={<MdKeyboardArrowLeft />}
            variant="solid"
            bg="gray.500"
            color="gray.100"
            fontWeight="normal"
            borderRadius="sm"
            _hover={{ bg: 'blue.400', color: 'blue.500' }}
            onClick={prevStep}
            isDisabled={currentStep <= 1}
          >
            Voltar
          </Button>
          <Button
            ref={btnRef}
            rightIcon={<MdKeyboardArrowRight />}
            variant="solid"
            bg="blue.500"
            color="gray.100"
            fontWeight="normal"
            borderRadius="sm"
            _hover={{ bg: 'blue.400', color: 'blue.500' }}
            type="submit"
          >
            Continuar
          </Button>
        </Stack>
      </Stack>
    </Form>
  )
}

export default HPP
