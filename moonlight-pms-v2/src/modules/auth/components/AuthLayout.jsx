import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import BrandingPanel from "./BrandingPanel";

export default function AuthLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "#F8FAFC",
      }}
    >
      <BrandingPanel />

      <Box
  sx={{
    width: {
      xs: "100%",
      lg: "55%",
    },

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    px: 6,

    background:
      "linear-gradient(180deg,#F8FAFC,#EEF4FF)",
  }}
>
        <Outlet />
      </Box>
    </Box>
  );
}