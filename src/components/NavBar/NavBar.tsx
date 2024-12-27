import { Box, MenuItem, styled } from "@mui/material"

const NavBar = () => {

  const StyleToolbar = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "black",
    color: "white",
    boxSizing: "border-box",
  }))

  return (
    // <Box>
    <StyleToolbar>
      <MenuItem>Sobre</MenuItem>
      <MenuItem>Tecnologias</MenuItem>
      <MenuItem>Projetos</MenuItem>
    </StyleToolbar>
    // </Box>
  )
}

export default NavBar
