import {
  Avatar,
  Box,
  Chip,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  X,
  User,
  Phone,
  Mail,
  MapPin,
  IdCard,
  Star,
} from "lucide-react";

const InfoRow = ({ label, value }) => (
  <Grid container spacing={1} sx={{ mb: 1.5 }}>
    <Grid size={{ xs: 5 }}>
      <Typography
        variant="body2"
        color="text.secondary"
        fontWeight={500}
      >
        {label}
      </Typography>
    </Grid>

    <Grid size={{ xs: 7 }}>
      <Typography variant="body2">
        {value || "-"}
      </Typography>
    </Grid>
  </Grid>
);

const Section = ({ title, icon, children }) => (
  <Paper
    elevation={0}
    sx={{
      p: 2,
      mb: 2,
      border: "1px solid",
      borderColor: "divider",
      borderRadius: 2,
    }}
  >
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      mb={2}
    >
      {icon}

      <Typography
        variant="subtitle1"
        fontWeight={600}
      >
        {title}
      </Typography>
    </Stack>

    {children}
  </Paper>
);

export default function GuestViewDrawer({
  open,
  guest,
  onClose,
}) {
  if (!guest) return null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: {
            xs: "100%",
            md: 520,
          },
        },
      }}
    >
      {/* Header */}

      <Box
        sx={{
          background:
            "linear-gradient(135deg,#1976d2,#42a5f5)",
          color: "#fff",
          p: 3,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
        >
          <Typography variant="h6">
            Guest Profile
          </Typography>

          <IconButton
            onClick={onClose}
            sx={{ color: "#fff" }}
          >
            <X size={20} />
          </IconButton>
        </Stack>

        <Stack
          spacing={2}
          alignItems="center"
          mt={2}
        >
          <Avatar
            sx={{
              width: 80,
              height: 80,
              fontSize: 28,
            }}
          >
            {guest.firstName?.charAt(0)}
            {guest.lastName?.charAt(0)}
          </Avatar>

          <Box textAlign="center">
            <Typography
              variant="h6"
              fontWeight={700}
            >
              {guest.firstName} {guest.lastName}
            </Typography>

            <Typography variant="body2">
              {guest.guestCode}
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              mt={1}
            >
              {guest.vip && (
                <Chip
                  size="small"
                  color="warning"
                  label="VIP"
                />
              )}

              {guest.repeatGuest && (
                <Chip
                  size="small"
                  color="success"
                  label="Repeat"
                />
              )}
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box p={2}>

        {/* Personal */}

        <Section
          title="Personal Information"
          icon={<User size={18} />}
        >
          <InfoRow
            label="Guest Code"
            value={guest.guestCode}
          />

          <InfoRow
            label="Gender"
            value={guest.gender}
          />

          <InfoRow
            label="Birth Date"
            value={guest.birthDate}
          />

          <InfoRow
            label="Age"
            value={guest.age}
          />
        </Section>

        {/* Contact */}

        <Section
          title="Contact"
          icon={<Phone size={18} />}
        >
          <InfoRow
            label="Phone"
            value={guest.phone}
          />

          <InfoRow
            label="Alternate Phone"
            value={guest.alternatePhone}
          />

          <InfoRow
            label="Email"
            value={guest.email}
          />

          <InfoRow
            label="Emergency Contact"
            value={guest.emergencyContactName}
          />

          <InfoRow
            label="Emergency Phone"
            value={guest.emergencyContactPhone}
          />
        </Section>

        {/* Address */}

        <Section
          title="Address"
          icon={<MapPin size={18} />}
        >
          <InfoRow
            label="Address"
            value={guest.address}
          />

          <InfoRow
            label="City"
            value={guest.city}
          />

          <InfoRow
            label="State"
            value={guest.state}
          />

          <InfoRow
            label="ZIP"
            value={guest.zip}
          />

          <InfoRow
            label="Country"
            value={guest.country}
          />
        </Section>

        {/* Identity */}

        <Section
          title="Identity"
          icon={<IdCard size={18} />}
        >
          <InfoRow
            label="ID Type"
            value={guest.idType}
          />

          <InfoRow
            label="ID Number"
            value={guest.idNumber}
          />

          <InfoRow
            label="Nationality"
            value={guest.nationality}
          />
        </Section>

        {/* Preferences */}

        <Section
          title="Preferences"
          icon={<Star size={18} />}
        >
          <InfoRow
            label="Guest Tag"
            value={guest.tag}
          />

          <InfoRow
            label="Booking Source"
            value={guest.source}
          />

          <InfoRow
            label="Loyalty"
            value={guest.loyaltyNumber}
          />

          <InfoRow
            label="OTA Booking"
            value={guest.otaBookingNumber}
          />

          <Divider sx={{ my: 2 }} />

          <Typography
            variant="subtitle2"
            gutterBottom
          >
            Notes
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {guest.notes || "No notes available."}
          </Typography>
        </Section>

        {/* Reservation History */}

        <Section
          title="Reservation History"
          icon={<Mail size={18} />}
        >
          <Typography
            color="text.secondary"
            variant="body2"
          >
            Reservation history will be available once
            the Reservation module is completed.
          </Typography>
        </Section>

      </Box>
    </Drawer>
  );
}