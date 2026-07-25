import { Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export default function AuthFormContainer({ children }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      sx={{
        width: "100%",
        maxWidth: 600,

        p: 4,

        borderRadius: "24px",

        background: "rgba(255,255,255,.82)",

        backdropFilter: "blur(24px)",

        border: "1px solid #E2E8F0",

        boxShadow:
          "0 30px 80px rgba(15,23,42,.08)",
      }}
    >
      {children}
    </MotionBox>
  );
}