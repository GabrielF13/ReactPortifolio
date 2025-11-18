import { Box, styled } from "@mui/material"
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Limpar activeSection quando não estiver na home
    if (location.pathname !== '/') {
      setActiveSection("");
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
    [theme.breakpoints.down('sm')]: {
      height: "60px",
      gap: "5px",
      padding: "0 10px",
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
    [theme.breakpoints.down('sm')]: {
      padding: "8px 12px",
      fontSize: "0.85rem",
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
    if (item.path) {
      return location.pathname.startsWith(item.path);
    }
    return activeSection === item.id;
  };

  return (
    <StyleToolbar>
      {menuItems.map((item) => (
        <StyledLink
          key={item.id}
          onClick={() => handleNavigation(item)}
          isActive={isActive(item)}
        >
          {item.label}
        </StyledLink>
      ))}
    </StyleToolbar>
  )
}

export default NavBar
