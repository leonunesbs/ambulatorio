// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Flex, SlideFade, useDisclosure } from '@chakra-ui/react'
import StepHeading from '../StepHeading'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import Identificação from './_1Identificação'
import MotivoDaConsulta from './_2MotivoDaConsulta'

interface StepViewProps {
  inputViewIdToRender: number
}

interface ViewProps {
  step: number
  title: string
  inputGroup: JSX.Element | null
}

const StepView: React.FC<StepViewProps> = ({ inputViewIdToRender }) => {
  const formRef = useRef<FormHandles>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [componentToRender, setComponentToRender] = useState<ViewProps>(null)
  const views: ViewProps[] = [
    {
      step: 1,
      title: 'Identificação',
      inputGroup: <Identificação />
    },
    {
      step: 2,
      title: 'Motivo da consulta',
      inputGroup: <MotivoDaConsulta />
    },
    {
      step: 3,
      title: 'HDA',
      inputGroup: null
    },
    {
      step: 4,
      title: 'HPP',
      inputGroup: null
    }
  ]
  useEffect(() => {
    for (const v in views) {
      if (inputViewIdToRender === views[v].step) {
        setComponentToRender(views[v])
      }
    }
  }, [inputViewIdToRender])

  useEffect(() => {
    onClose()
    setTimeout(onOpen, 250)
  }, [inputViewIdToRender])

  const getStepHeadingText = useCallback(() => {
    return componentToRender?.title
  }, [componentToRender])

  const getStepHeadingStep = useCallback(() => {
    return componentToRender?.step
  }, [componentToRender])

  return (
    <SlideFade in={isOpen} offsetY={40}>
      <StepHeading
        text={getStepHeadingText()}
        step={getStepHeadingStep()}
        mb={4}
      />
      <Flex flexDir="column" bg="blue.400" mb={4} borderRadius="md" p={[4, 10]}>
        <Form ref={formRef} onSubmit={() => null}>
          {componentToRender?.inputGroup}
        </Form>
      </Flex>
    </SlideFade>
  )
}

export default StepView
