// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useRef } from 'react'
import { Button, Stack } from '@chakra-ui/react'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import { StepViewProps } from '.'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Textarea from '../Textarea'

const HS: React.FC<StepViewProps> = ({
  currentStep,
  prevStep,
  nextStep,
  getInitialData,
  focusContinueButtonOnBlur
}) => {
  const formRef = useRef<FormHandles>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => formRef.current.getFieldRef('hs').focus(), [])

  const getJSONFromLocalStorage = useCallback(
    (key: string) => JSON.parse(localStorage.getItem(`@ambulatorio:${key}`)),
    []
  )

  const handleSubmit: SubmitHandler<FormData> = useCallback(() => {
    const data = JSON.stringify(formRef.current.getData())
    localStorage.setItem('@ambulatorio:HS', data)

    const finalData = {
      ID: getJSONFromLocalStorage('ID'),
      QP: getJSONFromLocalStorage('QP'),
      HDA: getJSONFromLocalStorage('HDA'),
      HPP: getJSONFromLocalStorage('HPP')
    }
    console.log(finalData)
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
            Finalizar
          </Button>
        </Stack>
      </Stack>
    </Form>
  )
}

export default HS
