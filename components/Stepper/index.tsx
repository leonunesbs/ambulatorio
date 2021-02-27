// eslint-disable-next-line no-use-before-define
import React, { Dispatch, SetStateAction } from 'react'
import { Divider, Flex, FlexProps, Text } from '@chakra-ui/react'
import StepNode from './StepNode'

export interface StepperProps extends FlexProps {
  text?: string
  step?: number
  currentStep?: number
  setCurrentStep?: Dispatch<SetStateAction<number>>
  sigla?: string
}

const Stepper: React.FC<StepperProps> = ({
  text,
  sigla,
  step,
  currentStep,
  setCurrentStep
}) => {
  return (
    <Flex align="center" justify="space-between">
      <StepNode
        hidden
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        step={1}
        sigla="ID"
      />
      <StepNode
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        step={2}
        sigla="QP"
      />
      <StepNode
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        step={3}
        sigla="HDA"
      />
      <StepNode
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        step={4}
        sigla="HPP"
      />
      <StepNode
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        step={5}
        sigla="HF"
      />
      <StepNode
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        step={6}
        sigla="HS"
      />
      <StepNode
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        step={7}
        sigla="EF"
      />
    </Flex>
  )
}

export default Stepper
