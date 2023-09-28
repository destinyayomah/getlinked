import { Divider, HStack, Hide, Show, Stack, Text, VStack } from "@chakra-ui/react"
import TimeLineCounter from "./TimeLineCounter"

interface Props {
    heading: string,
    desc: string,
    count: number,
    date: string
}

const TImelineItemRight = ({ heading, desc, count, date }: Props) => {
    return <>
        <Show above="md">
            <HStack alignItems='end' spacing='50px'>
                <Text color='#D434FE' flex='3' textAlign='right' fontWeight='bold' fontSize={{ base: '14px', md: '24px' }}>{date}</Text>

                <VStack flex='1'>
                    <Divider orientation="vertical" borderLeft='2px solid #D434FE' height='100px' />

                    <TimeLineCounter count={count} />
                </VStack>

                <VStack textAlign='left' flex='3'>
                    <Text width='100%' color='#D434FE' fontWeight='bold' fontSize={{ base: '20px', md: '24px' }}>{heading}</Text>
                    <Text width='100%' fontSize={{ base: '14px', md: '14px' }}>{desc}</Text>
                </VStack>
            </HStack>
        </Show>

        <Hide above="md">
            <Stack direction='row' flex='1' alignItems='end' justifyContent='start' spacing={{ base: '10px', md: '50px' }}>
                <VStack>
                    <Divider orientation="vertical" borderLeft='2px solid #D434FE' height='100px' />

                    <TimeLineCounter count={count} />
                </VStack>

                <VStack spacing='20px' alignItems='start'>
                    <VStack>
                        <Text width='100%' color='#D434FE' fontWeight='bold' fontSize={{ base: '12px' }}>{heading}</Text>
                        <Text width='100%' fontSize={{ base: '12px', md: '16px' }}>{desc}</Text>
                    </VStack>

                    <Text color='#D434FE' fontWeight='bold' fontSize={{ base: '12px' }}>{date}</Text>
                </VStack>
            </Stack>
        </Hide>
    </>
}

export default TImelineItemRight