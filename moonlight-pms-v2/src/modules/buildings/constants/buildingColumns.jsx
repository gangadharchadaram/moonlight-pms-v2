import StatusChip from "@/shared/components/common/StatusChip";
import RowActions from "@/shared/components/common/RowActions";

export const buildingColumns = ({
    onView,
    onEdit,
    onDelete
}) => [

    {
        field: "code",
        headerName: "Code",
        width: 140
    },

    {
        field: "name",
        headerName: "Building Name",
        flex: 1.4
    },

    {
        field: "description",
        headerName: "Description",
        flex: 2
    },

    {
        field: "active",
        headerName: "Status",
        width: 120,

        renderCell: ({ value }) => (

            <StatusChip
                status={
                    value
                        ? "ACTIVE"
                        : "INACTIVE"
                }
            />

        )

    },

    {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        width: 130,

        renderCell: ({ row }) => (

            <RowActions

                onView={() => onView(row)}

                onEdit={() => onEdit(row)}

                onDelete={() => onDelete(row)}

            />

        )

    }

];