import { Divider, HStack, Hide, Show, Stack, Text, VStack } from "@chakra-ui/react"
import TimeLineCounter from "./TimeLineCounter"

interface Props {
    heading: string,
    desc: string,
    count: number,
    date: string
}

const TImelineItemLeft = ({ heading, desc, count, date }: Props) => {
    return <>
        <HStack alignItems='end' spacing='50px'>
            <Show above="md">
                <VStack textAlign='right' flex='1'>
                    <Text width='100%' color='#D434FE' fontWeight='bold' fontSize={{ base: '20px', md: '24px' }}>{heading}</Text>
                    <Text width='100%'>{desc}</Text>
                </VStack>
            </Show>

            <Stack direction='row' flex='1' alignItems='end' spacing={{ base: '10px', md: '50px' }}>
                <VStack>
                    <Divider orientation="vertical" borderLeft='2px solid #D434FE' height='100px' />

                    <TimeLineCounter count={count} />
                </VStack>

                <VStack spacing='20px' alignItems='start'>
                    <Hide above="md">
                        <VStack>
                            <Text width='100%' color='#D434FE' fontWeight='bold' fontSize={{ base: '120x', md: '24px' }}>{heading}</Text>
                            <Text width='100%' fontSize={{ base: '12px', md: '16px' }}>{desc}</Text>
                        </VStack>
                    </Hide>

                    <Text color='#D434FE' fontWeight='bold' fontSize={{ base: '12px', md: '24px' }}>{date}</Text>
                </VStack>
            </Stack>
        </HStack>
    </>
}

export default TImelineItemLeft