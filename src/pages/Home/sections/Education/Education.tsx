import { Divider, Container, styled, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AnimatedSection from "../../../../components/AnimatedSection/AnimatedSection";

const Education = () => {
    const StyledSection = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        alignItems: "center",
        padding: "20px 0",
        position: "relative",
        "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: `linear-gradient(90deg, transparent, ${theme.palette.secondary.main}, transparent)`,
        },
    }));

    const StyledEducationContainer = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        alignItems: "center",
        padding: "60px 0",
        boxSizing: "border-box",
    }));

    const EducationCard = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        borderRadius: "16px",
        padding: "30px",
        marginBottom: "24px",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease",
        border: `2px solid transparent`,
        "&:hover": {
            transform: "translateY(-5px)",
            borderColor: theme.palette.secondary.main,
            boxShadow: "0px 12px 32px rgba(0, 212, 255, 0.3)",
        },
    }));

    const IconContainer = styled(Box)(({ theme }) => ({
        width: "60px",
        height: "60px",
        borderRadius: "12px",
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "16px",
        "& svg": {
            fontSize: "2rem",
            color: theme.palette.primary.contrastText,
        },
    }));

    const Title = styled(Typography)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "8px",
    }));

    const Institution = styled(Typography)(({ theme }) => ({
        color: theme.palette.secondary.main,
        fontSize: "1.2rem",
        fontWeight: "600",
        marginBottom: "8px",
    }));

    const Period = styled(Typography)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        fontSize: "0.9rem",
        opacity: 0.7,
        marginBottom: "16px",
    }));

    const CertificationBadge = styled(Box)(({ theme }) => ({
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.contrastText,
        padding: "6px 12px",
        borderRadius: "20px",
        fontSize: "0.85rem",
        fontWeight: "600",
        marginTop: "12px",
    }));

    const VerifyLink = styled("a")(({ theme }) => ({
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        color: theme.palette.secondary.main,
        textDecoration: "none",
        fontSize: "0.9rem",
        fontWeight: "600",
        marginTop: "12px",
        transition: "all 0.3s ease",
        "&:hover": {
            color: theme.palette.secondary.light,
            transform: "translateX(5px)",
        },
    }));

    return (
        <>
            <StyledSection>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography
                                padding={2}
                                color="primary.contrastText"
                                variant="h3"
                                textAlign="center"
                                pb={2}
                                fontWeight="bold"
                            >
                                Formação e Certificações
                            </Typography>
                            <Divider
                                sx={{
                                    backgroundColor: "secondary.main",
                                    marginY: 3,
                                    height: "3px",
                                    width: "80px",
                                    margin: "20px auto",
                                    borderRadius: "2px",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </StyledSection>

            <StyledEducationContainer>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Formação Acadêmica */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <AnimatedSection delay={0.2} direction="left">
                                <EducationCard>
                                <IconContainer>
                                    <SchoolIcon />
                                </IconContainer>
                                
                                <Title>
                                    Tecnólogo em Análise e Desenvolvimento de Sistemas
                                </Title>
                                
                                <Institution>
                                    UniFavip Wyden
                                </Institution>
                                
                                <Period>
                                    Julho 2021 - Dezembro 2023
                                </Period>
                                
                                <Typography
                                    color="primary.contrastText"
                                    sx={{ opacity: 0.8, lineHeight: 1.6 }}
                                >
                                    Formação focada em desenvolvimento de software, arquitetura de sistemas, 
                                    banco de dados, engenharia de software e metodologias ágeis.
                                </Typography>
                                </EducationCard>
                            </AnimatedSection>
                        </Grid>

                        {/* Certificação AWS */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <AnimatedSection delay={0.4} direction="right">
                                <EducationCard>
                                <IconContainer>
                                    <WorkspacePremiumIcon />
                                </IconContainer>
                                
                                <Title>
                                    AWS Certified Cloud Practitioner
                                </Title>
                                
                                <Institution>
                                    Amazon Web Services (AWS)
                                </Institution>
                                
                                <Period>
                                    Emitida em Agosto 2025
                                </Period>
                                
                                <Typography
                                    color="primary.contrastText"
                                    sx={{ opacity: 0.8, lineHeight: 1.6, marginBottom: 2 }}
                                >
                                    Certificação que valida conhecimento fundamental sobre a nuvem AWS, 
                                    incluindo conceitos de cloud computing, serviços principais, segurança, 
                                    arquitetura e precificação.
                                </Typography>

                                <CertificationBadge>
                                    <WorkspacePremiumIcon sx={{ fontSize: "1rem" }} />
                                    Certificado Verificado
                                </CertificationBadge>

                                <Box sx={{ marginTop: 2 }}>
                                    <VerifyLink
                                        href="https://www.credly.com/badges/0a2845b9-78a4-4c2f-a5ef-c07f44ad3fe0/public_url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ver Credencial
                                        <OpenInNewIcon sx={{ fontSize: "1rem" }} />
                                    </VerifyLink>
                                </Box>
                                </EducationCard>
                            </AnimatedSection>
                        </Grid>
                    </Grid>
                </Container>
            </StyledEducationContainer>
        </>
    );
};

export default Education;

