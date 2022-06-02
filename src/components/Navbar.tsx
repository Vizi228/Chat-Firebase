import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from '../utils/consts';
import { Context } from '..';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

type Props = {}

const Navbar = (props: Props) => {
    const { auth } = useContext(Context);
    const [user, loading, error] = useAuthState(auth);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant='dense'>
                    <Grid paddingX={20 + 'px'} container justifyContent={'flex-end'} alignItems={'center'}>
                        {user
                            ?
                            <Button variant={'outlined'} color="inherit">
                                <Link onClick={() => auth.signOut()} to={'/'}>
                                    Logout
                                </Link>
                            </Button>
                            :

                            <Button variant={'outlined'} color="inherit">
                                <Link to={routes.LOGIN_ROUTE}>
                                    Login
                                </Link>
                            </Button>

                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar

