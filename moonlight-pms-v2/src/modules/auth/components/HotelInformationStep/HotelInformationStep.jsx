import { Grid, MenuItem, Stack } from "@mui/material";
import {
  Building2,
  Globe,
  MapPinned,
  Landmark,
  Clock3,
  DollarSign,
  BedDouble,
} from "lucide-react";

import AuthInput from "../AuthInput/AuthInput";
import PrimaryButton from "@/shared/components/form/PrimaryButton";
import AuthSelect from "@/shared/components/form/AuthSelect";
import { validateHotelStep } from "../../validation/SignupValidation";

const businessTypes = [
  "Hotel",
  "Resort",
  "Motel",
  "Hostel",
  "Apartment",
];

const countries = [
  "United States",
  "India",
  "Canada",
];

const timezones = [
  "America/New_York",
  "America/Chicago",
  "America/Los_Angeles",
  "Asia/Kolkata",
];

const currencies = [
  "USD ($)",
  "INR (₹)",
  "CAD ($)",
];

export default function HotelInformationStep({
  formData,
  updateFormData,
  onNext,
  errors,
}) {

  const isValid = Object.keys(errors).length === 0;

  return (
    <Stack spacing={3}>
      <Grid container spacing={3}>

        {/* Hotel Name */}

        <Grid size={{ xs: 12 }}>
          <AuthInput
            label="Hotel Name"
            placeholder="Green Leaf Hotel"
            icon={Building2}
            name="hotelName"
            value={formData.hotelName}
            onChange={updateFormData}
            error={!!errors?.hotelName}
            helperText={errors?.hotelName}
          />
        </Grid>

        {/* Business Type */}

        <Grid size={{ xs: 12, md: 6 }}>
          <AuthSelect
            label="Business Type"
            icon={Building2}
            name="businessType"
            value={formData.businessType}
            onChange={updateFormData}
            error={!!errors?.businessType}
            helperText={errors?.businessType}
          >
            {businessTypes.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </AuthSelect>
        </Grid>

        {/* Country */}

        <Grid size={{ xs: 12, md: 6 }}>
          <AuthSelect
            label="Country"
            icon={Globe}
            name="country"
            value={formData.country}
            onChange={updateFormData}
            error={!!errors?.country}
            helperText={errors?.country}
          >
            {countries.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </AuthSelect>
        </Grid>

        {/* State */}

        <Grid size={{ xs: 12, md: 6 }}>
          <AuthInput
            label="State"
            placeholder="California"
            icon={Landmark}
            name="state"
            value={formData.state}
            onChange={updateFormData}
            error={!!errors?.state}
            helperText={errors?.state}
          />
        </Grid>

        {/* City */}

        <Grid size={{ xs: 12, md: 6 }}>
          <AuthInput
            label="City"
            placeholder="Los Angeles"
            icon={MapPinned}
            name="city"
            value={formData.city}
            onChange={updateFormData}
            error={!!errors?.city}
            helperText={errors?.city}
          />
        </Grid>

        {/* Timezone */}

        <Grid size={{ xs: 12, md: 6 }}>
          <AuthSelect
            label="Timezone"
            icon={Clock3}
            name="timezone"
            value={formData.timezone}
            onChange={updateFormData}
            error={!!errors?.timezone}
            helperText={errors?.timezone}
          >
            {timezones.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </AuthSelect>
        </Grid>

        {/* Currency */}

        <Grid size={{ xs: 12, md: 6 }}>
          <AuthSelect
            label="Currency"
            icon={DollarSign}
            name="currency"
            value={formData.currency}
            onChange={updateFormData}
            error={!!errors?.currency}
            helperText={errors?.currency}
          >
            {currencies.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </AuthSelect>
        </Grid>

        {/* Number of Rooms */}

        <Grid size={{ xs: 12 }}>
          <AuthInput
            label="Number of Rooms"
            placeholder="100"
            type="number"
            icon={BedDouble}
            name="roomCount"
            value={formData.roomCount}
            onChange={updateFormData}
            error={!!errors?.roomCount}
            helperText={errors?.roomCount}
          />
        </Grid>

      </Grid>

      <Stack
        direction="row"
        justifyContent="flex-end"
      >
       <PrimaryButton onClick={onNext}>
          Continue
        </PrimaryButton>
      </Stack>
    </Stack>
  );
}