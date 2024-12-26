import { styled } from "@mui/material"


const Hero = () => {

    const StyleHero = styled("div")(() => ({
        backgroundColor: "black"
    }))

    return (
      <>
        <StyleHero>
            Hello
        </StyleHero>
      </>
    )
  }
  
  export default Hero
  