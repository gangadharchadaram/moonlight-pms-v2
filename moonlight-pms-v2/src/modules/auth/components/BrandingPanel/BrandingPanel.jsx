import { Box, Stack, Typography } from "@mui/material";
import { Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function BrandingPanel() {
  return (
    <Box
      sx={{
        width: {
          xs: 0,
          lg: "45%",
        },
        display: {
          xs: "none",
          lg: "flex",
        },
        justifyContent: "center",
        flexDirection: "column",
        px: 8,
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        background:
          "linear-gradient(135deg,#0F172A 0%,#1E293B 60%,#2563EB 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
        }}
      >
        {/* Top Glow */}
        <Box
          sx={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,.12), transparent)",
            top: -180,
            right: -120,
            zIndex: 0,
          }}
        />

        {/* Bottom Glow */}
        <Box
          sx={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,.25), transparent)",
            bottom: -120,
            left: -100,
            zIndex: 0,
          }}
        />

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ mb: 8 }}
        >
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: 3,
              bgcolor: "rgba(255,255,255,.12)",
              backdropFilter: "blur(16px)",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Moon size={26} />
          </Box>

          <Box>
            <Typography fontSize={26} fontWeight={700}>
              MoonLight PMS
            </Typography>

            <Typography color="#CBD5E1">
              Enterprise Hotel Platform
            </Typography>
          </Box>
        </Stack>

        <Typography
          sx={{
            fontSize: "4rem",
            fontWeight: 800,
            lineHeight: 1.1,
            mb: 4,
          }}
        >
          Manage Every
          <br />
          Stay Beautifully.
        </Typography>

        <Typography
          sx={{
            color: "#CBD5E1",
            fontSize: 18,
            lineHeight: 1.9,
            maxWidth: 430,
          }}
        >
          Simplify reservations, guest management,
          housekeeping, billing and reporting—
          all from one modern cloud platform.
        </Typography>

        <Typography
          sx={{
            mt: 8,
            color: "#94A3B8",
            fontSize: 15,
          }}
        >
          Trusted by Hotels • Resorts • Motels
        </Typography>
      </motion.div>
    </Box>
  );
}