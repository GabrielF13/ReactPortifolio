import { Divider, Container, styled, Typography, Box } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import theme from "../../../../theme";

const About = () => {

    const StyleAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        height: "100%",
        display: "flex",
        alignItems: "center",
        paddingBottom: "20px 0",
        boxSizing: "border-box",
    }))

    const StyleTech = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        display: "flex",
        height: "46dvh",
        alignItems: "center",
        padding: "20px 0px",
        boxSizing: "border-box",
    }))

    const StyleTitle = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        padding: "20px 0", // Espaçamento interno para ajustar o conteúdo
        textAlign: "center", // Centraliza o conteúdo horizontalmente
        boxSizing: "border-box",  // Centralize o texto
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
                            <Typography padding={2} color="primary.contrastText" variant="h3" textAlign={"center"} p={2}>Sobre</Typography>
                            <Divider sx={{ backgroundColor: "primary.contrastText", marginY: 2 }} />

                        </Grid>
                    </Grid>

                </Container>
            </StyleTitle>

            <StyleAbout>
                <Container maxWidth={"lg"} >
                    <Grid container >
                        <Grid size={{ xs: 12, md: 12 }} >
                            <Typography padding={2} color="primary.contrastText" textAlign={"center"} p={2}>Atualmente, atuo como Desenvolvedor Back-End na GFT Technologies, onde contribuo para o desenvolvimento e manutenção de microserviços e APIs em C# e ASP.NET. Desde 2022, acumulo experiência no desenvolvimento de aplicações robustas e escaláveis, aplicando princípios de Clean Code, SOLID e Clean Architecture para garantir qualidade e flexibilidade na arquitetura.

                                Tenho expertise na implementação de soluções utilizando .NET Core, Framework, Docker, RabbitMQ, SQL Server e PostgreSQL, além de habilidades em JavaScript, HTML e CSS. Participo de todas as etapas do ciclo de vida do desenvolvimento de software, desde a concepção até a entrega e manutenção, trabalhando em ambientes ágeis com metodologias como SCRUM.

                                Com foco na resolução de bugs, otimização de sistemas e implementação de novas funcionalidades, colaboro para entregar valor em soluções corporativas, ajudando empresas a alcançar seus objetivos com eficiência e inovação.</Typography>
                        </Grid>
                    </Grid>

                </Container>

            </StyleAbout>

            <StyleTitle>
                <Container maxWidth={"lg"}>
                    <Grid container >
                        <Grid size={{ xs: 12, md: 12 }} >
                            <Typography padding={2} color="primary.contrastText" variant="h3" textAlign={"center"} p={2}>Tecnologias</Typography>
                            <Divider sx={{ backgroundColor: "primary.contrastText", marginY: 2 }} />

                        </Grid>
                    </Grid>

                </Container>
            </StyleTitle>

            <StyleTech>
                <Container maxWidth={"lg"} >
                <Box
                    sx={{
                        textAlign: "center",
                        padding: 4,
                    }}
                >
                    <Grid padding={2} p={2}  alignItems={"center"} container spacing={2} justifyContent="center">
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
                </Container>
            </StyleTech>
        </>
    )
}

export default About
