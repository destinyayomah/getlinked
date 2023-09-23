import { Box, Divider, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'
import faq from '../assets/faq.png'
import { primaryColor } from "../App"


const Faq = () => {
    return <>
        <Stack direction={{ base: 'column', md: 'row' }} bg={primaryColor} color='white' padding='50px 10% 50px 10%'>
            <VStack width='100%' alignItems='start' justifyContent='center' spacing='30px' textAlign={{ base: 'center', md: 'left' }}>
                <Box width='100%' fontSize={{ base: '20px', md: '32px' }} fontWeight='900'>
                    <Text>Frequently Ask</Text>
                    <Text color='#D434FE'>Question</Text>
                </Box>

                <Text maxWidth='340px' fontSize={{ base: '12px', md: '14px' }} fontWeight='300'>We got answers to the questions that you might want to ask about <Text display='inline' fontWeight='600'>getlinked Hackathon 1.0</Text> </Text>

                <VStack fontSize={{ base: '12px', md: '14px' }}>
                    <HStack width='100%' justifyContent='space-between' borderBottom='1px solid #D434FE' padding="20px 0" spacing='30px'>
                        <Text>Can I work on a project I started before the hackathon?</Text>
                        <AddIcon color='#D434FE' fontSize='12px' />
                    </HStack>

                    <HStack width='100%' justifyContent='space-between' borderBottom='1px solid #D434FE' padding="20px 0" spacing='30px'>
                        <Text>What happens if I need help during the hackathon?</Text>
                        <AddIcon color='#D434FE' fontSize='12px' />
                    </HStack>

                    <HStack width='100%' justifyContent='space-between' borderBottom='1px solid #D434FE' padding="20px 0" spacing='30px'>
                        <Text>What happens if I don't have an idea for a project?</Text>
                        <AddIcon color='#D434FE' fontSize='12px' />
                    </HStack>

                    <HStack width='100%' justifyContent='space-between' borderBottom='1px solid #D434FE' padding="20px 0" spacing='30px'>
                        <Text>Can I join a team or do I have to come with one?</Text>
                        <AddIcon color='#D434FE' fontSize='12px' />
                    </HStack>

                    <HStack width='100%' justifyContent='space-between' borderBottom='1px solid #D434FE' padding="20px 0" spacing='30px'>
                        <Text>What happens after the hackathon ends</Text>
                        <AddIcon color='#D434FE' fontSize='12px' />
                    </HStack>

                    <HStack width='100%' justifyContent='space-between' borderBottom='1px solid #D434FE' padding="20px 0" spacing='30px'>
                        <Text>Can I work on a project I started before the hackathon?</Text>
                        <AddIcon color='#D434FE' fontSize='12px' />
                    </HStack>
                </VStack>
            </VStack>

            <Box width='100%' marginTop={{ base: '30px', md: '0' }}>
                <Image src={faq} />
            </Box>
        </Stack>

        <Divider border='none' style={{ borderTop: '1px solid #1F1931' }} />
    </>
}

export default Faq