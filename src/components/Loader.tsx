import { Button, Grid } from "@mui/material"
import { Box, Container } from "@mui/system"
import { FC } from "react"

type Props = {}

const Loader: FC = (props: Props) => {
    return (
        <Container>
            <Grid
                container
                style={{ height: window.innerHeight - 50 }}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid container
                    alignItems={"center"}
                    justifyContent={"center"}
                    direction={"column"}
                >
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Loader