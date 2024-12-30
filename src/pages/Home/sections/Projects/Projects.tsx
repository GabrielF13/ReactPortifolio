import { Divider, Container, styled, Typography, Box, Button, Avatar } from "@mui/material"
import Grid from '@mui/material/Grid2';

const About = () => {


    const StyleTitle = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
    }))


    return (
        <>
            <StyleTitle>
                <Container maxWidth={"lg"} >
                    <Grid container >
                        <Grid size={{ xs: 12, md: 12 }} >
                            <Typography padding={2} color="primary.contrastText" variant="h3" textAlign={"center"} pb={2}>Projetos</Typography>
                            <Divider sx={{ backgroundColor: "primary.contrastText", marginY: 2 }} />

                        </Grid>
                    </Grid>

                </Container>
            </StyleTitle>
            
        </>
    )
}

export default About
