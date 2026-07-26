import { Box, LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const CrudDataGrid = ({
    rows = [],
    columns = [],
    loading = false,
    pageSize = 10,
    checkboxSelection = false,
    autoHeight = true
}) => {

    return (

        <Box
            sx={{
                width: "100%",
                bgcolor: "background.paper",
                borderRadius: 2,
                overflow: "hidden"
            }}
        >

            <DataGrid
                rows={rows}
                columns={columns}
                loading={loading}
                autoHeight={autoHeight}
                checkboxSelection={checkboxSelection}
                disableRowSelectionOnClick
                pageSizeOptions={[10, 25, 50, 100]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            page: 0,
                            pageSize
                        }
                    }
                }}
                slots={{
                    loadingOverlay: LinearProgress
                }}
                sx={{
                    border: 0,

                    "& .MuiDataGrid-columnHeaders": {
                        fontWeight: 700
                    },

                    "& .MuiDataGrid-columnHeaderTitle": {
                        fontWeight: 600
                    },

                    "& .MuiDataGrid-cell:focus": {
                        outline: "none"
                    },

                    "& .MuiDataGrid-cell:focus-within": {
                        outline: "none"
                    },

                    "& .MuiDataGrid-row:hover": {
                        cursor: "pointer"
                    }
                }}
            />

        </Box>

    );

};

export default CrudDataGrid;