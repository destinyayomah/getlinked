import { Box, Divider, Image, Stack, Text, VStack } from "@chakra-ui/react"
import intro from '../assets/intro.png'
import { primaryColor } from "../App"


const Introduction = () => {
    return <>
        <Stack direction={{ base: 'column', md: 'row' }} bg={primaryColor} color='white' padding='50px 10% 50px 10%'>
            <Box width='100%'>
                <Image src={intro} />
            </Box>

            <VStack width='100%' alignItems='start' justifyContent='center' spacing='30px' textAlign={{ base: 'center', md: 'left' }}>
                <Box width='100%' fontSize={{ base: '20px', md: '32px' }} fontWeight='900'>
                    <Text>Introduction to getLinked</Text>
                    <Text color='#D434FE'>techHackathon1.0</Text>
                </Box>
                <Text fontSize={{ base: '12px', md: '14px' }}>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</Text>
            </VStack>
        </Stack>

        <Divider border='none' style={{ borderTop: '1px solid #1F1931' }} />
    </>
}

export default Introduction