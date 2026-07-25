import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export default function AuthHeader({
  title,
  subtitle,
  align = "left",
}) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
      }}
      sx={{
        mb: 5,
        textAlign: align,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: "#0F172A",
          lineHeight: 1.1,
          letterSpacing: "-0.5px",
          fontSize: {
            xs: "2rem",
            md: "2.5rem",
          },
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          mt: 1.5,
          color: "#64748B",
          fontSize: "1rem",
          lineHeight: 1.7,
        }}
      >
        {subtitle}
      </Typography>
    </MotionBox>
  );
}