// src/shared/components/common/PageHeader.jsx

import { Stack, Typography } from "@mui/material";

export default function PageHeader({
  title,
  subtitle,
  actions,
}) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack spacing={0.5}>
        <Typography
          variant="h4"
          fontWeight={700}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            color="text.secondary"
          >
            {subtitle}
          </Typography>
        )}
      </Stack>

      {actions}
    </Stack>
  );
}