import { Box, Stack, Typography } from "@mui/material";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const steps = [
  "Hotel",
  "Admin",
  "Workspace",
  "Review",
];

export default function StepperHeader({ activeStep = 0 }) {
  return (
    <Box mb={6}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        {steps.map((step, index) => {
          const completed = index < activeStep;
          const active = index === activeStep;

          return (
            <Stack
              key={step}
              flex={1}
              alignItems="center"
              position="relative"
            >
              <MotionBox
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: .3 }}
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  fontWeight: 700,

                  zIndex: 2,

                  color: "#fff",

                  background:
                    completed || active
                      ? "linear-gradient(135deg,#2563EB,#1D4ED8)"
                      : "#E2E8F0",

                  boxShadow:
                    active
                      ? "0 0 0 8px rgba(37,99,235,.12)"
                      : "none",
                }}
              >
                {completed ? (
                  <Check size={18} />
                ) : (
                  index + 1
                )}
              </MotionBox>

              <Typography
                mt={1.5}
                fontWeight={600}
                fontSize={14}
                color={
                  active
                    ? "#2563EB"
                    : "#64748B"
                }
              >
                {step}
              </Typography>

              {index !== steps.length - 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 20,
                    left: "55%",
                    width: "90%",
                    height: 3,

                    background:
                      completed
                        ? "linear-gradient(90deg,#2563EB,#3B82F6)"
                        : "#E2E8F0",
                  }}
                />
              )}
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
}