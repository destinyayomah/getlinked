import { Box, Button, Divider, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"
import stroke from '../assets/stroke.png'
import title from '../assets/title.png'
import vfx from '../assets/vfx.png'
import { primaryColor } from "../App"

const Hero = () => {
    return <>
        <VStack
            bg={primaryColor}
            color='white'
            padding='15px 10% 0 10%'
        >
            <VStack textAlign={{ base: 'center', md: 'end' }} lineHeight={{ base: '0.1', md: '1' }}>
                <Text fontSize={{ base: '10px', md: '30px' }} fontWeight='bold' fontStyle='italic' width='100%' >Igniting a Revolution in HR Innovation</Text>

                <Image src={stroke} width={{ base: '35%', md: '30%', lg: '40%' }} height={{ base: '5px', md: '15px', lg: '20px' }} margin='0 0 0 auto' />
            </VStack>

            <Stack direction={{ base: 'column', md: 'row' }} alignItems='end'>
                <VStack alignItems={{ base: 'center', md: 'start' }} spacing='30px' padding={{ base: '0', lg: '50px 0' }}>
                    <Image src={title} />

                    <Text>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</Text>

                    <Button
                        bgGradient='linear-gradient(to-l, #CB3AFF, #D434FE, #FE34B9)'
                        color='white'
                        borderRadius='4px'
                        padding='0 50px'
                    >
                        Register
                    </Button>

                    <HStack color='white'>
                        <HStack alignItems='baseline'>
                            <Text fontSize={{ base: '48px', md: '64px' }}>00</Text>
                            <Text fontSize={{ base: '12px', md: '14px' }}>H</Text>
                        </HStack>

                        <HStack alignItems='baseline'>
                            <Text fontSize={{ base: '48px', md: '64px' }}>00</Text>
                            <Text fontSize={{ base: '12px', md: '14px' }}>M</Text>
                        </HStack>

                        <HStack alignItems='baseline'>
                            <Text fontSize={{ base: '48px', md: '64px' }}>00</Text>
                            <Text fontSize={{ base: '12px', md: '14px' }}>S</Text>
                        </HStack>
                    </HStack>
                </VStack>

                <Box>
                    <Image src={vfx} />
                </Box>
            </Stack>
        </VStack>
        
        <Divider border='none' style={{ borderTop: '1px solid #1F1931' }} />
    </>
}

export default Hero