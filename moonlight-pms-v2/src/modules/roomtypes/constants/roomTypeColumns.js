import StatusChip from "@/shared/components/common/StatusChip";
import RowActions from "@/shared/components/common/RowActions";

export const roomTypeColumns = ({
    onView,
    onEdit,
    onDelete
}) => [

    {
        field: "code",
        headerName: "Code",
        flex: 1,
        minWidth: 120
    },

    {
        field: "name",
        headerName: "Room Type",
        flex: 1.5,
        minWidth: 180
    },

    {
        field: "maxAdults",
        headerName: "Adults",
        type: "number",
        width: 100
    },

    {
        field: "maxChildren",
        headerName: "Children",
        type: "number",
        width: 110
    },

    {
        field: "basePrice",
        headerName: "Base Price",
        width: 140,
        renderCell: ({ value }) =>
            `₹${Number(value).toLocaleString("en-IN")}`
    },

    {
        field: "smokingAllowed",
        headerName: "Smoking",
        width: 120,
        renderCell: ({ value }) =>
            value ? "Yes" : "No"
    },

    {
        field: "active",
        headerName: "Status",
        width: 120,
        renderCell: ({ value }) => (
            <StatusChip active={value} />
        )
    },

    {
        field: "actions",
        headerName: "",
        width: 70,
        sortable: false,
        filterable: false,

        renderCell: ({ row }) => (
            <RowActions
                row={row}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        )
    }

];