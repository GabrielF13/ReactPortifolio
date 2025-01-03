import { Box, Typography, Link, styled } from '@mui/material';

const Footer = () => {
  const FooterContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#171616",
    color: theme.palette.secondary.contrastText,
    padding: theme.spacing(3),
  }));

  const FooterLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
    flexWrap: 'wrap',
  }));

  return (
    <FooterContainer>
      <FooterLinks>
        <Link href="/about" color="inherit" underline="hover">
          Sobre
        </Link>
        <Link href="mailto:gabrielferreiracunha@gmail.com?subject=Contato&body=Olá Gabriel, gostaria de falar sobre..." color="inherit" underline="hover">
          Contato
        </Link>
        <Link href="https://github.com/GabrielF13" target="_blank"  color="inherit" underline="hover"> 
            GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/gabriel-ferreira-cunha/" target="_blank"  color="inherit" underline="hover">
          Linkedin
        </Link>
      </FooterLinks>
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} Gabriel Ferreira. Todos os direitos reservados.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;