// eslint-disable-next-line no-use-before-define
import React, { useCallback, useState } from 'react'
import Head from 'next/head'
import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import StepView from '../components/StepView'

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = useCallback(() => {
    setCurrentStep(currentStep + 1)
  }, [currentStep])
  const previousStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }, [currentStep])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Flex
          bg="gray.100"
          flexDir="column"
          minH="100vh"
          justify="space-between"
          p={[4, 40]}
        >
          <Flex flexDir="column" align={['center', 'flex-start']}>
            <Heading as="h1" color="blue.500">
              Ambulatório
            </Heading>
            <Heading as="h2" color="gray.500" size="sm" fontWeight="light">
              Prontuário do paciente
            </Heading>
          </Flex>

          <Flex flexDir="column" mt="60px">
            <StepView inputViewIdToRender={currentStep} />
          </Flex>

          <Stack direction="row" alignSelf="flex-end">
            <Button
              leftIcon={<MdKeyboardArrowLeft />}
              variant="solid"
              bg="gray.500"
              color="gray.100"
              fontWeight="normal"
              borderRadius="sm"
              _hover={{ bg: 'blue.400', color: 'blue.500' }}
              onClick={previousStep}
              isDisabled={currentStep <= 1}
            >
              Voltar
            </Button>
            <Button
              rightIcon={<MdKeyboardArrowRight />}
              variant="solid"
              bg="blue.500"
              color="gray.100"
              fontWeight="normal"
              borderRadius="sm"
              _hover={{ bg: 'blue.400', color: 'blue.500' }}
              onClick={nextStep}
            >
              Continuar
            </Button>
          </Stack>
        </Flex>
      </main>
    </div>
  )
}

export default Home
