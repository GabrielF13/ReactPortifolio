import { Box, Container, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';

const About = () => {

    const StyleAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        height: "100dvh",
        display: "flex",
        alignItems: "center",
        paddingBottom: "20px",
    }))


    return (
        <>
            <StyleAbout>
                <Container maxWidth={"lg"}>

                    <Grid container >
                        <Grid size={{ xs: 12, md: 5 }} >

                            <Box position="relative">

                               
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography color="primary.contrastText" variant="h1" textAlign={"center"} pb={2}>Olá, eu sou o Gabriel</Typography>
                            <Typography color="secondary" variant="h2" textAlign={"center"}>Sou Desenvolvedor Back-End</Typography>
                            <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                   
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                   
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                </Container>

            </StyleAbout>
        </>
    )
}

export default About
