import { Divider, Container, styled, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Clinic from "../../../../assets/images/Clinic.png"
import DevFree from "../../../../assets/images/Dev.png"
import CleanArch from "../../../../assets/images/Clean-Architecture.png"
import BookManager from "../../../../assets/images/BookManager.jpg"
import BloodManager from "../../../../assets/images/BloodBank.jpg"
import AnimatedSection from "../../../../components/AnimatedSection/AnimatedSection";


const Projects = () => {
    const projects = [
        {
            title: "Banco de Sangue",
            description: "Sistema completo para gerenciamento de doações de sangue, controle de estoque e agendamentos. Permite cadastro de doadores, agendamento de doações, controle de estoque por tipo sanguíneo e geração de relatórios.",
            image: BloodManager,
            link: "https://github.com/GabrielF13/BloodBank",
            tags: ["C#", ".NET Core", "SQL Server", "Entity Framework"],
            features: [
                "Cadastro completo de doadores",
                "Controle de estoque por tipo sanguíneo",
                "Sistema de agendamento de doações",
                "Relatórios e estatísticas"
            ]
        },
        {
            title: "Gerenciador de Livros",
            description: "API RESTful para gerenciamento de biblioteca com controle de empréstimos, catalogação de livros, gestão de usuários e sistema de multas por atraso.",
            image: BookManager,
            link: "https://github.com/GabrielF13/BookManager-API",
            tags: ["ASP.NET Core", "Entity Framework", "SQL Server", "JWT"],
            features: [
                "CRUD completo de livros e usuários",
                "Sistema de empréstimos e devoluções",
                "Cálculo automático de multas",
                "Autenticação JWT"
            ]
        },
        {
            title: "Clean Architecture",
            description: "Projeto demonstrando implementação completa de Clean Architecture com separação de camadas, inversão de dependências, SOLID e padrões de design. Exemplo prático de arquitetura escalável.",
            image: CleanArch,
            link: "https://github.com/GabrielF13/CleanArch",
            tags: ["Clean Architecture", "SOLID", "DDD", "CQRS"],
            features: [
                "Separação em camadas (Domain, Application, Infrastructure)",
                "Implementação de CQRS",
                "Padrão Repository e Unit of Work",
                "Testes unitários e de integração"
            ]
        },
        {
            title: "Gestão de Clínica",
            description: "Sistema completo para gestão de clínicas médicas com agendamento de consultas, prontuários eletrônicos, controle de pacientes, médicos e histórico médico.",
            image: Clinic,
            link: "https://github.com/GabrielF13/ProConsulta",
            tags: [".NET Core", "SQL Server", "MVC", "Bootstrap"],
            features: [
                "Agendamento de consultas",
                "Prontuário eletrônico",
                "Gestão de pacientes e médicos",
                "Histórico de atendimentos"
            ]
        },
        {
            title: "DevFreela",
            description: "Plataforma completa para freelancers com sistema de projetos, pagamentos, comunicação entre clientes e freelancers, avaliações e portfólio. Arquitetura de microserviços.",
            image: DevFree,
            link: "https://github.com/GabrielF13/DevFreela",
            tags: ["Microservices", "RabbitMQ", "Docker", ".NET Core"],
            features: [
                "Cadastro de projetos e propostas",
                "Sistema de pagamentos",
                "Mensageria com RabbitMQ",
                "Containerização com Docker"
            ]
        }
    ];

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

    const ProjectCard = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        width: "100%",
        maxWidth: "420px",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.4)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        cursor: "pointer",
        border: `2px solid transparent`,
        display: "flex",
        flexDirection: "column",
        "&:hover": {
            transform: "translateY(-12px)",
            boxShadow: "0px 16px 40px rgba(79, 142, 62, 0.4)",
            borderColor: theme.palette.secondary.main,
        },
        "&:hover .project-image": {
            transform: "scale(1.1)",
        },
        "&:hover .project-overlay": {
            opacity: 1,
        },
    }));

    const ProjectImageContainer = styled(Box)(() => ({
        width: "100%",
        height: "220px",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#1a1a1a",
    }));

    const ProjectImage = styled("img")(() => ({
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.5s ease",
    }));

    const ProjectOverlay = styled(Box)(({ theme }) => ({
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(180deg, transparent 0%, ${theme.palette.primary.main}dd 100%)`,
        opacity: 0,
        transition: "opacity 0.4s ease",
        display: "flex",
        alignItems: "flex-end",
        padding: "20px",
    }));

    const ProjectContent = styled(Box)(({ theme }) => ({
        padding: "24px",
        [theme.breakpoints.down('sm')]: {
            padding: "16px",
        },
    }));

    const ProjectTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "12px",
    }));

    const ProjectDescription = styled(Typography)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        fontSize: "0.9rem",
        marginBottom: "16px",
        lineHeight: "1.6",
        opacity: 0.85,
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.85rem",
            marginBottom: "12px",
            lineHeight: "1.5",
        },
    }));

    const TechTag = styled(Box)(({ theme }) => ({
        display: "inline-block",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.contrastText,
        padding: "4px 12px",
        borderRadius: "12px",
        fontSize: "0.75rem",
        fontWeight: "600",
        marginRight: "8px",
        marginBottom: "8px",
        [theme.breakpoints.down('sm')]: {
            padding: "3px 8px",
            fontSize: "0.65rem",
            marginRight: "6px",
            marginBottom: "6px",
        },
    }));

    const ButtonStyle = styled("a")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `2px solid ${theme.palette.secondary.main}`,
        borderRadius: "12px",
        padding: "12px 24px",
        width: "100%",
        color: theme.palette.secondary.main,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        textDecoration: "none",
        cursor: "pointer",
        marginTop: "16px",
        fontWeight: "600",
        transition: "all 0.3s ease",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.contrastText,
            transform: "translateY(-2px)",
            boxShadow: "0px 8px 16px rgba(79, 142, 62, 0.3)",
        },
    }));

    const FeaturesList = styled("ul")(({ theme }) => ({
        listStyle: "none",
        padding: 0,
        margin: "16px 0",
        "& li": {
            display: "flex",
            alignItems: "flex-start",
            gap: "8px",
            marginBottom: "8px",
            fontSize: "0.85rem",
            color: theme.palette.primary.contrastText,
            opacity: 0.9,
            lineHeight: "1.5",
            "&::before": {
                content: '"▹"',
                color: theme.palette.secondary.main,
                fontWeight: "bold",
                fontSize: "1.2rem",
                marginTop: "-2px",
                flexShrink: 0,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: "0.8rem",
                marginBottom: "6px",
                gap: "6px",
            },
        }
    }));


    const SectionTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.secondary.main,
        fontSize: "0.9rem",
        fontWeight: "bold",
        marginBottom: "8px",
        marginTop: "8px",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
    }));

    const TechTagsContainer = styled(Box)(({ theme }) => ({
        display: "flex",
        flexWrap: "wrap",
        gap: "0px",
        [theme.breakpoints.down('sm')]: {
            flexWrap: "nowrap",
            overflowX: "auto",
            paddingBottom: "8px",
            "&::-webkit-scrollbar": {
                height: "4px",
            },
            "&::-webkit-scrollbar-track": {
                background: theme.palette.primary.main,
                borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
                background: theme.palette.secondary.main,
                borderRadius: "4px",
            },
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
                                Projetos
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
                    <Grid container justifyContent="center" spacing={4} sx={{ marginTop: 2, paddingBottom: 4 }}>
                        {projects.map((project, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} display="flex" justifyContent="center">
                                <AnimatedSection delay={index * 0.15} direction="up">
                                    <ProjectCard>
                                    <ProjectImageContainer>
                        <ProjectImage 
                            src={project.image} 
                            alt={project.title}
                            className="project-image"
                            loading="lazy"
                        />
                                        <ProjectOverlay className="project-overlay">
                                            <Typography 
                                                variant="caption" 
                                                sx={{ 
                                                    color: "primary.contrastText",
                                                    fontWeight: "600",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "1px"
                                                }}
                                            >
                                                Ver Detalhes
                                            </Typography>
                                        </ProjectOverlay>
                                    </ProjectImageContainer>
                                    
                                    <ProjectContent>
                                        <ProjectTitle>
                                            {project.title}
                                        </ProjectTitle>
                                        
                                        <ProjectDescription>
                                            {project.description}
                                        </ProjectDescription>
                                        
                                        <TechTagsContainer sx={{ marginBottom: 2 }}>
                                            {project.tags.map((tag, tagIndex) => (
                                                <TechTag key={tagIndex}>
                                                    {tag}
                                                </TechTag>
                                            ))}
                                        </TechTagsContainer>

                                        <SectionTitle>Principais Funcionalidades</SectionTitle>
                                        <FeaturesList>
                                            {project.features.map((feature, featureIndex) => (
                                                <li key={featureIndex}>{feature}</li>
                                            ))}
                                        </FeaturesList>
                                        
                                        <ButtonStyle 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <Typography fontWeight="600">Ver no GitHub</Typography>
                                        </ButtonStyle>
                                    </ProjectContent>
                                    </ProjectCard>
                                </AnimatedSection>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </StyledSection>
        </>
    );
};

export default Projects;
