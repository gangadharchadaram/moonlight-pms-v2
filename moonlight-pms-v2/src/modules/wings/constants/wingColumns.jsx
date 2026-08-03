import StatusChip from "@/shared/components/common/StatusChip";
import RowActions from "@/shared/components/common/RowActions";

export const wingColumns = ({
    onView,
    onEdit,
    onDelete
}) => [

    {
        field: "buildingName",
        headerName: "Building",
        width: 220
    },

    {
        field: "code",
        headerName: "Code",
        width: 120
    },

    {
        field: "name",
        headerName: "Wing Name",
        flex: 1.3
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