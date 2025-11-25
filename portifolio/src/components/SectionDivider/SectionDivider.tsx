import { Box, styled } from "@mui/material";

interface SectionDividerProps {
    variant?: "default" | "wave" | "dots";
}

const SectionDivider = ({ variant = "default" }: SectionDividerProps) => {
    const DividerContainer = styled(Box)(({ theme }) => ({
        width: "100%",
        height: "4px",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(90deg, transparent, ${theme.palette.secondary.main}, transparent)`,
        animation: "shimmer 3s infinite",
        "@keyframes shimmer": {
            "0%": {
                backgroundPosition: "-100% 0",
            },
            "100%": {
                backgroundPosition: "100% 0",
            },
        },
    }));

    const WaveDivider = styled(Box)(() => ({
        width: "100%",
        height: "60px",
        position: "relative",
        overflow: "hidden",
        "& svg": {
            display: "block",
            width: "100%",
            height: "100%",
        },
    }));

    const DotsDivider = styled(Box)(({ theme }) => ({
        width: "100%",
        height: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        "& .dot": {
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: theme.palette.secondary.main,
            animation: "pulse 2s infinite",
            "&:nth-of-type(2)": {
                animationDelay: "0.3s",
            },
            "&:nth-of-type(3)": {
                animationDelay: "0.6s",
            },
        },
        "@keyframes pulse": {
            "0%, 100%": {
                transform: "scale(1)",
                opacity: 0.5,
            },
            "50%": {
                transform: "scale(1.5)",
                opacity: 1,
            },
        },
    }));

    if (variant === "wave") {
        return (
            <WaveDivider>
                <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
                    <path
                        d="M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z"
                        fill="currentColor"
                        opacity="0.3"
                    />
                </svg>
            </WaveDivider>
        );
    }

    if (variant === "dots") {
        return (
            <DotsDivider>
                <Box className="dot" />
                <Box className="dot" />
                <Box className="dot" />
            </DotsDivider>
        );
    }

    return <DividerContainer />;
};

export default SectionDivider;

