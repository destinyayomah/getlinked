import { Box } from '@chakra-ui/react'

interface Props {
    count: number
}

const TimeLineCounter = ({ count }: Props) => {
    return <>
        <Box
            bgGradient='linear-gradient(to-b, #903AFF, #D434FE)'
            color='white'
            w={{ base: '20px', md: '53px' }}
            h={{ base: '20px', md: '53px' }}
            minW={{ base: '20px', md: '53px' }}
            minH={{ base: '20px', md: '53px' }}
            display='flex'
            justifyContent='center'
            alignItems='center'
            borderRadius='50%'
            fontSize={{ base: '12px', md: '24px' }}
            fontWeight='bold'
        >
            {count}
        </Box>
    </>
}

export default TimeLineCounter