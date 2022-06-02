import { FC } from 'react'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
type Props = {}

const Home: FC = (props: Props) => {
    return (
        <Container>
            <Typography display={'flex'} justifyContent={'center'} alignItems={'center'} height={window.innerHeight - 50}>
                Login to start chatting with friends
            </Typography>
        </Container>
    )
}

export default Home