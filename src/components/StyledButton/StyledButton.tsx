import { styled } from "@mui/material"
import { ReactNode } from "react"


interface StyledButtonProps {
  children: ReactNode
  href?: string;
  target?: string;
  download?: string;
  as?: 'a' | 'button';
}

const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  href,
  download,
  target,
  as = "button",
}) => {
  const StyledButton = styled(as)(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  return (
    <StyledButton
      href={href} // Apenas será usado se for 'a'.
      download={download}
      target={target} // Apenas será usado se for 'a'.
    >
      {children}
    </StyledButton>
  );
};

export default StyledButton
