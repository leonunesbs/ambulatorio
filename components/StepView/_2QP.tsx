// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef } from 'react'
import { Stack } from '@chakra-ui/react'
import Input from '../Input'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import { StepViewProps } from '.'
import ContinuarButton from '../ContinuarButton'
import VoltarButton from '../VoltarButton'

const QueixaPrincipal: React.FC<StepViewProps> = ({
  focusContinueButtonOnBlur,
  getInitialData,
  currentStep,
  prevStep,
  nextStep
}) => {
  const formRef = useRef<FormHandles>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleSubmit: SubmitHandler<FormData> = useCallback(() => {
    const data = JSON.stringify(formRef.current.getData())
    localStorage.setItem('@ambulatorio:QP', data)
    nextStep()
  }, [])

  return (
    <Form
      ref={formRef}
      onSubmit={handleSubmit}
      initialData={getInitialData('QP')}
    >
      <Stack spacing={4}>
        <Input
          name="qp"
          label="Motivo da consulta"
          onBlur={() => focusContinueButtonOnBlur(btnRef)}
          autoFocus
        />
        <Stack direction="row" mt={4} justify="flex-end">
          <VoltarButton prevStep={prevStep} currentStep={currentStep} />
          <ContinuarButton ref={btnRef} />
        </Stack>
      </Stack>
    </Form>
  )
}

export default QueixaPrincipal
