import { Divider, Container, styled, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

const Experience = () => {
    const [selectedCompany, setSelectedCompany] = useState("gft");

    const StyledSection = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.dark,
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

    const StyledExperienceContainer = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.dark,
        display: "flex",
        alignItems: "flex-start",
        padding: "60px 0",
        boxSizing: "border-box",
        minHeight: "500px",
    }));

    const CompanyTab = styled(Box)<{ isActive: boolean }>(({ theme, isActive }) => ({
        padding: "16px 24px",
        cursor: "pointer",
        borderLeft: `3px solid ${isActive ? theme.palette.secondary.main : "transparent"}`,
        backgroundColor: isActive ? theme.palette.primary.light : "transparent",
        color: isActive ? theme.palette.secondary.main : theme.palette.primary.contrastText,
        fontWeight: isActive ? "bold" : "500",
        fontSize: "1.1rem",
        transition: "all 0.3s ease",
        position: "relative",
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.secondary.main,
            transform: "translateX(5px)",
        },
        [theme.breakpoints.down('md')]: {
            padding: "12px 16px",
            fontSize: "1rem",
        },
    }));

    const TabsContainer = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        borderRight: `2px solid ${theme.palette.primary.light}`,
        minWidth: "200px",
        [theme.breakpoints.down('md')]: {
            minWidth: "150px",
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: "row",
            borderRight: "none",
            borderBottom: `2px solid ${theme.palette.primary.light}`,
            minWidth: "100%",
            marginBottom: "30px",
        },
    }));

    const ContentContainer = styled(Box)(({ theme }) => ({
        paddingLeft: "40px",
        flex: 1,
        [theme.breakpoints.down('md')]: {
            paddingLeft: "30px",
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "0",
        },
    }));

    const JobTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        fontSize: "1.8rem",
        fontWeight: "bold",
        marginBottom: "8px",
        "& span": {
            color: theme.palette.secondary.main,
        },
    }));

    const Period = styled(Box)(({ theme }) => ({
        display: "inline-block",
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        padding: "6px 16px",
        borderRadius: "20px",
        fontSize: "0.9rem",
        fontWeight: "600",
        marginBottom: "24px",
        border: `1px solid ${theme.palette.secondary.main}40`,
    }));

    const Description = styled(Typography)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        fontSize: "1rem",
        lineHeight: 1.8,
        marginBottom: "24px",
        opacity: 0.9,
    }));

    const ResponsibilitiesTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        fontSize: "1.1rem",
        fontWeight: "bold",
        marginBottom: "16px",
    }));

    const ResponsibilityItem = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "12px",
        color: theme.palette.primary.contrastText,
        "&::before": {
            content: '"▹"',
            color: theme.palette.secondary.main,
            fontSize: "1.2rem",
            marginRight: "12px",
            marginTop: "-2px",
        },
    }));

    const experiences = {
        gft: {
            id: "gft",
            company: "GFT Technologies",
            position: "Desenvolvedor Back-End",
            period: "Setembro 2024 - Atual",
            description: "Atuação no setor financeiro, desenvolvendo e mantendo aplicações backend com foco em performance e escalabilidade. Trabalho em um ecossistema de microserviços, colaborando com times multifuncionais para entregar soluções robustas e confiáveis.",
            responsibilities: [
                "Atuação no setor financeiro, desenvolvendo e mantendo aplicações backend com foco em performance e escalabilidade",
                "Identificação e correção de bugs em sistemas baseados em .NET Core e .NET Framework, garantindo estabilidade e confiabilidade",
                "Desenvolvimento de novas features e evolução de sistemas utilizando Clean Architecture e princípios de DDD",
                "Integração e desenvolvimento de APIs RESTful para comunicação eficiente entre microserviços",
                "Utilização de bancos de dados relacionais (SQL Server) em ambiente altamente transacional",
                "Participação ativa em um ecossistema de microserviços, colaborando com times multifuncionais para entregar soluções robustas",
                "Apoio na manutenção de boas práticas de versionamento, testes e revisões de código"
            ]
        },
        bneDev: {
            id: "bneDev",
            company: "BNE - Banco Nacional de Empregos",
            position: "Desenvolvedor Back-End",
            period: "Outubro 2023 - Setembro 2024",
            description: "Contribui ativamente para a evolução e expansão de aplicações legadas e novas, baseadas em .NET Core e .NET Framework. Realizei a correção de bugs complexos e implementei novas funcionalidades, sempre focado na aplicação de princípios de programação limpa. Trabalhei na otimização de performance e na refatoração de código para melhorar a arquitetura das soluções existentes.",
            responsibilities: [
                "Evolução e expansão de aplicações legadas e novas",
                "Correção de bugs complexos e implementação de novas funcionalidades",
                "Otimização de performance e refatoração de código",
                "Melhoria da arquitetura das soluções existentes",
                "Utilização de SQL Server e RabbitMQ"
            ]
        },
        bneIntern: {
            id: "bneIntern",
            company: "BNE - Banco Nacional de Empregos",
            position: "Estagiário de Desenvolvimento Back-End",
            period: "Junho 2022 - Outubro 2023",
            description: "Participei ativamente na resolução de bugs e na implementação de melhorias em diversas aplicações desenvolvidas com .NET Framework. Adquiri experiência prática com conceitos de Domain-Driven Design (DDD) e na utilização de APIs RESTful. Trabalhei com tecnologias essenciais para o desenvolvimento moderno, incluindo Docker para conteinerização e RabbitMQ.",
            responsibilities: [
                "Resolução de bugs e implementação de melhorias",
                "Experiência prática com Domain-Driven Design (DDD)",
                "Utilização de APIs RESTful",
                "Trabalho com Docker para conteinerização",
                "Gerenciamento de filas de mensagens com RabbitMQ"
            ]
        }
    };

    const currentExperience = experiences[selectedCompany as keyof typeof experiences];

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
                                Experiência Profissional
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

            <StyledExperienceContainer>
                <Container maxWidth="lg">
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
                        {/* Abas das Empresas */}
                        <TabsContainer>
                            <CompanyTab
                                isActive={selectedCompany === "gft"}
                                onClick={() => setSelectedCompany("gft")}
                            >
                                GFT
                            </CompanyTab>
                            <CompanyTab
                                isActive={selectedCompany === "bneDev"}
                                onClick={() => setSelectedCompany("bneDev")}
                            >
                                BNE
                            </CompanyTab>
                            <CompanyTab
                                isActive={selectedCompany === "bneIntern"}
                                onClick={() => setSelectedCompany("bneIntern")}
                            >
                                BNE (Estágio)
                            </CompanyTab>
                        </TabsContainer>

                        {/* Conteúdo da Experiência */}
                        <ContentContainer>
                            <JobTitle>
                                {currentExperience.position}
                            </JobTitle>
                            
                            <Period>{currentExperience.period}</Period>
                            
                            <Description>
                                {currentExperience.description}
                            </Description>
                            
                            <ResponsibilitiesTitle>
                                Principais Responsabilidades:
                            </ResponsibilitiesTitle>
                            
                            {currentExperience.responsibilities.map((resp, idx) => (
                                <ResponsibilityItem key={idx}>
                                    <Typography>{resp}</Typography>
                                </ResponsibilityItem>
                            ))}
                        </ContentContainer>
                    </Box>
                </Container>
            </StyledExperienceContainer>
        </>
    );
};

export default Experience;
