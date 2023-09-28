import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"
import reward from '../assets/rewards.png'
import gold from '../assets/gold.png'
import silver from '../assets/silver.png'
import bronze from '../assets/bronze.png'
import { primaryColor } from "../App"

const Rewards = () => {
    return <>
        <VStack bg={primaryColor} padding='50px 10%'>
            <HStack width='100%'>
                <Box flex='1'></Box>
                <VStack flex='1' alignItems='start'>
                    <Text fontSize={{ base: '24px', md: '32px' }} fontWeight='700' color='white'>Prizes and</Text>
                    <Text fontSize={{ base: '24px', md: '32px' }} fontWeight='700' color='#D434FE'>Rewards</Text>

                    <Text fontSize='16px' color='white' marginTop='20px'>Highlight of the prizes or rewards for winners and for participants.</Text>
                </VStack>
            </HStack>

            <Stack direction={{ base: 'column', md: 'row' }}>
                <Image src={reward} />

                <HStack>
                    <Box pos='relative'>
                        <VStack bg='#291041' border='1px solid #D434FE' borderRadius='8px' padding='130px 30px 30px 30px'>
                            <Text lineHeight='1' color='white' fontSize={{ base: '24px', md: '36px' }} fontWeight='bold'>2nd</Text>
                            <Text lineHeight='1' color='white' fontSize={{ base: '16px', md: '24px' }} fontWeight='semibold'>Runner</Text>
                            <Text color='#D434FE' fontSize={{ base: '20px', md: '32px' }} fontWeight='bold'>N300,000</Text>
                        </VStack>
                        <Image
                            src={silver}
                            w={{ base: '50px', md: '179px' }}
                            h={{ base: '50px', md: '180px' }}
                            pos='absolute'
                            top='-80px'
                            left='15px'
                        />
                    </Box>

                    <Box pos='relative'>
                        <VStack bg='#20113D' border='1px solid #903AFF' borderRadius='8px' padding='130px 0 30px 0'>
                            <Text lineHeight='1' color='white' fontSize={{ base: '24px', md: '36px' }} fontWeight='bold'>2nd</Text>
                            <Text lineHeight='1' color='white' fontSize={{ base: '16px', md: '24px' }} fontWeight='semibold'>Runner</Text>
                            <Text color='#903AFF' fontSize={{ base: '20px', md: '32px' }} fontWeight='bold'>N400,000</Text>
                        </VStack>
                        <Image
                            src={gold}
                            w={{ base: '50px', md: '296px' }}
                            h={{ base: '50px', md: '296px' }}
                            pos='absolute'
                            top='-80px'
                            left='15px'
                        />
                    </Box>

                    <Box pos='relative'>
                        <VStack bg='#291041' border='1px solid #D434FE' borderRadius='8px' padding='130px 30px 30px 30px'>
                            <Text lineHeight='1' color='white' fontSize={{ base: '24px', md: '36px' }} fontWeight='bold'>2nd</Text>
                            <Text lineHeight='1' color='white' fontSize={{ base: '16px', md: '24px' }} fontWeight='semibold'>Runner</Text>
                            <Text color='#D434FE' fontSize={{ base: '20px', md: '32px' }} fontWeight='bold'>N150,000</Text>
                        </VStack>
                        <Image
                            src={bronze}
                            w={{ base: '50px', md: '179px' }}
                            h={{ base: '50px', md: '180px' }}
                            pos='absolute'
                            top='-80px'
                            left='15px'
                        />
                    </Box>
                </HStack>
            </Stack>
        </VStack>
    </>
}

export default Rewards