import { Box, Button, Divider, Image, Stack, Text, VStack } from "@chakra-ui/react"
import judge from '../assets/judge.png'
import { primaryColor } from "../App"


const Judge = () => {
    return <>
        <Stack direction={{ base: 'column', md: 'row' }} bg={primaryColor} color='white' padding='50px 10% 50px 10%'>
            <Box width='100%'>
                <Image src={judge} />
            </Box>

            <VStack width='100%' alignItems='start' justifyContent='center' spacing='30px' textAlign={{ base: 'center', md: 'left' }}>
                <Box width='100%' fontSize={{ base: '20px', md: '32px' }} fontWeight='900'>
                    <Text>Judging Criteria</Text>
                    <Text color='#D434FE'>Key attributes</Text>
                </Box>

                <Box fontSize={{ base: '12px', md: '14px' }}>
                    <Text display='inline' fontWeight='600' fontSize={{ base: '14px', md: '16px' }} color='#FF26B9'>Innovation and Creativity: </Text>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
                </Box>

                <Box fontSize={{ base: '12px', md: '14px' }}>
                    <Text display='inline' fontWeight='600' fontSize={{ base: '14px', md: '16px' }} color='#FF26B9'>Functionality: </Text>Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
                </Box>

                <Box fontSize={{ base: '12px', md: '14px' }}>
                    <Text display='inline' fontWeight='600' fontSize={{ base: '14px', md: '16px' }} color='#FF26B9'>Impact and Relevance: </Text>Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
                </Box>

                <Box fontSize={{ base: '12px', md: '14px' }}>
                    <Text display='inline' fontWeight='600' fontSize={{ base: '14px', md: '16px' }} color='#FF26B9'>Technical Complexity: </Text>Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
                </Box>

                <Box fontSize={{ base: '12px', md: '14px' }}>
                    <Text display='inline' fontWeight='600' fontSize={{ base: '14px', md: '16px' }} color='#FF26B9'>Adherence to Hackathon Rules: </Text>Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
                </Box>

                <Button
                    bgGradient='linear-gradient(to-r, #CB3AFF, #D434FE, #FE34B9)'
                    color='white'
                    borderRadius='4px'
                    padding='0 50px'
                    margin={{ base: '0 auto', md: '0' }}
                >
                    Read More
                </Button>
            </VStack>
        </Stack>

        <Divider border='none' style={{ borderTop: '1px solid #1F1931' }} />
    </>
}

export default Judge