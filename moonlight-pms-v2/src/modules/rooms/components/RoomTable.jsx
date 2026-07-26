import React, { useMemo } from "react";
import CrudDataGrid from "@/shared/components/crud/CrudDataGrid";
import StatusChip from "@/shared/components/common/StatusChip";
import RowActions from "@/shared/components/common/RowActions";

const RoomTable = ({
  rooms = [],
  loading,
  onView,
  onEdit,
  onDelete,
}) => {
  const columns = useMemo(
    () => [
      {
        field: "roomNumber",
        headerName: "Room No",
        flex: 1,
      },
      {
        field: "roomName",
        headerName: "Room Name",
        flex: 1.5,
      },
      {
        field: "roomTypeName",
        headerName: "Room Type",
        flex: 1.5,
      },
      {
        field: "floor",
        headerName: "Floor",
        width: 100,
      },
      {
        field: "adultCapacity",
        headerName: "Adults",
        width: 100,
      },
      {
        field: "childCapacity",
        headerName: "Children",
        width: 100,
      },
      {
        field: "roomStatus",
        headerName: "Room Status",
        flex: 1,
        renderCell: ({ value }) => (
          <StatusChip status={value} />
        ),
      },
      {
        field: "housekeepingStatus",
        headerName: "Housekeeping",
        flex: 1,
        renderCell: ({ value }) => (
          <StatusChip status={value} />
        ),
      },
      {
        field: "active",
        headerName: "Active",
        width: 100,
        renderCell: ({ value }) => (
          <StatusChip status={value ? "ACTIVE" : "INACTIVE"} />
        ),
      },
      {
        field: "actions",
        headerName: "Actions",
        width: 160,
        sortable: false,
        filterable: false,
        renderCell: ({ row }) => (
          <RowActions
            onView={() => onView(row)}
            onEdit={() => onEdit(row)}
            onDelete={() => onDelete(row)}
          />
        ),
      },
    ],
    [onView, onEdit, onDelete]
  );

  return (
    <CrudDataGrid
      rows={rooms}
      columns={columns}
      loading={loading}
      getRowId={(row) => row.id}
    />
  );
};

export default RoomTable;