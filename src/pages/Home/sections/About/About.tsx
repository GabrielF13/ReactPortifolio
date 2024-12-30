import { Divider, Container, styled, Typography, Box, Button, Avatar } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import theme from "../../../../theme";

const About = () => {

    const StyleAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        height: "30dvh",
        display: "flex",
        alignItems: "center",
        paddingBottom: "20px",
    }))

    const StyleTitle = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        display: "flex",
        alignItems: "center",
    }))

    const StyleTech = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        display: "flex",
        alignItems: "center",
    }))

    const skills = [
        "C#",
        ".NET Core",
        ".Net Framework",
        "ASP .NET",
        "RabbitMQ",
        "Git",
        "SQL Server",
        "PostgreSQL",
        "Docker",
    ];

    return (
        <>
            <StyleTitle>
                <Container maxWidth={"lg"} >
                    <Grid container >
                        <Grid size={{ xs: 12, md: 12 }} >
                            <Typography padding={2} color="primary.contrastText" variant="h3" textAlign={"center"} pb={2}>Sobre</Typography>
                            <Divider sx={{ backgroundColor: "primary.contrastText", marginY: 2 }} />

                        </Grid>
                    </Grid>

                </Container>
            </StyleTitle>

            <StyleAbout>
                <Container maxWidth={"lg"} >
                    <Grid container >
                        <Grid size={{ xs: 12, md: 12 }} >
                            <Typography padding={2} color="primary.contrastText" textAlign={"center"} pb={2}>Atuo na área de Desenvolvedor .NET desde 2022, especializado em criar aplicações robustas e soluções escaláveis utilizando C#, .NET Core, Framework, ASP.NET, JavaScript, HTML e CSS. Experiente na implementação de novas funcionalidades, manutenção de aplicações e uso de metodologias ágeis como SCRUM, assegurando entregas contínuas e iterativas.
                            Aplico os princípios de Clean Code e SOLID para garantir arquitetura flexível e aderência às melhores práticas. Participo de todas as etapas do ciclo de vida do desenvolvimento, desde a concepção até a entrega e manutenção. Com experiência em APIs, Docker e RabbitMQ</Typography>
                        </Grid>
                    </Grid>

                </Container>

            </StyleAbout>

            <StyleTitle>
                <Container maxWidth={"lg"}>
                    <Grid container >
                        <Grid size={{ xs: 12, md: 12 }} >
                            <Typography padding={2} color="primary.contrastText" variant="h3" textAlign={"center"} pb={2}>Tecnologias</Typography>
                            <Divider sx={{ backgroundColor: "primary.contrastText", marginY: 2 }} />

                        </Grid>
                    </Grid>

                </Container>
            </StyleTitle>

            <StyleTech>
            <Box
            sx={{
                textAlign: "center",
                padding: 4,
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                {skills.map((skill: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => (
                    <Grid key={index}>
                        <Box
                            sx={{
                                bgcolor: theme.palette.primary.contrastText,
                                paddingTop: 1,
                                color: "black",
                                width: 120,
                                height: 40,
                                fontSize: "1rem",
                                boxShadow: 2,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 2, // Ajusta o arredondamento (2 = leve arredondamento)
                                fontWeight: "bold",
                                ":hover": {
                                    transform: "scale(1.1)",
                                    bgcolor: theme.palette.secondary.main,
                                    boxShadow: 4,
                                } 
                            }}
                        >
                            {skill}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
           </StyleTech>
        </>
    )
}

export default About
