import { Button, Container, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
// import Paper from '@mui/material/Paper';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));


const Hero = () => {

    const StyleHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh",
    }))

    const StyledImg = styled("img")(() => ({
      width: "100%",
      borderRadius: "50%"
    }))

    return (
      <>
        <StyleHero>
          <Container maxWidth={"lg"}>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }} >
                <StyledImg src={Avatar} alt="avatar" />
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography color="primary" variant="h1" textAlign={"center"}>Olá, eu sou o Gabriel</Typography>
                <Typography color="primary" variant="h2" textAlign={"center"}>Sou Desenvolvedor Back-End</Typography>
                <Grid container display={"flex"} justifyContent={"center"}>
                  <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                    <Button> <DownloadIcon/> Download CV</Button>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                    <Button> <EmailIcon/>Fale Comigo</Button>
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
  