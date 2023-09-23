import { Box, Button, Divider, HStack, Image, Show, Text, VStack } from "@chakra-ui/react"
import logo from '../assets/getlinked.png';
import menu from '../assets/menu.png';
import { useState } from "react";
import { primaryColor } from "../App";
import { CloseIcon } from "@chakra-ui/icons";


const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenuVisibility = () => {
        if (isMenuVisible) {
            setIsMenuVisible(false);
        } else {
            setIsMenuVisible(true);
        }
    }

    return <>
        <HStack bg={primaryColor} color='white' justify='space-between' padding='30px 10%' fontSize='16px'>
            <Image src={logo} height={{ base: '18px', md: '30px', lg: '44px' }} />

            <Show above="md">
                <HStack spacing={{ base: '10px', md: '15px', lg: '50px' }}>
                    <Text>Timeline</Text>
                    <Text>Overview</Text>
                    <Text>FAQs</Text>
                    <Text>Contact</Text>
                    <Button
                        bgGradient='linear-gradient(to-r, #CB3AFF, #D434FE, #FE34B9)'
                        color='white'
                        borderRadius='4px'
                        padding='0 50px'
                    >
                        Register
                    </Button>
                </HStack>
            </Show>

            <Show below="767px">
                <Image src={menu} onClick={toggleMenuVisibility} />
            </Show>
        </HStack>

        <Divider border='none' style={{ borderTop: '1px solid #FFFFFF' }} />

        <Show below="md">
            <VStack
                spacing='30px'
                alignItems='start'
                bg={primaryColor}
                color='white'
                padding='30px 10%'
                transform={`translateY(${isMenuVisible ? '0%' : '-0%'})`}
                transition='transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
                visibility={isMenuVisible ? 'visible' : 'hidden'}
                position={isMenuVisible ? 'relative' : 'absolute'}
                opacity={isMenuVisible ? '1' : '0'}
            >
                <Box
                    bgGradient='linear-gradient(to-b, #903AFF, #FF26B9)'
                    height='29px'
                    width="29px"
                    borderRadius='50%'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    margin='0 0 0 auto'
                >
                    <CloseIcon
                        fontSize='15px'
                        bg={primaryColor}
                        width='25px'
                        height='25px'
                        padding='5px'
                        borderRadius='50%'
                        onClick={() => setIsMenuVisible(false)}
                    />
                </Box>
                <Text>Timeline</Text>
                <Text>Overview</Text>
                <Text>FAQs</Text>
                <Text>Contact</Text>
                <Button
                    bgGradient='linear-gradient(to-r, #CB3AFF, #D434FE, #FE34B9)'
                    color='white'
                    borderRadius='4px'
                    padding='0 50px'
                >
                    Register
                </Button>
            </VStack>
        </Show>
    </>
}

export default Navbar