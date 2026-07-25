import {
  Stack,
  FormControlLabel,
  Checkbox,
  MenuItem,
} from "@mui/material";
import { Globe } from "lucide-react";

import AuthInput from "../AuthInput/AuthInput";
import AuthSelect from "@/shared/components/form/AuthSelect";
import PrimaryButton from "@/shared/components/form/PrimaryButton";
import SecondaryButton from "@/shared/components/form/SecondaryButton";

import { validateWorkspaceStep } from "../../validation/SignupValidation";

export default function WorkspaceStep({
  formData,
  updateFormData,
  updateCheckbox,
  onNext,
  onBack,
  errors,
}) {

  

  const validationErrors = validateWorkspaceStep(formData);

  console.log("Workspace Validation:", validationErrors);
  console.log("Form Data:", formData);

  const isValid = Object.keys(validationErrors).length === 0;

  return (
    <Stack spacing={3}>

      {/* Workspace Name */}

      <AuthInput
        label="Workspace Name"
        placeholder="moonlight-hotel"
        icon={Globe}
        name="workspace"
        value={formData.workspace}
        onChange={updateFormData}
        error={!!errors?.workspace}
        helperText={
          errors?.workspace ||
          "This becomes your hotel workspace identifier."
        }
      />

      {/* Subscription */}

      <AuthSelect
        label="Subscription"
        name="subscription"
        value={formData.subscription}
        onChange={updateFormData}
        error={!!errors?.subscription}
        helperText={errors?.subscription}
      >
        <MenuItem value="trial">
          Free Trial
        </MenuItem>

        <MenuItem value="starter">
          Starter
        </MenuItem>

        <MenuItem value="professional">
          Professional
        </MenuItem>

        <MenuItem value="enterprise">
          Enterprise
        </MenuItem>
      </AuthSelect>

      {/* Terms */}

      <FormControlLabel
        control={
          <Checkbox
            checked={formData.acceptTerms}
            onChange={updateCheckbox}
            name="acceptTerms"
          />
        }
        label="I agree to the Terms & Conditions and Privacy Policy."
      />

      {errors?.acceptTerms && (
        <span
          style={{
            color: "#d32f2f",
            fontSize: 13,
          }}
        >
          {errors.acceptTerms}
        </span>
      )}

      {/* Buttons */}

      <Stack
        direction="row"
        justifyContent="space-between"
      >
        <SecondaryButton onClick={onBack}>
          Back
        </SecondaryButton>

       <PrimaryButton onClick={onNext}>
          Review
        </PrimaryButton>
      </Stack>
    </Stack>
  );
}