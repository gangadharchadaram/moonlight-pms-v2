import { Search, RotateCcw, Plus } from "lucide-react";
import {
  Button,
  MenuItem,
  TextField,
} from "@mui/material";

export default function GuestToolbar({onAddGuest}) {
  return (
    <div className="mt-6 rounded-xl border bg-white p-4 shadow-sm">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

        {/* Search */}

        <div className="relative flex-1">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <TextField
            fullWidth
            size="small"
            placeholder="Search by Name, Phone, Email..."
            sx={{
              "& .MuiOutlinedInput-input": {
                paddingLeft: "36px",
              },
            }}
          />

        </div>

        {/* Status */}

        <TextField
          select
          size="small"
          defaultValue=""
          sx={{ minWidth: 160 }}
        >
          <MenuItem value="">
            All Status
          </MenuItem>

          <MenuItem value="ACTIVE">
            Active
          </MenuItem>

          <MenuItem value="BANNED">
            Banned
          </MenuItem>

          <MenuItem value="CHECKED_IN">
            Checked In
          </MenuItem>
        </TextField>

        {/* Source */}

        <TextField
          select
          size="small"
          defaultValue=""
          sx={{ minWidth: 160 }}
        >
          <MenuItem value="">
            All Sources
          </MenuItem>

          <MenuItem value="Walk In">
            Walk In
          </MenuItem>

          <MenuItem value="Booking.com">
            Booking.com
          </MenuItem>

          <MenuItem value="Expedia">
            Expedia
          </MenuItem>
        </TextField>

        {/* Repeat */}

        <TextField
          select
          size="small"
          defaultValue=""
          sx={{ minWidth: 150 }}
        >
          <MenuItem value="">
            All Guests
          </MenuItem>

          <MenuItem value="true">
            Repeat Guest
          </MenuItem>

          <MenuItem value="false">
            New Guest
          </MenuItem>
        </TextField>

        {/* Reset */}

        <Button
          variant="outlined"
          startIcon={<RotateCcw size={16} />}
        >
          Reset
        </Button>

        {/* Add Guest */}

        <Button
    variant="contained"
    startIcon={<Plus size={16} />}
    onClick={onAddGuest}
>
    Add Guest
</Button>

      </div>

    </div>
  );
}