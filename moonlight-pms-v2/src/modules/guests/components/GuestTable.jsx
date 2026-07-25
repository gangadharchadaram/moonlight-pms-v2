import { DataGrid } from "@mui/x-data-grid";
import {
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

const GuestTable = ({
  rows = [],
  loading = false,
  onView = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) => {
  const columns = [
    {
      field: "avatar",
      headerName: "",
      width: 70,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Avatar>
          {row.firstName?.charAt(0)}
          {row.lastName?.charAt(0)}
        </Avatar>
      ),
    },

    {
      field: "guestCode",
      headerName: "Guest Code",
      width: 140,
    },

    {
      field: "guestName",
      headerName: "Guest Name",
      flex: 1,
      minWidth: 180,
      valueGetter: (_, row) =>
        `${row.firstName ?? ""} ${row.lastName ?? ""}`.trim(),
    },

    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 220,
    },

    {
      field: "city",
      headerName: "City",
      width: 140,
    },

    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: ({ value }) => {
        const colorMap = {
          ACTIVE: "success",
          CHECKED_IN: "primary",
          CHECKED_OUT: "warning",
          INACTIVE: "default",
          BANNED: "error",
        };

        return (
          <Chip
            label={value || "-"}
            color={colorMap[value] || "default"}
            size="small"
          />
        );
      },
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 140,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <>
          <Tooltip title="View">
            <IconButton onClick={() => onView(row)}>
              <Eye size={18} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Edit">
            <IconButton onClick={() => onEdit(row)}>
              <Pencil size={18} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton
              color="error"
              onClick={() => onDelete(row)}
            >
              <Trash2 size={18} />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <div className="mt-6 rounded-xl bg-white p-4 shadow-sm">
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        autoHeight
        disableRowSelectionOnClick
        pageSizeOptions={[10, 25, 50]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        getRowId={(row) => row.id}
        sx={{
          border: 0,
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f8fafc",
            fontWeight: 600,
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#f9fafb",
          },
        }}
      />
    </div>
  );
};

export default GuestTable;