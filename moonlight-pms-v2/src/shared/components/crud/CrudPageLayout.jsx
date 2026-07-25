// src/shared/components/crud/CrudPageLayout.jsx

import { Box, Paper, Stack } from "@mui/material";
import PageHeader from "../common/PageHeader";

export default function CrudPageLayout({
  title,
  subtitle,
  toolbar,
  content,
  actions,
}) {
  return (
    <Stack spacing={3}>
      <PageHeader
        title={title}
        subtitle={subtitle}
        actions={actions}
      />

      {toolbar && (
        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          {toolbar}
        </Paper>
      )}

      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          overflow: "hidden",
        }}
      >
        <Box p={2}>
          {content}
        </Box>
      </Paper>
    </Stack>
  );
}