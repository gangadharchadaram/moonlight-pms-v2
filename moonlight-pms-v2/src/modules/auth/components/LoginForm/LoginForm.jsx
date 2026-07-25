import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

import { Mail, ArrowRight } from "lucide-react";

import AuthHeader from "../AuthHeader/AuthHeader";
import AuthInput from "../AuthInput/AuthInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import { useNavigate } from "react-router-dom";
import api from "@/services/api/axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { saveAuth } from "../../utils/auth";
import { login } from "@/services/authService";


export default function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const navigate = useNavigate();

  const loginMutation = useMutation({
  mutationFn: login,

  onSuccess: (response) => {
    saveAuth(response.data);

    toast.success(response.message);

    navigate("/dashboard", {
      replace: true,
    });
  },

  onError: (error) => {
    console.error(error);

    toast.error(
      error.response?.data?.message ||
      "Invalid email or password."
    );
  },
});


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!values.password) {
      newErrors.password = "Password is required";
    } else if (values.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (!validate()) return;

  loginMutation.mutate({
    email: values.email,
    password: values.password,
  });
};

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ width: "100%" }}
    >
      <AuthHeader
        title="Welcome Back"
        subtitle="Sign in to your MoonLight PMS workspace and continue managing your hotel."
      />

      <Stack spacing={3}>
        <AuthInput
          label="Email Address"
          placeholder="Enter your email"
          icon={Mail}
          value={values.email}
          name="email"
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          autoComplete="email"
        />

       <PasswordInput
  label="Password"
  placeholder="Enter your password"
  value={values.password}
  name="password"
  onChange={handleChange}
  error={!!errors.password}
  helperText={errors.password}
/>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={values.remember}
                onChange={handleChange}
                name="remember"
              />
            }
            label="Remember Me"
          />

          <Link
            href="/auth/forgot-password"
            underline="hover"
            sx={{
              fontWeight: 600,
              color: "#2563EB",
            }}
          >
            Forgot Password?
          </Link>
        </Stack>

        <Button
          type="submit"
          disabled={loginMutation.isPending}
          fullWidth
          variant="contained"
          
          sx={{
            height: 56,
            borderRadius: "14px",
            textTransform: "none",
            fontWeight: 700,
            fontSize: 16,
            

            background:
              "linear-gradient(90deg,#2563EB,#1D4ED8)",

            boxShadow:
              "0 10px 25px rgba(37,99,235,.25)",

            transition: "all .25s ease",

            "&:hover": {
              background:
                "linear-gradient(90deg,#1D4ED8,#1E40AF)",
              transform: "translateY(-2px)",
              boxShadow:
                "0 16px 32px rgba(37,99,235,.35)",
            },
            
          }}
            endIcon={<ArrowRight size={18} />}

        >
            {loginMutation.isPending ? "Signing In..." : "Sign In"}
        </Button>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={0.5}
        >
          <Typography color="text.secondary">
            Need a hotel workspace?
          </Typography>

          <Link
            href="/auth/signup"
            underline="hover"
            sx={{
              fontWeight: 600,
              color: "#2563EB",
            }}
          >
            Create Workspace
          </Link>
        </Stack>

        <Alert
          severity="info"
          sx={{
            borderRadius: "12px",
          }}
        >
          <Typography
            fontWeight={600}
            mb={1}
          >
            Demo Credentials
          </Typography>

          <Typography variant="body2">
            <strong>Email:</strong> admin@greenleaf.com
          </Typography>

          <Typography variant="body2">
            <strong>Password:</strong> Admin@123
          </Typography>
        </Alert>
      </Stack>
    </Box>
  );
}