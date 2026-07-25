import { useState, useEffect } from "react";

import AuthFormContainer from "../components/AuthFormContainer";
import AuthHeader from "../components/AuthHeader/AuthHeader";
import StepperHeader from "../components/StepperHeader";
import { useMutation } from "@tanstack/react-query";
import { registerWorkspace } from "@/services/authService";
import AdminInformationStep from "../components/AdminInformationStep/AdminInformationStep";
import ReviewStep from "../components/ReviewStep/ReviewStep";
import WorkspaceStep from "../components/SignupWizard/WorkspaceStep";
import HotelInformationStep from "../components/HotelInformationStep/HotelInformationStep";
import { validateHotelStep, validateAdminStep, validateWorkspaceStep } from "../validation/SignupValidation";
import { useNavigate } from "react-router-dom";
import { saveAuth } from "../utils/auth";
import toast from "react-hot-toast";

export default function SignupPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
  // Hotel
  hotelName: "",
  businessType: "",
  country: "",
  state: "",
  city: "",
  timezone: "",
  currency: "",
  roomCount: "",

  // Admin
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",

  // Workspace
  workspace: "",
  subscription: "trial",
  acceptTerms: false,
});

const registerMutation = useMutation({
  mutationFn: registerWorkspace,

  onSuccess: (response) => {
    saveAuth(response.data);

    toast.success(response.message);

    navigate("/dashboard", {
      replace: true,
    });
  },

  onError: (error) => {
    toast.error(
      error.response?.data?.message || "Registration failed"
    );
  },
});

const updateFormData = (event) => {

  const { name, value } = event.target;

  const updatedFormData = {
    ...formData,
    [name]: value,
  };

  setFormData(updatedFormData);

  if (!submitted) return;

  let validationErrors = {};

  switch (activeStep) {

    case 0:
      validationErrors = validateHotelStep(updatedFormData);
      break;

    case 1:
      validationErrors = validateAdminStep(updatedFormData);
      break;

    case 2:
      validationErrors = validateWorkspaceStep(updatedFormData);
      break;

    default:
      validationErrors = {};
  }

  setErrors(validationErrors);
};

const updateCheckbox = (event) => {

  const { name, checked } = event.target;

  const updatedFormData = {
    ...formData,
    [name]: checked,
  };

  setFormData(updatedFormData);

  if (!submitted) return;

  const validationErrors =
    validateWorkspaceStep(updatedFormData);

  setErrors(validationErrors);
};



const validateStep = (step) => {
  switch (step) {
    case 0:
      return validateHotelStep(formData);

    case 1:
      return validateAdminStep(formData);

    case 2:
      return validateWorkspaceStep(formData);

    default:
      return {};
  }
};

const nextStep = () => {

  setSubmitted(true);

  const validationErrors = validateStep(activeStep);

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setSubmitted(false);
  setErrors({});

  setActiveStep((prev) => prev + 1);
};

const previousStep = () => {
    setActiveStep((prev) => prev - 1);
};

const renderStep = () => {
  switch (activeStep) {
    case 0:
      return (
        <HotelInformationStep
          formData={formData}
          updateFormData={updateFormData}
          errors={errors}
          onNext={nextStep}
        />
      );

    case 1:
      return (
        <AdminInformationStep
          formData={formData}
          updateFormData={updateFormData}
          errors={errors}
          onNext={nextStep}
          onBack={previousStep}
        />
      );

    case 2:
      return (
        <WorkspaceStep
    formData={formData}
    updateFormData={updateFormData}
    updateCheckbox={updateCheckbox}
    errors={errors}
    onNext={nextStep}
    onBack={previousStep}
/>
      );

     case 3:
      return (
        <ReviewStep
          formData={formData}
          onBack={previousStep}
          onSubmit={handleSubmit}
          loading={registerMutation.isPending}
        />
      );

    default:
      return null;
  }
};

const handleSubmit = () => {
  console.log("Create Workspace clicked");
  console.log(formData);

  const payload = {
    hotel: {
      hotelName: formData.hotelName,
      businessType: formData.businessType,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      timezone: formData.timezone,
      currency: formData.currency,
      roomCount: Number(formData.roomCount),
    },
    admin: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    },
    workspace: {
      subdomain: formData.workspace,
      subscription: formData.subscription,
    },
  };

  console.log("Payload:", payload);

  registerMutation.mutate(payload);
};

return (
  <AuthFormContainer maxWidth={700}>
    <AuthHeader
      title="Create Your Hotel Workspace"
      subtitle="Let's setup your hotel in just a few simple steps."
    />

    <StepperHeader activeStep={activeStep} />


    {renderStep()}
  </AuthFormContainer>
);
}