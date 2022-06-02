import { Button, Grid } from "@mui/material"
import { Box, Container } from "@mui/system"
import { FC, useContext } from "react"
import { Context } from ".."
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login: FC = () => {
    const { auth } = useContext(Context);

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
    }

    return (
        <Container>
            <Grid
                container
                style={{ height: window.innerHeight - 50 }}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid container
                    style={{ height: window.innerHeight - 50 }}
                    alignItems={"center"}
                    justifyContent={"center"}
                    direction={"column"}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Login with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login