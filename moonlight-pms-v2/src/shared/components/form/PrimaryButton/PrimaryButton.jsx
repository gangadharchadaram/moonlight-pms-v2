import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export default function PrimaryButton({
  children,
  loading = false,
  fullWidth = false,
  variant = "contained",
  startIcon,
  endIcon,
  disabled = false,
  type = "button",
  onClick,
  sx = {},
}) {
  const commonStyles = {
    height: 52,
    borderRadius: "14px",
    textTransform: "none",
    fontSize: "15px",
    fontWeight: 600,
    transition: "all 0.25s ease",

    ...(variant === "contained" && {
      background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
      color: "#fff",
      boxShadow: "0 10px 25px rgba(37,99,235,0.25)",

      "&:hover": {
        background: "linear-gradient(135deg, #1D4ED8, #1E40AF)",
        transform: "translateY(-2px)",
        boxShadow: "0 15px 30px rgba(37,99,235,0.35)",
      },
    }),

    ...(variant === "outlined" && {
      border: "1.5px solid #CBD5E1",
      color: "#334155",
      backgroundColor: "#fff",

      "&:hover": {
        borderColor: "#2563EB",
        backgroundColor: "#F8FAFC",
      },
    }),

    "&.Mui-disabled": {
      background: "#CBD5E1",
      color: "#64748B",
      boxShadow: "none",
    },

    ...sx,
  };

  if (loading) {
    return (
      <LoadingButton
        loading
        variant={variant}
        fullWidth={fullWidth}
        disabled={disabled}
        type={type}
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
        sx={commonStyles}
      >
        {children}
      </LoadingButton>
    );
  }

  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      type={type}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      sx={commonStyles}
    >
      {children}
    </Button>
  );
}
