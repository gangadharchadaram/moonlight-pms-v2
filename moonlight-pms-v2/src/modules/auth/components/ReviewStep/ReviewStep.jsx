import {
  Box,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Building2,
  User,
  Globe,
} from "lucide-react";

import PrimaryButton from "@/shared/components/form/PrimaryButton";

const Section = ({ icon: Icon, title, children }) => (
  <Paper
    elevation={0}
    sx={{
      p: 3,
      borderRadius: 3,
      border: "1px solid #E2E8F0",
      backgroundColor: "#FFFFFF",
    }}
  >
    <Stack
      direction="row"
      spacing={1.5}
      alignItems="center"
      sx={{ mb: 2 }}
    >
      <Icon size={20} color="#2563EB" />

      <Typography variant="h6" fontWeight={700}>
        {title}
      </Typography>
    </Stack>

    {children}
  </Paper>
);

const Row = ({ label, value }) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    sx={{ py: 1 }}
  >
    <Typography color="text.secondary">
      {label}
    </Typography>

    <Typography fontWeight={600}>
      {value || "-"}
    </Typography>
  </Stack>
);

export default function ReviewStep({
  formData,
  onBack,
  onSubmit,
  loading = false,
}) {
  return (
    <Stack
      component={motion.div}
      spacing={4}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
    >
      <Box>
        <Typography variant="h5" fontWeight={700}>
          Review & Create Workspace
        </Typography>

        <Typography color="text.secondary">
          Please review the information before creating your hotel workspace.
        </Typography>
      </Box>

      <Section icon={Building2} title="Hotel Information">
        <Row label="Hotel Name" value={formData.hotelName} />
        <Divider />
        <Row label="Business Type" value={formData.businessType} />
        <Divider />
        <Row label="Country" value={formData.country} />
        <Divider />
        <Row label="State" value={formData.state} />
        <Divider />
        <Row label="City" value={formData.city} />
        <Divider />
        <Row label="Timezone" value={formData.timezone} />
        <Divider />
        <Row label="Currency" value={formData.currency} />
        <Divider />
        <Row label="Rooms" value={formData.roomCount} />
      </Section>

      <Section icon={User} title="Administrator">
        <Row
          label="Name"
          value={`${formData.firstName} ${formData.lastName}`}
        />
        <Divider />
        <Row label="Email" value={formData.email} />
        <Divider />
        <Row label="Phone" value={formData.phone} />
      </Section>

      <Section icon={Globe} title="Workspace">
        <Row
          label="Workspace URL"
          value={`${formData.workspace}.moonlightpms.com`}
        />
        <Divider />
        <Row
          label="Subscription"
          value={formData.subscription}
        />
      </Section>

      <Stack
        direction="row"
        justifyContent="space-between"
      >
        <PrimaryButton
          variant="outlined"
          onClick={onBack}
        >
          ← Back
        </PrimaryButton>

        <PrimaryButton
          loading={loading}
          disabled={loading}
          onClick={onSubmit}
        >
          Create Workspace
        </PrimaryButton>
      </Stack>
    </Stack>
  );
}