import {
  Grid,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const guestTags = [
  "Regular",
  "VIP",
  "Corporate",
  "Long Stay",
];

const bookingSources = [
  "Walk In",
  "Phone",
  "Website",
  "Booking.com",
  "Expedia",
  "Agoda",
  "Airbnb",
];

export default function PreferenceTab({
  formData,
  handleChange,
}) {

  const handleCheckbox = (event) => {
    handleChange({
      target: {
        name: event.target.name,
        value: event.target.checked,
      },
    });
  };

  return (
    <Grid container spacing={3}>

      {/* Guest Tag */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          label="Guest Tag"
          name="tag"
          value={formData.tag}
          onChange={handleChange}
        >
          {guestTags.map((item) => (
            <MenuItem
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* Booking Source */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          label="Booking Source"
          name="source"
          value={formData.source}
          onChange={handleChange}
        >
          {bookingSources.map((item) => (
            <MenuItem
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* OTA Booking Number */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="OTA Booking Number"
          name="otaBookingNumber"
          value={formData.otaBookingNumber}
          onChange={handleChange}
        />
      </Grid>

      {/* Loyalty Number */}

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Loyalty Number"
          name="loyaltyNumber"
          value={formData.loyaltyNumber}
          onChange={handleChange}
        />
      </Grid>

      {/* VIP */}

      <Grid size={{ xs: 12, md: 6 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.vip}
              name="vip"
              onChange={handleCheckbox}
            />
          }
          label="VIP Guest"
        />
      </Grid>

      {/* Repeat Guest */}

      <Grid size={{ xs: 12, md: 6 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.repeatGuest}
              name="repeatGuest"
              onChange={handleCheckbox}
            />
          }
          label="Repeat Guest"
        />
      </Grid>

      {/* Internal Notes */}

      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Internal Notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Special requests, allergies, preferred room, remarks..."
        />
      </Grid>

    </Grid>
  );
}