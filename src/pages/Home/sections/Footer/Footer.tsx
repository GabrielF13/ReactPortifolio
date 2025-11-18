import { Box, Typography, Link, styled, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';

const Footer = () => {
  const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "#0f0f0f",
    color: theme.palette.primary.contrastText,
    padding: "60px 0 30px 0",
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

  const FooterSection = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(3),
  }));

  const SectionTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    position: "relative",
    paddingBottom: "10px",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "40px",
      height: "3px",
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "2px",
    },
  }));

  const FooterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: theme.spacing(1.5),
    transition: "all 0.3s ease",
    opacity: 0.8,
    "&:hover": {
      color: theme.palette.secondary.main,
      opacity: 1,
      transform: "translateX(5px)",
    },
  }));

  const SocialIcon = styled(Box)(({ theme }) => ({
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    border: `2px solid transparent`,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      transform: "translateY(-5px) rotate(5deg)",
      borderColor: theme.palette.secondary.main,
      boxShadow: "0px 8px 20px rgba(79, 142, 62, 0.4)",
    },
  }));

  const CopyrightSection = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(3),
    borderTop: `1px solid ${theme.palette.primary.light}`,
    textAlign: "center",
  }));

  const BrandText = styled(Typography)(({ theme }) => ({
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(1),
    "& span": {
      color: theme.palette.secondary.main,
    },
  }));

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Seção Sobre */}
          <Grid size={{ xs: 12, md: 4 }}>
            <FooterSection>
              <BrandText>
                Gabriel <span>Ferreira</span>
              </BrandText>
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.7, 
                  lineHeight: 1.8,
                  marginTop: 2 
                }}
              >
                Desenvolvedor Back-End especializado em .NET, C# e arquiteturas escaláveis. 
                Transformando ideias em soluções robustas.
              </Typography>
            </FooterSection>
          </Grid>

          {/* Seção Links Rápidos */}
          <Grid size={{ xs: 12, md: 4 }}>
            <FooterSection>
              <SectionTitle>Links Rápidos</SectionTitle>
              <FooterLink href="/">
                <CodeIcon fontSize="small" />
                Início
              </FooterLink>
              <FooterLink href="/about">
                <CodeIcon fontSize="small" />
                Sobre
              </FooterLink>
              <FooterLink href="/experience">
                <CodeIcon fontSize="small" />
                Experiência
              </FooterLink>
              <FooterLink href="/projects">
                <CodeIcon fontSize="small" />
                Projetos
              </FooterLink>
            </FooterSection>
          </Grid>

          {/* Seção Contato */}
          <Grid size={{ xs: 12, md: 4 }}>
            <FooterSection>
              <SectionTitle>Conecte-se</SectionTitle>
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.7, 
                  marginBottom: 2 
                }}
              >
                Vamos conversar sobre projetos e oportunidades!
              </Typography>
              <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
                <Link 
                  href="https://github.com/GabrielF13" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <SocialIcon>
                    <GitHubIcon />
                  </SocialIcon>
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/gabriel-ferreira-cunha/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <SocialIcon>
                    <LinkedInIcon />
                  </SocialIcon>
                </Link>
                <Link 
                  href="mailto:gabrielferreiracunha@gmail.com?subject=Contato&body=Olá Gabriel, gostaria de falar sobre..."
                >
                  <SocialIcon>
                    <EmailIcon />
                  </SocialIcon>
                </Link>
              </Box>
            </FooterSection>
          </Grid>
        </Grid>

        <CopyrightSection>
          <Typography 
            variant="body2" 
            sx={{ 
              opacity: 0.6,
              fontSize: "0.9rem" 
            }}
          >
            © {new Date().getFullYear()} Gabriel Ferreira. Todos os direitos reservados.
          </Typography>
          <Typography 
            variant="caption" 
            sx={{ 
              opacity: 0.5,
              display: "block",
              marginTop: 1 
            }}
          >
            Desenvolvido com 💚 e React + TypeScript
          </Typography>
        </CopyrightSection>
      </Container>
    </FooterContainer>
  );
};

export default Footer;