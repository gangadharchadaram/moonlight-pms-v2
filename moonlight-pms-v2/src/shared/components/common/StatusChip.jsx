import Chip from "@mui/material/Chip";

const STATUS_CONFIG = {
  ACTIVE: { label: "Active", color: "success" },
  INACTIVE: { label: "Inactive", color: "default" },

  AVAILABLE: { label: "Available", color: "success" },
  OCCUPIED: { label: "Occupied", color: "error" },
  RESERVED: { label: "Reserved", color: "warning" },
  OUT_OF_SERVICE: { label: "Out of Service", color: "default" },

  CLEAN: { label: "Clean", color: "success" },
  DIRTY: { label: "Dirty", color: "error" },
  INSPECTED: { label: "Inspected", color: "info" },
};

export default function StatusChip({ status }) {
  const config = STATUS_CONFIG[status] || {
    label: status,
    color: "default",
  };

  return (
    <Chip
      label={config.label}
      color={config.color}
      size="small"
      variant="filled"
    />
  );
}