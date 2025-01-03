import { Divider, Container, styled, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Clinic from "../../../../assets/images/Clinic.png"
import DevFree from "../../../../assets/images/Dev.png"
import CleanArch from "../../../../assets/images/Clean-Architecture.png"
import BookManager from "../../../../assets/images/BookManager.jpg"
import BloodManager from "../../../../assets/images/BloodBank.jpg"



const Projects = () => {
    const StyleTitle = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        padding: "20px 0",
    }));

    const StyleProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        padding: "20px 0",
    }));

    const ProjectBox = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        width: "300px",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        boxShadow: theme.shadows[3],
        margin: "10px",
    }));

    const ProjectImage = styled("img")(() => ({
        width: "70%",
        height: "auto",
        marginBottom: "10px",
        borderRadius: "4px",
    }));

    const ButtonStyle = styled("a")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "7px",
        padding: "7px 20px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        textDecoration: "none",
        cursor: "pointer",
        marginTop: "10px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            transform: "scale(1.1)",
            boxShadow: 4,
        },
    }));

    return (
        <>
            <StyleTitle>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography
                                padding={2}
                                color="primary.contrastText"
                                variant="h3"
                                textAlign="center"
                                pb={2}
                            >
                                Projetos
                            </Typography>
                            <Divider
                                sx={{
                                    backgroundColor: "primary.contrastText",
                                    marginY: 2,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </StyleTitle>

            <StyleProjects>
                <Container maxWidth="lg">
                    <Grid container justifyContent="center" spacing={4}>
                        <Grid>
                            <ProjectBox>
                                <Grid display={"flex"} justifyContent={"center"}>
                                    <Typography variant="h5">Banco de Sangue</Typography>
                                </Grid>
                                <ProjectImage src={BloodManager} alt="Projeto 1" />
                                <Grid bgcolor={"secondary.contrastText"} display={"flex"} justifyContent={"center"}>
                                    <ButtonStyle href="https://github.com/GabrielF13/BloodBank" target="_blank" rel="noopener noreferrer"
                                    >
                                        <Typography>Acessar Código</Typography>
                                    </ButtonStyle>
                                </Grid>
                            </ProjectBox>
                        </Grid>
                        <Grid>
                            <ProjectBox>
                                <Grid display={"flex"} justifyContent={"center"}>
                                    <Typography variant="h5">Gerenciador de Livros</Typography>
                                </Grid>
                                <ProjectImage src={BookManager} alt="Projeto 2" />
                                <Grid bgcolor={"secondary.contrastText"} display={"flex"} justifyContent={"center"}>
                                    <ButtonStyle href="https://github.com/GabrielF13/BookManager-API" target="_blank" rel="noopener noreferrer"
                                    >
                                        <Typography>Acessar Código</Typography>
                                    </ButtonStyle>
                                </Grid>
                            </ProjectBox>
                        </Grid>
                        <Grid>
                            <ProjectBox>
                                <Grid display={"flex"} justifyContent={"center"}>
                                    <Typography variant="h5">CleanArch</Typography>
                                </Grid>
                                <ProjectImage src={CleanArch} alt="Projeto 2" />
                                <Grid bgcolor={"secondary.contrastText"} display={"flex"} justifyContent={"center"}>
                                    <ButtonStyle href="https://github.com/GabrielF13/CleanArch" target="_blank" rel="noopener noreferrer"
                                    >
                                        <Typography>Acessar Código</Typography>
                                    </ButtonStyle>
                                </Grid>
                            </ProjectBox>
                        </Grid>
                        <Grid>
                            <ProjectBox>
                                <Grid display={"flex"} justifyContent={"center"}>
                                    <Typography variant="h5">Gestão de Clínica</Typography>
                                </Grid>
                                <ProjectImage src={Clinic} alt="Projeto 2" />
                                <Grid bgcolor={"secondary.contrastText"} display={"flex"} justifyContent={"center"}>
                                    <ButtonStyle href="https://github.com/GabrielF13/ProConsulta" target="_blank" rel="noopener noreferrer"
                                    >
                                        <Typography>Acessar Código</Typography>
                                    </ButtonStyle>
                                </Grid>
                            </ProjectBox>
                        </Grid>
                        <Grid>
                            <ProjectBox>
                                <Grid display={"flex"} justifyContent={"center"}>
                                    <Typography variant="h5">DevFreela</Typography>
                                </Grid>
                                <ProjectImage src={DevFree} alt="Projeto 2" />
                                <Grid bgcolor={"secondary.contrastText"} display={"flex"} justifyContent={"center"}>
                                    <ButtonStyle href="https://github.com/GabrielF13/DevFreela" target="_blank" rel="noopener noreferrer"
                                    >
                                        <Typography>Acessar Código</Typography>
                                    </ButtonStyle>
                                </Grid>
                            </ProjectBox>
                        </Grid>
                    </Grid>
                </Container>
            </StyleProjects>
        </>
    );
};

export default Projects;
