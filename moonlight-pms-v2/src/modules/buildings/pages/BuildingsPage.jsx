import { useMemo, useState } from "react";

import CrudPageLayout from "@/shared/components/crud/CrudPageLayout";
import CrudToolbar from "@/shared/components/crud/CrudToolbar";
import CrudDataGrid from "@/shared/components/crud/CrudDataGrid";
import ConfirmDeleteDialog from "@/shared/components/crud/ConfirmDeleteDialog";

import PageHeader from "@/shared/components/common/PageHeader";

import BuildingDialog from "../components/BuildingDialog";
import BuildingDrawer from "../components/BuildingDrawer";

import { buildingColumns } from "../constants/buildingColumns";

import {
    useBuildings,
    useDeleteBuilding
} from "../hooks/useBuildings";

const BuildingsPage = () => {

    const { data = [], isLoading } = useBuildings();

    const deleteMutation = useDeleteBuilding();

    const [search, setSearch] = useState("");

    const [dialogOpen, setDialogOpen] = useState(false);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [deleteOpen, setDeleteOpen] = useState(false);

    const [selectedBuilding, setSelectedBuilding] = useState(null);

    const filteredBuildings = useMemo(() => {

        return data.filter((building) =>

            building.name
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||

            building.code
                ?.toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [data, search]);

    const handleCreate = () => {

        setSelectedBuilding(null);

        setDialogOpen(true);

    };

    const handleEdit = (building) => {

        setSelectedBuilding(building);

        setDialogOpen(true);

    };

    const handleView = (building) => {

        setSelectedBuilding(building);

        setDrawerOpen(true);

    };

    const handleDeleteClick = (building) => {

        setSelectedBuilding(building);

        setDeleteOpen(true);

    };

    const handleDelete = async () => {

        await deleteMutation.mutateAsync(
            selectedBuilding.id
        );

        setDeleteOpen(false);

        setSelectedBuilding(null);

    };

    return (

        <CrudPageLayout

            header={

                <PageHeader

                    title="Buildings"

                    subtitle="Manage hotel buildings."

                />

            }

            toolbar={

                <CrudToolbar

                    search={search}

                    onSearch={(e) =>
                        setSearch(e.target.value)
                    }

                    buttonText="Add Building"

                    onAdd={handleCreate}

                />

            }

        >

            <CrudDataGrid

                rows={filteredBuildings}

                loading={isLoading}

                columns={buildingColumns({

                    onView: handleView,

                    onEdit: handleEdit,

                    onDelete: handleDeleteClick

                })}

            />

            <BuildingDialog

                open={dialogOpen}

                onClose={() =>
                    setDialogOpen(false)
                }

                selectedBuilding={selectedBuilding}

            />

            <BuildingDrawer

                open={drawerOpen}

                onClose={() =>
                    setDrawerOpen(false)
                }

                building={selectedBuilding}

            />

            <ConfirmDeleteDialog

                open={deleteOpen}

                loading={deleteMutation.isPending}

                title="Delete Building"

                message={`Delete "${selectedBuilding?.name}" ?`}

                onClose={() =>
                    setDeleteOpen(false)
                }

                onConfirm={handleDelete}

            />

        </CrudPageLayout>

    );

};

export default BuildingsPage;