import {
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";

import {
  MapPin,
  Building2,
  Map,
  Hash,
  Globe,
} from "lucide-react";

export default function AddressTab({
  formData,
  handleChange,
}) {
  return (
    <Grid container spacing={3}>

      {/* Street Address */}

      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          multiline
          minRows={3}
          label="Street Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MapPin size={18} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      {/* City */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Building2 size={18} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      {/* State */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Map size={18} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      {/* ZIP */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="ZIP Code"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Hash size={18} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      {/* Country */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Globe size={18} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

    </Grid>
  );
}