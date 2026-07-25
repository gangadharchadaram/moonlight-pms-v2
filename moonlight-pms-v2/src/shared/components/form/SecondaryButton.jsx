import { Button } from "@mui/material";

export default function SecondaryButton({
  children,
  ...props
}) {
  return (
    <Button
      variant="outlined"
      {...props}
      sx={{
        borderRadius: "12px",
        px: 4,
        py: 1.5,
        textTransform: "none",
        fontWeight: 600,
        borderColor: "#CBD5E1",
        color: "#334155",

        "&:hover": {
          borderColor: "#2563EB",
          backgroundColor: "#EFF6FF",
        },

        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
}