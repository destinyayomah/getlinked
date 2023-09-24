import { Box, Divider, HStack, Hide, Show, Stack, Text, VStack } from "@chakra-ui/react"
import { primaryColor } from "../App"
import TimeLineCounter from "./TimeLineCounter"
import TImelineItemLeft from "./TImelineItemLeft"
import TImelineItemRight from "./TimelineItemRight"


const Timeline = () => {
    return <>
        <Stack direction={{ base: 'column' }} bg={primaryColor} color='white' padding='50px 10% 50px 10%'>
            <Box width='100%' textAlign='center' fontSize={{ base: '20px', md: '32px' }} fontWeight='900'>
                <Text>Timeline</Text>
            </Box>

            <Text maxWidth='340px' margin='0 auto' textAlign='center' fontSize={{ base: '12px', md: '14px' }} fontWeight='300'>Here is the breakdown of the time we anticipate using for the upcoming event.</Text>

            <Stack direction='column' marginTop='50px'>
                <TImelineItemLeft
                    heading="Hackathon Announcement"
                    desc="The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register"
                    count={1}
                    date="November 18, 2023"
                />

                <TImelineItemRight
                    heading="Teams Registration begins"
                    desc="Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register"
                    count={2}
                    date="November 18, 2023"
                />

                {/* <HStack alignItems='end'>
                    <Text flex='2' textAlign='right' color='#D434FE' fontWeight='bold' fontSize={{ base: '20px', md: '24px' }}>November 18, 2023</Text>

                    <VStack flex='1'>
                        <Divider orientation="vertical" height='100px' borderLeft='4px solid #D434FE' />

                        <Box
                            bgGradient='linear-gradient(to-b, #903AFF, #D434FE)'
                            color='white'
                            width='53px'
                            height='53px'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            borderRadius='50%'
                            fontSize='24px'
                            fontWeight='bold'
                        >
                            2
                        </Box>
                    </VStack>

                    <VStack textAlign='left' flex='2'>
                        <Text width='100%' color='#D434FE' fontWeight='bold' fontSize={{ base: '20px', md: '24px' }}>Teams Registration begins</Text>
                        <Text width='100%'>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</Text>
                    </VStack>
                </HStack> */}
            </Stack>
        </Stack>

        <Divider border='none' style={{ borderTop: '1px solid #1F1931' }} />
    </>
}

export default Timeline