import { Box, Paper, Stack, Typography } from "@mui/material";
import {
  BedDouble,
  CalendarDays,
  CreditCard,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const MotionPaper = motion.create(Paper);

const cards = [
  {
    title: "Reservations",
    value: "128",
    icon: CalendarDays,
  },
  {
    title: "Guests",
    value: "64",
    icon: Users,
  },
  {
    title: "Rooms",
    value: "42",
    icon: BedDouble,
  },
  {
    title: "Revenue",
    value: "$18.4K",
    icon: CreditCard,
  },
];

export default function HotelIllustration() {
  return (
    <Stack spacing={2}>
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <MotionPaper
            key={card.title}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.15,
            }}
            elevation={0}
            sx={{
              p: 2.5,
              borderRadius: 4,

              bgcolor: "rgba(255,255,255,.08)",

              backdropFilter: "blur(18px)",

              border:
                "1px solid rgba(255,255,255,.12)",

              color: "#fff",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  fontSize={13}
                  color="#CBD5E1"
                >
                  {card.title}
                </Typography>

                <Typography
                  fontWeight={700}
                  fontSize={28}
                >
                  {card.value}
                </Typography>
              </Box>

              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,.12)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Icon size={22} />
              </Box>
            </Stack>
          </MotionPaper>
        );
      })}
    </Stack>
  );
}