import { Divider, Container, styled, Typography, Box } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import theme from "../../../../theme";
import AnimatedSection from "../../../../components/AnimatedSection/AnimatedSection";
import { motion } from "framer-motion";

const About = () => {

    const StyleAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        padding: "60px 0",
        boxSizing: "border-box",
    }))

    const StyleTech = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.dark,
        display: "flex",
        minHeight: "50vh",
        alignItems: "center",
        padding: "60px 0",
        boxSizing: "border-box",
    }))

    const StyleTitle = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        padding: "40px 0 20px 0",
        textAlign: "center",
        boxSizing: "border-box",
    }))

    const StyleTechTitle = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.dark,
        padding: "40px 0 20px 0",
        textAlign: "center",
        boxSizing: "border-box",
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
    }))

    const AboutCard = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        borderRadius: "16px",
        padding: "40px",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease",
        "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 12px 32px rgba(79, 142, 62, 0.3)",
        },
        [theme.breakpoints.down('md')]: {
            padding: "30px 20px",
        },
    }))

    const TechCategory = styled(Box)(() => ({
        marginBottom: "40px",
    }))

    const CategoryTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.secondary.main,
        fontSize: "1.3rem",
        fontWeight: "bold",
        marginBottom: "20px",
        textAlign: "left",
        position: "relative",
        paddingLeft: "20px",
        "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: "6px",
            height: "24px",
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "3px",
        },
    }))

    const TechChip = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        padding: "14px 24px",
        color: theme.palette.primary.contrastText,
        fontSize: "0.95rem",
        fontWeight: "600",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        borderRadius: "30px",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        border: `2px solid transparent`,
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: `linear-gradient(120deg, transparent, rgba(79, 142, 62, 0.3), transparent)`,
            transition: "left 0.6s",
        },
        "&::after": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(0)",
            width: "100%",
            height: "100%",
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "30px",
            transition: "transform 0.4s ease",
            zIndex: -1,
        },
        "&:hover": {
            transform: "translateY(-5px) scale(1.05)",
            borderColor: theme.palette.secondary.main,
            boxShadow: "0px 12px 24px rgba(79, 142, 62, 0.4)",
        },
        "&:hover::before": {
            left: "100%",
        },
        "&:hover::after": {
            transform: "translate(-50%, -50%) scale(1)",
        },
    }))

    

    const techCategories = [
        {
            category: "Backend",
            icon: "💻",
            technologies: ["C#", ".NET Core", ".NET Framework", "ASP.NET Core", "Entity Framework", "Web API"]
        },
        {
            category: "Banco de Dados",
            icon: "🗄️",
            technologies: ["SQL Server", "PostgreSQL", "T-SQL", "Entity Framework", "Dapper", "Redis"]
        },
        {
            category: "Mensageria & Filas",
            icon: "📨",
            technologies: ["RabbitMQ", "Kafka", "Message Queues", "Event-Driven Architecture"]
        },
        {
            category: "DevOps & Cloud",
            icon: "☁️",
            technologies: ["Docker", "Azure DevOps", "CI/CD", "AWS", "Git", "Blob Storage"]
        },
        {
            category: "Arquitetura & Padrões",
            icon: "🏗️",
            technologies: ["Clean Architecture", "SOLID", "DDD", "Design Patterns", "Microservices"]
        },
        {
            category: "Testes",
            icon: "🧪",
            technologies: ["xUnit", "NUnit", "Moq", "TDD", "Integration Tests"]
        },
        {
            category: "Metodologias",
            icon: "📋",
            technologies: ["SCRUM", "Agile", "Code Review", "Git Flow"]
        },
        {
            category: "Ferramentas",
            icon: "🛠️",
            technologies: ["Visual Studio", "VS Code", "Postman", "SQL Server Management Studio"]
        }
    ];

    return (
        <>
            <StyleTitle>
                <Container maxWidth={"lg"} >
                    <Grid container >
                        <Grid size={{ xs: 12, md: 12 }} >
                            <Typography 
                                color="primary.contrastText" 
                                variant="h3" 
                                textAlign={"center"} 
                                fontWeight="bold"
                                sx={{
                                    position: "relative",
                                    display: "inline-block",
                                    width: "100%",
                                }}
                            >
                                Sobre
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
            </StyleTitle>

            <StyleAbout>
                <Container maxWidth={"lg"} >
                    <Grid container justifyContent="center">
                        <Grid size={{ xs: 12, md: 12 }} >
                            <AnimatedSection delay={0.2} direction="up">
                                <AboutCard>
                                <Typography 
                                    color="primary.contrastText" 
                                    textAlign={"justify"} 
                                    fontSize="1.1rem"
                                    lineHeight="1.8"
                                    paragraph
                                >
                                    Atualmente, atuo como <strong style={{ color: theme.palette.secondary.main }}>Desenvolvedor Back-End na GFT Technologies</strong>, onde contribuo para o desenvolvimento e manutenção de microserviços e APIs em C# e ASP.NET. Desde 2022, acumulo experiência no desenvolvimento de aplicações robustas e escaláveis, aplicando princípios de Clean Code, SOLID e Clean Architecture para garantir qualidade e flexibilidade na arquitetura.
                                </Typography>
                                <Typography 
                                    color="primary.contrastText" 
                                    textAlign={"justify"} 
                                    fontSize="1.1rem"
                                    lineHeight="1.8"
                                    paragraph
                                >
                                    Tenho expertise na implementação de soluções utilizando <strong style={{ color: theme.palette.secondary.main }}>.NET Core, Framework, Docker, RabbitMQ, SQL Server e PostgreSQL</strong>, além de habilidades em JavaScript, HTML e CSS. Participo de todas as etapas do ciclo de vida do desenvolvimento de software, desde a concepção até a entrega e manutenção, trabalhando em ambientes ágeis com metodologias como SCRUM.
                                </Typography>
                                <Typography 
                                    color="primary.contrastText" 
                                    textAlign={"justify"} 
                                    fontSize="1.1rem"
                                    lineHeight="1.8"
                                >
                                    Com foco na resolução de bugs, otimização de sistemas e implementação de novas funcionalidades, colaboro para entregar valor em soluções corporativas, ajudando empresas a alcançar seus objetivos com eficiência e inovação.
                                </Typography>
                                </AboutCard>
                            </AnimatedSection>
                        </Grid>
                    </Grid>
                </Container>
            </StyleAbout>

            <StyleTechTitle>
                <Container maxWidth={"lg"}>
                    <Grid container >
                        <Grid size={{ xs: 12, md: 12 }} >
                            <Typography 
                                color="primary.contrastText" 
                                variant="h3" 
                                textAlign={"center"}
                                fontWeight="bold"
                            >
                                Tecnologias
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
            </StyleTechTitle>

            <StyleTech>
                <Container maxWidth={"lg"} >
                    <Box
                        sx={{
                            padding: { xs: 3, md: 5 },
                        }}
                    >
                        <Grid container spacing={4}>
                            {techCategories.map((category, catIndex) => (
                                <Grid size={{ xs: 12, md: 6, lg: 3 }} key={catIndex}>
                                    <AnimatedSection delay={catIndex * 0.1} direction="up">
                                        <TechCategory>
                                            <CategoryTitle>
                                                <Box component="span" sx={{ fontSize: "1.5rem", marginRight: "8px" }}>
                                                    {category.icon}
                                                </Box>
                                                {category.category}
                                            </CategoryTitle>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                    gap: "12px",
                                                }}
                                            >
                                                {category.technologies.map((tech: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, techIndex: Key | null | undefined) => (
                                                    <motion.div
                                                        key={techIndex}
                                                        initial={{ scale: 0, opacity: 0 }}
                                                        whileInView={{ scale: 1, opacity: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{
                                                            duration: 0.3,
                                                            delay: catIndex * 0.1 + (techIndex as number) * 0.05,
                                                            type: "spring",
                                                            stiffness: 260,
                                                            damping: 20
                                                        }}
                                                    >
                                                        <TechChip>
                                                            <Box
                                                                component="span"
                                                                sx={{
                                                                    width: "6px",
                                                                    height: "6px",
                                                                    borderRadius: "50%",
                                                                    backgroundColor: "secondary.main",
                                                                }}
                                                            />
                                                            {tech}
                                                        </TechChip>
                                                    </motion.div>
                                                ))}
                                            </Box>
                                        </TechCategory>
                                    </AnimatedSection>
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
