import { Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const NotFound = (props: Props) => {
    return (
        <Container>
            <Typography display={'flex'} justifyContent={'center'} alignItems={'center'} height={window.innerHeight - 50}>
                Error, this page is not found
                <Link to='/'>
                    <Button>
                        Click on this button to redirect
                    </Button>
                </Link>
            </Typography>
        </Container>

    )
}

export default NotFound