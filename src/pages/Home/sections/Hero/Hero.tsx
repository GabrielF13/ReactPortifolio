import { Box, Container, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import Avatar from "../../../../assets/images/avatar.jpg"
import CvFile from "../../../../assets/Attachment/Curriculo Gabriel Ferreira.pdf.pdf"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";


const Hero = () => {

  const StyleHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100dvh",
    display: "flex",
    alignItems: "center",
    paddingBottom: "20px",
  }))

  const StyledImg = styled("img")(({ theme }) => ({
    width: "70%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }))

  return (
    <>
      <StyleHero>
        <Container maxWidth={"lg"}>

          <Grid container >
            <Grid size={{ xs: 12, md: 5 }} >

              <Box position="relative">

                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>

                <Box position="relative" textAlign="center" mt={"15px"}>
                  <StyledImg src={Avatar} alt="avatar" />
                </Box>

              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography color="primary.contrastText" variant="h1" textAlign={"center"} pb={2}>Olá, eu sou o Gabriel</Typography>
              <Typography color="secondary" variant="h2" textAlign={"center"}>Sou Desenvolvedor Back-End</Typography>
              <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                  <StyledButton
                    href={CvFile}
                    download="Gabriel_CV.pdf"
                    as="a"
                  >
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                  <StyledButton
                    href="mailto:gabrielferreiracunha@gmail.com?subject=Contato&body=Olá Gabriel, gostaria de falar sobre..."
                    as="a"
                  >
                    <EmailIcon />
                    <Typography>Fale Comigo</Typography>
                  </StyledButton>
                </Grid>
              </Grid>

            </Grid>
          </Grid>

        </Container>

      </StyleHero>
    </>
  )
}

export default Hero
