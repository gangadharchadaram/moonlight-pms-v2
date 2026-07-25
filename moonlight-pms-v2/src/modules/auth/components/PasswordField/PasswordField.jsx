import { useState } from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordField({
  label = "Password",
  name = "password",
  value,
  onChange,
  error = false,
  helperText = "",
  disabled = false,
  autoComplete = "current-password",
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl
      fullWidth
      error={error}
      disabled={disabled}
      variant="outlined"
    >
      <InputLabel>{label}</InputLabel>

      <OutlinedInput
        name={name}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        label={label}
        autoComplete={autoComplete}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              edge="end"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </IconButton>
          </InputAdornment>
        }
      />

      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}