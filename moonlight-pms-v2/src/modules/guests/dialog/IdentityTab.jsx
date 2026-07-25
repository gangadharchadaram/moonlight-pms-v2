import {
  Grid,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";

import {
  CreditCard,
  IdCard,
  Calendar,
  Globe,
} from "lucide-react";

const idTypes = [
  "Aadhaar",
  "Passport",
  "Driving Licence",
  "Voter ID",
  "PAN Card",
  "National ID",
  "Other",
];

export default function IdentityTab({
  formData,
  handleChange,
}) {
  return (
    <Grid container spacing={3}>

      {/* ID Type */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          label="ID Type"
          name="idType"
          value={formData.idType}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IdCard size={18} />
              </InputAdornment>
            ),
          }}
        >
          {idTypes.map((type) => (
            <MenuItem
              key={type}
              value={type}
            >
              {type}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* ID Number */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="ID Number"
          name="idNumber"
          value={formData.idNumber}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CreditCard size={18} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      {/* ID Expiry */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          type="date"
          label="ID Expiry Date"
          name="idExpiry"
          value={formData.idExpiry}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Calendar size={18} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      {/* Nationality */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Nationality"
          name="nationality"
          value={formData.nationality}
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

      {/* Future Upload Placeholder */}

      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          disabled
          label="Identity Document Upload"
          helperText="Document upload will be available in a future release."
        />
      </Grid>

    </Grid>
  );
}