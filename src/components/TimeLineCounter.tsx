import { Box } from '@chakra-ui/react'

interface Props {
    count: number
}

const TimeLineCounter = ({ count }: Props) => {
    return <>
        <Box
            bgGradient='linear-gradient(to-b, #903AFF, #D434FE)'
            color='white'
            w={{ base: '20px', md: '40px' }}
            h={{ base: '20px', md: '40px' }}
            minW={{ base: '20px', md: '40px' }}
            minH={{ base: '20px', md: '40px' }}
            display='flex'
            justifyContent='center'
            alignItems='center'
            borderRadius='50%'
            fontSize={{ base: '12px', md: '20px' }}
            fontWeight='bold'
        >
            {count}
        </Box>
    </>
}

export default TimeLineCounter