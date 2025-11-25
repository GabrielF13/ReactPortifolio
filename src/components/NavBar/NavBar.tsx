import { Box, styled, Drawer, IconButton } from "@mui/material"
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
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
  }, []);

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
    setMobileMenuOpen(false); // Fecha o menu após clicar
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
      justifyContent: "space-between",
      padding: "0 20px",
    },
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
      boxShadow: "0px 4px 8px rgba(0, 212, 255, 0.4)",
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
    [theme.breakpoints.down('md')]: {
      display: "none",
    },
  }))

  const MobileMenuButton = styled(IconButton)(({ theme }) => ({
    display: "none",
    color: "white",
    [theme.breakpoints.down('md')]: {
      display: "block",
    },
  }))

  const Logo = styled(Box)(({ theme }) => ({
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
    display: "none",
    [theme.breakpoints.down('md')]: {
      display: "block",
    },
  }))

  const DrawerContent = styled(Box)(({ theme }) => ({
    width: "280px",
    height: "100%",
    backgroundColor: "#171616",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  }))

  const DrawerHeader = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  })

  const DrawerLink = styled(Box)<{ isActive: boolean }>(({ theme, isActive }) => ({
    color: "white",
    textDecoration: "none",
    padding: "16px 20px",
    borderRadius: "8px",
    fontSize: "1.1rem",
    fontWeight: isActive ? "bold" : "500",
    transition: "all 0.3s ease",
    backgroundColor: isActive ? theme.palette.secondary.main : "transparent",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      transform: "translateX(5px)",
    },
  }))

  const menuItems = [
    { id: "hero", label: "Início", icon: <HomeIcon /> },
    { id: "about", label: "Sobre", icon: <PersonIcon /> },
    { id: "education", label: "Formação", icon: <SchoolIcon /> },
    { id: "experience", label: "Experiência", icon: <WorkIcon /> },
    { id: "projects", label: "Projetos", icon: <CodeIcon /> },
    { id: "blog", label: "Blog", path: "/blog", icon: <ArticleIcon /> },
  ];

  const isActive = (item: typeof menuItems[0]) => {
    if (item.path) {
      return location.pathname.startsWith(item.path);
    }
    return activeSection === item.id;
  };

  return (
    <>
      <StyleToolbar>
        <Logo>GF</Logo>
        {menuItems.map((item) => (
          <StyledLink
            key={item.id}
            onClick={() => handleNavigation(item)}
            isActive={isActive(item)}
          >
            {item.label}
          </StyledLink>
        ))}
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
          <MenuIcon sx={{ fontSize: "2rem" }} />
        </MobileMenuButton>
      </StyleToolbar>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
          }
        }}
      >
        <DrawerContent>
          <DrawerHeader>
            <Logo>Gabriel Ferreira</Logo>
            <IconButton 
              onClick={() => setMobileMenuOpen(false)}
              sx={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </DrawerHeader>
          {menuItems.map((item) => (
            <DrawerLink
              key={item.id}
              onClick={() => handleNavigation(item)}
              isActive={isActive(item)}
            >
              {item.icon}
              {item.label}
            </DrawerLink>
          ))}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NavBar
