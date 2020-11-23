// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef } from 'react'
import { Stack } from '@chakra-ui/react'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import { StepViewProps } from '.'
import ContinuarButton from '../ContinuarButton'
import Textarea from '../Textarea'
import VoltarButton from '../VoltarButton'

const HS: React.FC<StepViewProps> = ({
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
    localStorage.setItem('@ambulatorio:HS', data)
    nextStep()
  }, [])

  return (
    <Form
      ref={formRef}
      onSubmit={handleSubmit}
      initialData={getInitialData('HS')}
    >
      <Stack spacing={4}>
        <Textarea
          name="hs"
          label="História social"
          placeholder="Tabagismo, etilismo, atividades físicas, alimentação..."
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

export default HS
