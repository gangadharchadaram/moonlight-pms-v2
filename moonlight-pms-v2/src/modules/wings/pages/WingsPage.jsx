import { useMemo, useState } from "react";

import CrudPageLayout from "@/shared/components/crud/CrudPageLayout";
import CrudToolbar from "@/shared/components/crud/CrudToolbar";
import CrudDataGrid from "@/shared/components/crud/CrudDataGrid";
import ConfirmDeleteDialog from "@/shared/components/crud/ConfirmDeleteDialog";

import PageHeader from "@/shared/components/common/PageHeader";

import WingDialog from "../components/WingDialog";
import WingDrawer from "../components/WingDrawer";

import { wingColumns } from "../constants/wingColumns";

import {
    useWings,
    useDeleteWing,
} from "../hooks/useWings";

const WingsPage = () => {

    const { data = [], isLoading } = useWings();

    const deleteMutation = useDeleteWing();

    const [search, setSearch] = useState("");

    const [dialogOpen, setDialogOpen] = useState(false);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [deleteOpen, setDeleteOpen] = useState(false);

    const [selectedWing, setSelectedWing] = useState(null);

    const filteredWings = useMemo(() => {

        return data.filter((wing) =>

            wing.name
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||

            wing.code
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||

            wing.buildingName
                ?.toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [data, search]);

    const handleCreate = () => {

        setSelectedWing(null);

        setDialogOpen(true);

    };

    const handleEdit = (wing) => {

        setSelectedWing(wing);

        setDialogOpen(true);

    };

    const handleView = (wing) => {

        setSelectedWing(wing);

        setDrawerOpen(true);

    };

    const handleDeleteClick = (wing) => {

        setSelectedWing(wing);

        setDeleteOpen(true);

    };

    const handleDelete = async () => {

        await deleteMutation.mutateAsync(selectedWing.id);

        setDeleteOpen(false);

        setSelectedWing(null);

    };

    return (

        <CrudPageLayout

            header={
                <PageHeader
                    title="Wings"
                    subtitle="Manage building wings."
                />
            }

            toolbar={
                <CrudToolbar
                    search={search}
                    onSearch={(e) => setSearch(e.target.value)}
                    buttonText="Add Wing"
                    onAdd={handleCreate}
                />
            }

        >

            <CrudDataGrid

                rows={filteredWings}

                loading={isLoading}

                columns={wingColumns({

                    onView: handleView,

                    onEdit: handleEdit,

                    onDelete: handleDeleteClick,

                })}

            />

            <WingDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                selectedWing={selectedWing}
            />

            <WingDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                wing={selectedWing}
            />

            <ConfirmDeleteDialog
                open={deleteOpen}
                loading={deleteMutation.isPending}
                title="Delete Wing"
                message={`Delete "${selectedWing?.name}"?`}
                onClose={() => setDeleteOpen(false)}
                onConfirm={handleDelete}
            />

        </CrudPageLayout>

    );

};

export default WingsPage;