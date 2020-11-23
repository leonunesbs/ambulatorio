// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef } from 'react'
import { Stack } from '@chakra-ui/react'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import { StepViewProps } from '.'
import Textarea from '../Textarea'
import ContinuarButton from '../ContinuarButton'
import VoltarButton from '../VoltarButton'

const HF: React.FC<StepViewProps> = ({
  currentStep,
  prevStep,
  nextStep,
  getInitialData,
  focusContinueButtonOnBlur
}) => {
  const formRef = useRef<FormHandles>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleSubmit: SubmitHandler<FormData> = useCallback(() => {
    const data = JSON.stringify(formRef.current.getData())
    localStorage.setItem('@ambulatorio:HF', data)
    nextStep()
  }, [])

  return (
    <Form
      ref={formRef}
      onSubmit={handleSubmit}
      initialData={getInitialData('HF')}
    >
      <Stack spacing={4}>
        <Textarea
          name="hf"
          label="Histórico familiar"
          placeholder="Doenças crônicas, neoplasias, mortes súbitas..."
          minH="180px"
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

export default HF
