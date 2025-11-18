import { Box, Container, styled, Typography, Chip } from "@mui/material"
import Grid from '@mui/material/Grid2';
import Avatar from "../../../../assets/images/avatar.jpg"
import CvFile from "../../../../assets/Attachment/Curriculo Gabriel Ferreira.pdf.pdf"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";


const Hero = () => {

  const StyleHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100dvh",
    display: "flex",
    alignItems: "center",
    paddingTop: "80px",
    paddingBottom: "60px",
    position: "relative",
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "4px",
      background: `linear-gradient(90deg, transparent, ${theme.palette.secondary.main}, transparent)`,
    },
  }))

  const ImageContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  }))

  const StyledImg = styled("img")(({ theme }) => ({
    width: "280px",
    height: "280px",
    borderRadius: "50%",
    border: `4px solid ${theme.palette.secondary.main}`,
    boxShadow: "0px 12px 40px rgba(79, 142, 62, 0.3)",
    objectFit: "cover",
    position: "relative",
    zIndex: 2,
    transition: "all 0.4s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 16px 50px rgba(79, 142, 62, 0.5)",
    },
    [theme.breakpoints.down('md')]: {
      width: "220px",
      height: "220px",
    },
  }))

  const ImageGlow = styled(Box)(({ theme }) => ({
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${theme.palette.secondary.main}40 0%, transparent 70%)`,
    animation: "pulse 3s ease-in-out infinite",
    "@keyframes pulse": {
      "0%, 100%": {
        transform: "scale(1)",
        opacity: 0.5,
      },
      "50%": {
        transform: "scale(1.1)",
        opacity: 0.8,
      },
    },
    [theme.breakpoints.down('md')]: {
      width: "240px",
      height: "240px",
    },
  }))

  const ContentBox = styled(Box)(({ theme }) => ({
    textAlign: "left",
    [theme.breakpoints.down('md')]: {
      textAlign: "center",
    },
  }))

  const Greeting = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: "1.3rem",
    fontWeight: "600",
    marginBottom: theme.spacing(1),
    letterSpacing: "2px",
    textTransform: "uppercase",
  }))

  const MainTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    lineHeight: 1.2,
    "& span": {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: "2.5rem",
    },
  }))

  const Subtitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: "1.5rem",
    marginBottom: theme.spacing(3),
    opacity: 0.9,
    [theme.breakpoints.down('md')]: {
      fontSize: "1.2rem",
    },
  }))

  const Description = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: "1rem",
    marginBottom: theme.spacing(4),
    opacity: 0.7,
    lineHeight: 1.8,
    maxWidth: "600px",
    [theme.breakpoints.down('md')]: {
      maxWidth: "100%",
    },
  }))

  const ButtonPrimary = styled("a")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    padding: "14px 32px",
    borderRadius: "12px",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "600",
    fontSize: "1rem",
    border: `2px solid ${theme.palette.secondary.main}`,
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
      transform: "translateY(-3px)",
      boxShadow: "0px 8px 20px rgba(79, 142, 62, 0.4)",
    },
  }))

  const ButtonSecondary = styled("a")(({ theme }) => ({
    backgroundColor: "transparent",
    color: theme.palette.primary.contrastText,
    padding: "14px 32px",
    borderRadius: "12px",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "600",
    fontSize: "1rem",
    border: `2px solid ${theme.palette.primary.contrastText}`,
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
      transform: "translateY(-3px)",
      boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.2)",
    },
  }))

  const SocialLink = styled("a")(({ theme }) => ({
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    transition: "all 0.3s ease",
    border: `2px solid transparent`,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      transform: "translateY(-5px) rotate(5deg)",
      boxShadow: "0px 8px 20px rgba(79, 142, 62, 0.4)",
    },
  }))

  const TechChip = styled(Chip)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    fontWeight: "600",
    border: `1px solid ${theme.palette.secondary.main}40`,
    margin: "4px",
  }))

  return (
    <>
      <StyleHero>
        <Box position="absolute" width={"100%"} height={"100%"} top={0} left={0} sx={{ opacity: 0.3 }}>
          <AnimatedBackground />
        </Box>

        <Container maxWidth={"lg"} sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Coluna da Imagem */}
            <Grid size={{ xs: 12, md: 5 }}>
              <ImageContainer>
                <ImageGlow />
                <StyledImg src={Avatar} alt="Gabriel Ferreira" loading="eager" />
              </ImageContainer>
            </Grid>

            {/* Coluna do Conteúdo */}
            <Grid size={{ xs: 12, md: 7 }}>
              <ContentBox>
                <Greeting>Olá, Bem-vindo!</Greeting>
                
                <MainTitle>
                  Eu sou <span>Gabriel Ferreira</span>
                </MainTitle>
                
                <Subtitle>
                  Desenvolvedor Back-End
                </Subtitle>
                
                <Description>
                  Especializado em .NET, C# e arquiteturas escaláveis. 
                  Apaixonado por criar soluções robustas e eficientes que 
                  transformam ideias em realidade.
                </Description>

                {/* Chips de Tecnologia */}
                <Box sx={{ marginBottom: 4 }}>
                  <TechChip label="C#" size="small" />
                  <TechChip label=".NET Core" size="small" />
                  <TechChip label="SQL Server" size="small" />
                  <TechChip label="Docker" size="small" />
                  <TechChip label="Clean Architecture" size="small" />
                </Box>

                {/* Botões de Ação */}
                <Box 
                  sx={{ 
                    display: "flex", 
                    gap: 2, 
                    marginBottom: 3,
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", md: "flex-start" }
                  }}
                >
                  <ButtonPrimary
                    href={CvFile}
                    download="Gabriel_Ferreira_CV.pdf"
                  >
                    <DownloadIcon />
                    Download CV
                  </ButtonPrimary>
                  
                  <ButtonSecondary
                    href="mailto:gabrielferreiracunha@gmail.com?subject=Contato&body=Olá Gabriel, gostaria de falar sobre..."
                  >
                    <EmailIcon />
                    Fale Comigo
                  </ButtonSecondary>
                </Box>

                {/* Links Sociais */}
                <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
                  <SocialLink 
                    href="https://github.com/GabrielF13" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GitHubIcon />
                  </SocialLink>
                  
                  <SocialLink 
                    href="https://www.linkedin.com/in/gabriel-ferreira-cunha/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </SocialLink>
                </Box>
              </ContentBox>
            </Grid>
          </Grid>
        </Container>
      </StyleHero>
    </>
  )
}

export default Hero
