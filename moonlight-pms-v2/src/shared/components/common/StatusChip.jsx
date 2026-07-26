import Chip from "@mui/material/Chip";

export default function StatusChip({ status }) {

    const color =
        status === "ACTIVE"
            ? "success"
            : "default";

    return (

          <Chip
            label={active ? "Active" : "Inactive"}
            color={active ? "success" : "default"}
            size="small"
            variant="filled"
        />

    );

}