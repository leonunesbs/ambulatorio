// eslint-disable-next-line no-use-before-define
import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react'
import { Flex, SlideFade, useDisclosure } from '@chakra-ui/react'
import StepHeading from '../StepHeading'
import Identificação from './_1ID'
import QueixaPrincipal from './_2QP'
import HDA from './_3HDA'
import HPP from './_4HPP'
import HF from './_5HF'
import HS from './_6HS'
import Finalizar from './_7Finalizar'

export interface FinalData {
  ID?: {
    nome: string
    dataDeNascimento: string
    sexo: string
    naturalidade: string
    procedência: string
    cor: string
    ocupação: string
  }
  QP?: {
    qp: string
  }
  HDA?: {
    hda: string
  }
  HPP?: {
    hpp: string
  }
  HF?: {
    hf: string
  }
  HS?: {
    hs: string
  }
}

export interface StepViewProps {
  currentStep?: number
  setCurrentStep?: Dispatch<SetStateAction<number>>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getInitialData?: (stepTitle: string) => any
  focusContinueButtonOnBlur?: (
    btnRef: MutableRefObject<HTMLButtonElement>
  ) => void
  nextStep?: () => void
  prevStep?: () => void
}

interface ViewProps {
  step: number
  title: string
  fullTitle: string
  inputGroup: JSX.Element | null
}

const StepView: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [componentToRender, setComponentToRender] = useState<ViewProps>(null)
  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = useCallback(() => {
    setCurrentStep(currentStep + 1)
  }, [currentStep])
  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }, [currentStep])

  const getInitialData = useCallback(
    (stepTitle: string) =>
      JSON.parse(localStorage.getItem(`@ambulatorio:${stepTitle}`)),
    []
  )

  const focusContinueButtonOnBlur = useCallback(btnRef => {
    btnRef.current.focus()
  }, [])

  const steps = [
    {
      step: 1,
      title: 'ID',
      fullTitle: 'Identificação',
      inputGroup: (
        <Identificação
          currentStep={currentStep}
          getInitialData={getInitialData}
          focusContinueButtonOnBlur={focusContinueButtonOnBlur}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )
    },
    {
      step: 2,
      title: 'QP',
      fullTitle: 'Queixa principal',
      inputGroup: (
        <QueixaPrincipal
          currentStep={currentStep}
          getInitialData={getInitialData}
          focusContinueButtonOnBlur={focusContinueButtonOnBlur}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )
    },
    {
      step: 3,
      title: 'HDA',
      fullTitle: 'História da doença atual',
      inputGroup: (
        <HDA
          currentStep={currentStep}
          getInitialData={getInitialData}
          focusContinueButtonOnBlur={focusContinueButtonOnBlur}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )
    },
    {
      step: 4,
      title: 'HPP',
      fullTitle: 'História patológica pregressa',
      inputGroup: (
        <HPP
          currentStep={currentStep}
          getInitialData={getInitialData}
          focusContinueButtonOnBlur={focusContinueButtonOnBlur}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )
    },
    {
      step: 5,
      title: 'HF',
      fullTitle: 'História familiar',
      inputGroup: (
        <HF
          currentStep={currentStep}
          getInitialData={getInitialData}
          focusContinueButtonOnBlur={focusContinueButtonOnBlur}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )
    },
    {
      step: 6,
      title: 'HS',
      fullTitle: 'História social',
      inputGroup: (
        <HS
          currentStep={currentStep}
          getInitialData={getInitialData}
          focusContinueButtonOnBlur={focusContinueButtonOnBlur}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )
    },
    // {
    //   step: 7,
    //   title: 'HD',
    //   fullTitle: 'Hipótese diagnóstica',
    //   inputGroup: (
    //     <HS
    //       currentStep={currentStep}
    //       getInitialData={getInitialData}
    //       focusContinueButtonOnBlur={focusContinueButtonOnBlur}
    //       nextStep={nextStep}
    //       prevStep={prevStep}
    //     />
    //   )
    // },
    // {
    //   step: 8,
    //   title: 'CD',
    //   fullTitle: 'Conduta',
    //   inputGroup: (
    //     <HS
    //       currentStep={currentStep}
    //       focusContinueButtonOnBlur={focusContinueButtonOnBlur}
    //       getInitialData={getInitialData}
    //       nextStep={nextStep}
    //       prevStep={prevStep}
    //     />
    //   )
    // }
    {
      step: 7,
      title: 'FN',
      fullTitle: 'Finalizar',
      inputGroup: (
        <Finalizar
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          getInitialData={getInitialData}
          focusContinueButtonOnBlur={focusContinueButtonOnBlur}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )
    }
  ]
  useEffect(() => {
    for (const v in steps) {
      if (currentStep === steps[v].step) {
        setComponentToRender(steps[v])
      }
    }
  }, [currentStep])

  useEffect(() => {
    onClose()
    setTimeout(onOpen, 220)
  }, [currentStep])

  const getStepHeadingText = useCallback(() => {
    return componentToRender?.fullTitle
  }, [componentToRender])

  const getStepHeadingStep = useCallback(() => {
    return componentToRender?.step
  }, [componentToRender])

  return (
    <SlideFade in={isOpen} offsetY={40}>
      <StepHeading
        text={getStepHeadingText()}
        step={getStepHeadingStep()}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        mb={4}
      />
      <Flex flexDir="column" bg="blue.400" mb={4} borderRadius="md" p={[4, 10]}>
        {componentToRender?.inputGroup}
      </Flex>
    </SlideFade>
  )
}

export default StepView
