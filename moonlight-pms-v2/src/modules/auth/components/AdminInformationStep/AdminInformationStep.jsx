import { Grid, Stack } from "@mui/material";
import {
  User,
  Mail,
  Phone,
  Lock,
} from "lucide-react";

import AuthInput from "../AuthInput/AuthInput";
import PrimaryButton from "@/shared/components/form/PrimaryButton";
import SecondaryButton from "@/shared/components/form/SecondaryButton";
import { validateAdminStep } from "../../validation/SignupValidation";

export default function AdminInformationStep({
  formData,
  updateFormData,
  onNext,
  onBack,
  errors,
}) {

  const isValid = Object.keys(errors).length === 0;

  return (
    <Stack spacing={3}>
      <Grid container spacing={3}>

        {/* First Name */}

        <Grid size={{ xs: 12, md: 6 }}>
          <AuthInput
            label="First Name"
            placeholder="John"
            icon={User}
            name="firstName"
            value={formData.firstName}
            onChange={updateFormData}
            error={!!errors?.firstName}
            helperText={errors?.firstName}
          />
        </Grid>

        {/* Last Name */}

        <Grid size={{ xs: 12, md: 6 }}>
          <AuthInput
            label="Last Name"
            placeholder="Doe"
            icon={User}
            name="lastName"
            value={formData.lastName}
            onChange={updateFormData}
            error={!!errors?.lastName}
            helperText={errors?.lastName}
          />
        </Grid>

        {/* Email */}

        <Grid size={{ xs: 12 }}>
          <AuthInput
            label="Email Address"
            placeholder="john@example.com"
            icon={Mail}
            name="email"
            value={formData.email}
            onChange={updateFormData}
            error={!!errors?.email}
            helperText={errors?.email}
            autoComplete="email"
          />
        </Grid>

        {/* Phone */}

        <Grid size={{ xs: 12 }}>
          <AuthInput
            label="Phone Number"
            placeholder="+1 9876543210"
            icon={Phone}
            name="phone"
            value={formData.phone}
            onChange={updateFormData}
            error={!!errors?.phone}
            helperText={errors?.phone}
          />
        </Grid>

        {/* Password */}

        <Grid size={{ xs: 12, md: 6 }}>
          <AuthInput
            label="Password"
            type="password"
            placeholder="Enter Password"
            icon={Lock}
            name="password"
            value={formData.password}
            onChange={updateFormData}
            error={!!errors?.password}
            helperText={errors?.password}
            autoComplete="new-password"
          />
        </Grid>

        {/* Confirm Password */}

        <Grid size={{ xs: 12, md: 6 }}>
          <AuthInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            icon={Lock}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={updateFormData}
            error={!!errors?.confirmPassword}
            helperText={errors?.confirmPassword}
            autoComplete="new-password"
          />
        </Grid>

      </Grid>

      <Stack
        direction="row"
        justifyContent="space-between"
      >
        <SecondaryButton onClick={onBack}>
          Back
        </SecondaryButton>

        <PrimaryButton onClick={onNext}>
          Continue
        </PrimaryButton>
      </Stack>
    </Stack>
  );
}