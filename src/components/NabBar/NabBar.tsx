import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"


const NavBar = () => {

    const StyleToolbar = styled(Toolbar)(({theme}) => ({
       display: "flex",
       justifyContent: "space-evenly",
    

    }))

    return (
      <>
        <AppBar position="absolute">
            <MenuItem>Sobre</MenuItem>
            <MenuItem>Tecnologias</MenuItem>
            <MenuItem>Projetos</MenuItem>
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  