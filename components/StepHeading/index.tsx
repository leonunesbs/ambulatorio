// eslint-disable-next-line no-use-before-define
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  FlexProps,
  Heading,
  Icon,
  Stack
} from '@chakra-ui/react'
import { MdCheck, MdHome, MdRefresh } from 'react-icons/md'
import { useRouter } from 'next/router'

interface StepHeadingProps extends FlexProps {
  text: string
  step: number
  currentStep?: number
  setCurrentStep?: Dispatch<SetStateAction<number>>
}

const StepHeading: React.FC<StepHeadingProps> = ({
  text,
  step,
  currentStep,
  setCurrentStep,
  ...rest
}) => {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef()

  const [finalizerEnabled, setFinalizerEnabled] = useState(false)

  const handleRestart = () => {
    localStorage.clear()
    router.reload()
  }
  const getJSONFromLocalStorage = useCallback(
    (key: string) => JSON.parse(localStorage.getItem(`@ambulatorio:${key}`)),
    []
  )
  useEffect(() => {
    if (
      getJSONFromLocalStorage('ID') &&
      getJSONFromLocalStorage('QP') &&
      getJSONFromLocalStorage('HDA') &&
      getJSONFromLocalStorage('HF') &&
      getJSONFromLocalStorage('HS')
    ) {
      setFinalizerEnabled(true)
    }
  }, [currentStep])
  return (
    <Flex align="flex-end" justify="space-between" {...rest}>
      <Stack direction="row" align="center">
        <Flex
          bg="blue.500"
          w="35px"
          h="35px"
          align="center"
          justify="center"
          borderRadius="20px"
          color="gray.100"
        >
          {step}
        </Flex>
        <Heading as="h4" size="sm" color="blue.500">
          {text}
        </Heading>
      </Stack>
      <Stack direction="row">
        <Button p={0} onClick={() => setCurrentStep(1)}>
          <Icon cursor="pointer" as={MdHome} color="blue.500" w={6} h={6} />
        </Button>
        <Button p={0} onClick={() => setIsOpen(true)}>
          <Icon cursor="pointer" as={MdRefresh} color="blue.500" w={6} h={6} />
        </Button>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent borderRadius="md">
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Reiniciar Consulta
              </AlertDialogHeader>

              <AlertDialogBody>
                Tem certeza? Todos os dados preenchidos serão perdidos.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} borderRadius="sm" onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  borderRadius="sm"
                  colorScheme="blue"
                  onClick={() => {
                    handleRestart()
                    onClose()
                  }}
                  ml={3}
                >
                  Reiniciar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        <Button
          p={0}
          onClick={() => setCurrentStep(7)}
          isDisabled={!finalizerEnabled}
        >
          <Icon cursor="pointer" as={MdCheck} color="blue.500" w={6} h={6} />
        </Button>
      </Stack>
    </Flex>
  )
}

export default StepHeading
