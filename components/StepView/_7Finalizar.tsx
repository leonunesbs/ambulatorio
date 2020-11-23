// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Flex, Stack, Text } from '@chakra-ui/react'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import { FinalData, StepViewProps } from '.'
import ContinuarButton from '../ContinuarButton'
import Textarea from '../Textarea'
import VoltarButton from '../VoltarButton'
import { useReactToPrint } from 'react-to-print'
import PrintComponent from '../PrintComponent'

const Finalizar: React.FC<StepViewProps> = ({
  currentStep,
  setCurrentStep,
  prevStep,
  nextStep,
  getInitialData,
  focusContinueButtonOnBlur
}) => {
  const formRef = useRef<FormHandles>(null)
  const printRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const getJSONFromLocalStorage = useCallback(
    (key: string) => JSON.parse(localStorage.getItem(`@ambulatorio:${key}`)),
    []
  )
  const [finalData, setFinalData] = useState<FinalData>({
    ID: getJSONFromLocalStorage('ID'),
    QP: getJSONFromLocalStorage('QP'),
    HDA: getJSONFromLocalStorage('HDA'),
    HPP: getJSONFromLocalStorage('HPP')
  })

  const handlePrint = useReactToPrint({
    content: () => printRef.current
  })

  return (
    <>
      <PrintComponent ref={printRef} finalData={finalData} />
      <Button onClick={handlePrint}>Imprimir</Button>
      <Button onClick={prevStep}>Voltar</Button>
    </>
  )
}

export default Finalizar
