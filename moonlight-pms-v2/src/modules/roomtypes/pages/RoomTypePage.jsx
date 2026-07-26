import { useMemo, useState } from "react";

import CrudPageLayout from "@/shared/components/crud/CrudPageLayout";
import CrudToolbar from "@/shared/components/crud/CrudToolbar";
import CrudDataGrid from "@/shared/components/crud/CrudDataGrid";
import ConfirmDeleteDialog from "@/shared/components/crud/ConfirmDeleteDialog";

import PageHeader from "@/shared/components/common/PageHeader";

import RoomTypeDialog from "../components/RoomTypeDialog";
import RoomTypeDrawer from "../components/RoomTypeDrawer";

import { roomTypeColumns } from "../constants/roomTypeColumns";

import {
    useRoomTypes,
    useDeleteRoomType
} from "../hooks/useRoomTypes";

const RoomTypePage = () => {

    const { data = [], isLoading } = useRoomTypes();

    const deleteMutation = useDeleteRoomType();

    const [search, setSearch] = useState("");

    const [dialogOpen, setDialogOpen] = useState(false);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [deleteOpen, setDeleteOpen] = useState(false);

    const [selectedRoomType, setSelectedRoomType] = useState(null);

    const filteredRoomTypes = useMemo(() => {

        return data.filter((roomType) =>

            roomType.name
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||

            roomType.code
                ?.toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [data, search]);

    const handleCreate = () => {

        setSelectedRoomType(null);

        setDialogOpen(true);

    };

    const handleEdit = (roomType) => {

        setSelectedRoomType(roomType);

        setDialogOpen(true);

    };

    const handleView = (roomType) => {

        setSelectedRoomType(roomType);

        setDrawerOpen(true);

    };

    const handleDeleteClick = (roomType) => {

        setSelectedRoomType(roomType);

        setDeleteOpen(true);

    };

    const handleDelete = async () => {

        await deleteMutation.mutateAsync(selectedRoomType.id);

        setDeleteOpen(false);

        setSelectedRoomType(null);

    };

    return (

        <CrudPageLayout

            header={

                <PageHeader
                    title="Room Types"
                    subtitle="Manage hotel room categories."
                />

            }

            toolbar={

                <CrudToolbar

                    search={search}

                    onSearch={(e) =>
                        setSearch(e.target.value)
                    }

                    buttonText="Add Room Type"

                    onAdd={handleCreate}

                />

            }

        >

            <CrudDataGrid

                rows={filteredRoomTypes}

                loading={isLoading}

                columns={roomTypeColumns({

                    onView: handleView,

                    onEdit: handleEdit,

                    onDelete: handleDeleteClick

                })}

            />

            <RoomTypeDialog

                open={dialogOpen}

                onClose={() => setDialogOpen(false)}

                selectedRoomType={selectedRoomType}

            />

            <RoomTypeDrawer

                open={drawerOpen}

                roomType={selectedRoomType}

                onClose={() => setDrawerOpen(false)}

            />

            <ConfirmDeleteDialog

                open={deleteOpen}

                loading={deleteMutation.isPending}

                title="Delete Room Type"

                message={`Delete "${selectedRoomType?.name}"?`}

                onClose={() => setDeleteOpen(false)}

                onConfirm={handleDelete}

            />

        </CrudPageLayout>

    );

};

export default RoomTypePage;