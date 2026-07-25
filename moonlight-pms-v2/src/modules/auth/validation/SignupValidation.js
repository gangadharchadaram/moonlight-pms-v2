// src/modules/auth/validation/signupValidation.js

/**
 * STEP 1 - HOTEL INFORMATION
 */
export const validateHotelStep = (formData) => {
  const errors = {};

  // Hotel Name
  if (!formData.hotelName?.trim()) {
    errors.hotelName = "Hotel name is required";
  } else if (formData.hotelName.trim().length < 3) {
    errors.hotelName = "Hotel name must be at least 3 characters";
  }

  // Business Type
  if (!formData.businessType) {
    errors.businessType = "Please select a business type";
  }

  // Country
  if (!formData.country) {
    errors.country = "Please select a country";
  }

  // State
  if (!formData.state?.trim()) {
    errors.state = "State is required";
  }

  // City
  if (!formData.city?.trim()) {
    errors.city = "City is required";
  }

  // Timezone
  if (!formData.timezone) {
    errors.timezone = "Please select a timezone";
  }

  // Currency
  if (!formData.currency) {
    errors.currency = "Please select a currency";
  }

  // Number of Rooms
  if (!formData.roomCount) {
    errors.roomCount = "Number of rooms is required";
  } else if (
    isNaN(formData.roomCount) ||
    Number(formData.roomCount) <= 0
  ) {
    errors.roomCount = "Enter a valid room count";
  }

  return errors;
};

/**
 * STEP 2 - ADMIN INFORMATION
 */
export const validateAdminStep = (formData) => {
  const errors = {};

  // First Name
  if (!formData.firstName?.trim()) {
    errors.firstName = "First name is required";
  }

  // Last Name
  if (!formData.lastName?.trim()) {
    errors.lastName = "Last name is required";
  }

  // Email
  if (!formData.email?.trim()) {
    errors.email = "Email address is required";
  } else {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
  }

  // Phone
  if (!formData.phone?.trim()) {
    errors.phone = "Phone number is required";
  } else {
    const phoneRegex = /^[0-9+\-\s()]{7,20}$/;

    if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
  }

  // Password
  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 8) {
    errors.password =
      "Password must be at least 8 characters";
  }

  // Confirm Password
  if (!formData.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (
    formData.password !== formData.confirmPassword
  ) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

/**
 * STEP 3 - WORKSPACE
 */
export const validateWorkspaceStep = (formData) => {
  const errors = {};

  // Workspace
  if (!formData.workspace?.trim()) {
    errors.workspace = "Workspace name is required";
  } else {
    const workspaceRegex = /^[a-z0-9-]+$/;

    if (!workspaceRegex.test(formData.workspace)) {
      errors.workspace =
        "Only lowercase letters, numbers and hyphens are allowed";
    }

    if (formData.workspace.length < 3) {
      errors.workspace =
        "Workspace name must be at least 3 characters";
    }
  }

  // Subscription
  if (!formData.subscription) {
    errors.subscription = "Please select a subscription";
  }

  // Terms & Conditions
  if (!formData.acceptTerms) {
    errors.acceptTerms =
      "You must accept the Terms & Conditions";
  }

  return errors;
};