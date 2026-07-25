import { useState } from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Eye, EyeOff, Lock } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export default function PasswordInput({
  label = "Password",
  placeholder = "Enter your password",
  value,
  onChange,
  name,
  error = false,
  helperText = "",
  autoComplete = "current-password",
}) {
  const [showPassword, setShowPassword] = useState(false);

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
      </Typography>

      <FormControl
        fullWidth
        error={error}
      >
        <OutlinedInput
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          type={showPassword ? "text" : "password"}
          startAdornment={
            <InputAdornment position="start">
              <Lock
                size={18}
                color="#64748B"
              />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </IconButton>
            </InputAdornment>
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
              borderColor: "#2563EB",
              borderWidth: "2px",
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