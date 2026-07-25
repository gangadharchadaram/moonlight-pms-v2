import {
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import DownloadIcon from "@mui/icons-material/Download";

export default function CrudToolbar({
  search,
  onSearch,
  searchPlaceholder = "Search...",

  filters,

  actions,

  onRefresh,

  onExport,
}) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      justifyContent="space-between"
      alignItems={{ xs: "stretch", md: "center" }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        flex={1}
      >
        <TextField
          size="small"
          fullWidth
          placeholder={searchPlaceholder}
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        {filters}
      </Stack>

      <Stack direction="row" spacing={1}>
        {onRefresh && (
          <Tooltip title="Refresh">
            <IconButton onClick={onRefresh}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        )}

        {onExport && (
          <Tooltip title="Export">
            <IconButton onClick={onExport}>
              <DownloadIcon />
            </IconButton>
          </Tooltip>
        )}

        {actions}
      </Stack>
    </Stack>
  );
}