import StatusChip from "@/shared/components/common/StatusChip";
import RowActions from "@/shared/components/common/RowActions";

export const roomColumns = ({
    onView,
    onEdit,
    onDelete,
}) => [
    {
        field: "roomNumber",
        headerName: "Room No",
        minWidth: 120,
        flex: 1,
    },
    {
        field: "roomName",
        headerName: "Room Name",
        minWidth: 180,
        flex: 1.5,
    },
    {
        field: "roomTypeName",
        headerName: "Room Type",
        minWidth: 160,
        flex: 1.4,
    },
    {
        field: "building",
        headerName: "Building",
        minWidth: 120,
        flex: 1,
        valueGetter: (_, row) => row.building || "-",
    },
    {
        field: "wing",
        headerName: "Wing",
        minWidth: 100,
        flex: 0.8,
        valueGetter: (_, row) => row.wing || "-",
    },
    {
        field: "floor",
        headerName: "Floor",
        width: 90,
    },
    {
        field: "bedCount",
        headerName: "Beds",
        width: 90,
    },
    {
        field: "adultCapacity",
        headerName: "Adults",
        width: 90,
    },
    {
        field: "childCapacity",
        headerName: "Children",
        width: 90,
    },
    {
        field: "roomStatus",
        headerName: "Room Status",
        width: 150,
        renderCell: ({ value }) => (
            <StatusChip status={value} />
        ),
    },
    {
        field: "housekeepingStatus",
        headerName: "Housekeeping",
        width: 150,
        renderCell: ({ value }) => (
            <StatusChip status={value} />
        ),
    },
    {
        field: "active",
        headerName: "Status",
        width: 110,
        renderCell: ({ value }) => (
            <StatusChip
                status={value ? "ACTIVE" : "INACTIVE"}
            />
        ),
    },
    {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        width: 140,
        align: "center",
        headerAlign: "center",
        renderCell: ({ row }) => (
            <RowActions
                onView={() => onView(row)}
                onEdit={() => onEdit(row)}
                onDelete={() => onDelete(row)}
            />
        ),
    },
];