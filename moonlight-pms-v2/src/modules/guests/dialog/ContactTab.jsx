import {
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  Phone,
  Mail,
  Smartphone,
  ContactRound,
} from "lucide-react";

export default function ContactTab({
  formData,
  handleChange,
}) {
  return (
    <Grid container spacing={3}>

      {/* Phone */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          inputProps={{ maxLength: 10 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone size={18} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      {/* Alternate Phone */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Alternate Phone"
          name="alternatePhone"
          value={formData.alternatePhone}
          onChange={handleChange}
          inputProps={{ maxLength: 10 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Smartphone size={18} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      {/* Email */}

      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Mail size={18} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      {/* Emergency Contact */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Emergency Contact Name"
          name="emergencyContactName"
          value={formData.emergencyContactName}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactRound size={18} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      {/* Emergency Contact Number */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Emergency Contact Number"
          name="emergencyContactPhone"
          value={formData.emergencyContactPhone}
          onChange={handleChange}
          inputProps={{ maxLength: 10 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone size={18} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

    </Grid>
  );
}