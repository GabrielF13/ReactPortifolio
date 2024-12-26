import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"


const NavBar = () => {

    const StyleToolbar = styled(Toolbar)(() => ({
       display: "flex",
       justifyContent: "space-evenly",
    
    }))

    return (
      <>
        <AppBar position="absolute">
            <StyleToolbar>
                <MenuItem>Sobre</MenuItem>
                <MenuItem>Tecnologias</MenuItem>
                <MenuItem>Projetos</MenuItem>
            </StyleToolbar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  