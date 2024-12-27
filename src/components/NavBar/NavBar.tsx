import { Box, MenuItem, styled } from "@mui/material"

const NavBar = () => {

  const StyleToolbar = styled(Box)(() => ({
    display: "flex",
    height: "50px",
    justifyContent: "space-evenly",
    backgroundColor: "#171616",
    color: "white",
    position: "relative",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
    boxSizing: "border-box",
  }))

  return (
    <StyleToolbar>
      <MenuItem>Sobre</MenuItem>
      <MenuItem>Tecnologias</MenuItem>
      <MenuItem>Projetos</MenuItem>
    </StyleToolbar>
  )
}

export default NavBar
