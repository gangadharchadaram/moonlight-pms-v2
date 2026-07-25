import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  Typography,
  FormHelperText,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export default function AuthInput({
  label,
  placeholder,
  icon: Icon,
  value,
  onChange,
  name,
  error = false,
  helperText = "",
  required = false,
  type = "text",
  autoComplete = "off",
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

      <FormControl fullWidth error={error}>
        <OutlinedInput
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          placeholder={placeholder}
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
              borderWidth: "2px",
              borderColor: "#2563EB",
            },

            "& input": {
              fontSize: 15,
            },
          }}
        />

        <FormHelperText>
          {helperText}
        </FormHelperText>
      </FormControl>
    </MotionBox>
  );
}