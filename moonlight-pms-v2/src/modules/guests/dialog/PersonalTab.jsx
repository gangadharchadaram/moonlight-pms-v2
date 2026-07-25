import {
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import { useEffect } from "react";

const genderOptions = [
  { value: "M", label: "Male" },
  { value: "F", label: "Female" },
  { value: "O", label: "Other" },
];

const guestTagOptions = [
  "Regular",
  "VIP",
  "Corporate",
  "Walk-In",
];

const sourceOptions = [
  "Walk In",
  "Website",
  "Phone",
  "Booking.com",
  "Expedia",
  "Agoda",
  "Airbnb",
];

export default function PersonalTab({
  formData,
  handleChange,
}) {

  useEffect(() => {
    if (!formData.birthDate) return;

    const birth = new Date(formData.birthDate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    const month = today.getMonth() - birth.getMonth();

    if (
      month < 0 ||
      (month === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    handleChange({
      target: {
        name: "age",
        value: age,
      },
    });
  }, [formData.birthDate]);

  return (
    <Grid container spacing={3}>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          label="Guest Code"
          name="guestCode"
          value={formData.guestCode}
          disabled
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          required
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          label="Middle Name"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          required
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          select
          fullWidth
          required
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          {genderOptions.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          type="date"
          label="Birth Date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          label="Age"
          name="age"
          value={formData.age}
          disabled
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          select
          fullWidth
          label="Guest Tag"
          name="tag"
          value={formData.tag}
          onChange={handleChange}
        >
          {guestTagOptions.map((item) => (
            <MenuItem
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          select
          fullWidth
          label="Source"
          name="source"
          value={formData.source}
          onChange={handleChange}
        >
          {sourceOptions.map((item) => (
            <MenuItem
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

    </Grid>
  );
}