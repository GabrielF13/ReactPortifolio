import { Box, styled, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material"
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import TerminalIcon from '@mui/icons-material/Terminal';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Só ativa o scroll listener se estiver na home
    if (location.pathname !== '/') {
      return;
    }

    const handleScroll = () => {
      const sections = ["hero", "about", "education", "experience", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  const handleNavigation = (item: { id: string; label: string; path?: string }) => {
    setMobileMenuOpen(false); // Fecha o menu mobile ao clicar
    
    if (item.path) {
      navigate(item.path);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(item.id), 100);
      } else {
        scrollToSection(item.id);
      }
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const StyleToolbar = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "70px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#171616",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
    boxSizing: "border-box",
    padding: "0 20px",
    [theme.breakpoints.down('md')]: {
      height: "60px",
      padding: "0 16px",
      justifyContent: "space-between",
    },
  }))

  const DesktopMenu = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
      display: "none",
    },
  }))

  const MobileMenuButton = styled(IconButton)(({ theme }) => ({
    display: "none",
    color: "white",
    [theme.breakpoints.down('md')]: {
      display: "flex",
    },
  }))

  const MobileLogo = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "8px",
    color: theme.palette.secondary.main,
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    [theme.breakpoints.down('md')]: {
      display: "flex",
    },
    "& svg": {
      fontSize: "1.5rem",
      transition: "transform 0.3s ease",
    },
    "&:hover": {
      transform: "scale(1.1)",
    },
    "&:hover svg": {
      transform: "rotate(360deg)",
    },
  }))

  const MobileMenuTitle = styled(Box)(({ theme }) => ({
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  }))

  const StyledLink = styled(Box)<{ isActive: boolean }>(({ theme, isActive }) => ({
    color: "white",
    textDecoration: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: isActive ? "bold" : "500",
    position: "relative",
    transition: "all 0.3s ease",
    backgroundColor: isActive ? theme.palette.secondary.main : "transparent",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      transform: "translateY(-2px)",
      boxShadow: "0px 4px 8px rgba(79, 142, 62, 0.4)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: isActive ? "80%" : "0%",
      height: "3px",
      backgroundColor: theme.palette.primary.contrastText,
      transition: "width 0.3s ease",
    },
    "&:hover::after": {
      width: "80%",
    },
  }))

  const StyledDrawer = styled(Drawer)(({ theme }) => ({
    "& .MuiDrawer-paper": {
      backgroundColor: "#171616",
      width: "280px",
      padding: theme.spacing(2),
    },
  }))

  const DrawerHeader = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
    paddingBottom: "16px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  })

  const MobileMenuItem = styled(ListItem)<{ isActive: boolean }>(({ theme, isActive }) => ({
    borderRadius: "8px",
    marginBottom: "8px",
    backgroundColor: isActive ? theme.palette.secondary.main : "transparent",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      transform: "translateX(8px)",
    },
    "& .MuiListItemText-primary": {
      color: "white",
      fontWeight: isActive ? "bold" : "500",
      fontSize: "1.1rem",
    },
  }))

  const menuItems = [
    { id: "hero", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "education", label: "Formação" },
    { id: "experience", label: "Experiência" },
    { id: "projects", label: "Projetos" },
    { id: "blog", label: "Blog", path: "/blog" },
  ];

  const isActive = (item: typeof menuItems[0]) => {
    // Se tiver path (como /blog), verifica se está nessa rota
    if (item.path) {
      return location.pathname.startsWith(item.path);
    }
    // Se não estiver na home, nenhuma seção está ativa
    if (location.pathname !== '/') {
      return false;
    }
    // Se estiver na home, verifica a seção ativa pelo scroll
    return activeSection === item.id;
  };

  return (
    <>
      <StyleToolbar>
        {/* Logo Mobile - Apenas visível no mobile */}
        <MobileLogo onClick={scrollToTop}>
          <TerminalIcon />
        </MobileLogo>

        {/* Menu Desktop - Centralizado */}
        <DesktopMenu>
          {menuItems.map((item) => (
            <StyledLink
              key={item.id}
              onClick={() => handleNavigation(item)}
              isActive={isActive(item)}
            >
              {item.label}
            </StyledLink>
          ))}
        </DesktopMenu>

        {/* Botão Menu Mobile - Apenas hambúrguer */}
        <MobileMenuButton
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <MenuIcon />
        </MobileMenuButton>
      </StyleToolbar>

      {/* Drawer Mobile */}
      <StyledDrawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <DrawerHeader>
          <MobileMenuTitle>Gabriel Ferreira</MobileMenuTitle>
          <IconButton
            onClick={() => setMobileMenuOpen(false)}
            sx={{ color: "white" }}
            aria-label="Fechar menu"
          >
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        <List>
          {menuItems.map((item) => (
            <MobileMenuItem
              key={item.id}
              onClick={() => handleNavigation(item)}
              isActive={isActive(item)}
            >
              <ListItemText primary={item.label} />
            </MobileMenuItem>
          ))}
        </List>
      </StyledDrawer>
    </>
  )
}

export default NavBar
