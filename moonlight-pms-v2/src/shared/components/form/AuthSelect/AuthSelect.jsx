import {
  Box,
  FormControl,
  FormHelperText,
  InputAdornment,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export default function AuthSelect({
  label,
  icon: Icon,
  name,
  value,
  onChange,
  children,
  placeholder = "Select",
  required = false,
  error = false,
  helperText = "",
}) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
<Typography
  sx={{
    mb: 1,
    fontSize: 14,
    fontWeight: 600,
    color: "#334155",
  }}
>
  {label}

  {required && (
    <Typography
      component="span"
      color="error"
      sx={{
        ml: 0.5,
        fontWeight: 700,
      }}
    >
      *
    </Typography>
  )}
</Typography>

      <FormControl
        fullWidth
        error={error}
      >
        <Select
          displayEmpty
          name={name}
          value={value}
          onChange={onChange}
          IconComponent={ChevronDown}
          startAdornment={
            Icon && (
              <InputAdornment position="start">
                <Icon
                  size={18}
                  color="#64748B"
                />
              </InputAdornment>
            )
          }
          renderValue={(selected) => {
            if (!selected) {
              return (
                <Typography color="#94A3B8">
                  {placeholder}
                </Typography>
              );
            }

            return selected;
          }}
          sx={{
            height: 56,

            borderRadius: "14px",

            backgroundColor: "#fff",

            "& fieldset": {
              borderColor: "#CBD5E1",
            },

            "&:hover fieldset": {
              borderColor: "#2563EB",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#2563EB",
              borderWidth: "2px",
            },

            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: 15,
            },
          }}
        >
          <MenuItem disabled value="">
            {placeholder}
          </MenuItem>

          {children}
        </Select>

        <FormHelperText>
          {helperText}
        </FormHelperText>
      </FormControl>
    </MotionBox>
  );
}