import { useMemo, useState } from "react";

import CrudPageLayout from "@/shared/components/crud/CrudPageLayout";
import CrudToolbar from "@/shared/components/crud/CrudToolbar";
import CrudDataGrid from "@/shared/components/crud/CrudDataGrid";
import ConfirmDeleteDialog from "@/shared/components/crud/ConfirmDeleteDialog";

import PageHeader from "@/shared/components/common/PageHeader";

import RoomDialog from "../components/RoomDialog";
import RoomDrawer from "../components/RoomDrawer";

import { roomColumns } from "../constants/roomColumns";

import {
    useRooms,
    useDeleteRoom
} from "../hooks/useRooms";

const RoomsPage = () => {

    const { data = [], isLoading } = useRooms();
    console.log("Rooms Data:", data);

    const deleteMutation = useDeleteRoom();

    const [search, setSearch] = useState("");

    const [dialogOpen, setDialogOpen] = useState(false);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [deleteOpen, setDeleteOpen] = useState(false);

    const [selectedRoom, setSelectedRoom] = useState(null);

    const filteredRooms = useMemo(() => {

        return data.filter((room) => {

            const keyword = search.toLowerCase();

            return (

                room.roomNumber?.toLowerCase().includes(keyword) ||

                room.roomName?.toLowerCase().includes(keyword) ||

                room.roomTypeName?.toLowerCase().includes(keyword)

            );

        });

    }, [data, search]);

    const handleCreate = () => {

        setSelectedRoom(null);

        setDialogOpen(true);

    };

    const handleEdit = (room) => {

        setSelectedRoom(room);

        setDialogOpen(true);

    };

    const handleView = (room) => {

        setSelectedRoom(room);

        setDrawerOpen(true);

    };

    const handleDeleteClick = (room) => {

        setSelectedRoom(room);

        setDeleteOpen(true);

    };

    const handleDelete = async () => {

        try {

            await deleteMutation.mutateAsync(selectedRoom.id);

            setDeleteOpen(false);

            setSelectedRoom(null);

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <CrudPageLayout

            header={

                <PageHeader
                    title="Rooms"
                    subtitle="Manage hotel rooms."
                />

            }

            toolbar={

                <CrudToolbar

                    search={search}

                    onSearch={(e) =>
                        setSearch(e.target.value)
                    }

                    buttonText="Add Room"

                    onAdd={handleCreate}

                />

            }

        >

            <CrudDataGrid

                rows={filteredRooms}

                loading={isLoading}

                columns={roomColumns({

                    onView: handleView,

                    onEdit: handleEdit,

                    onDelete: handleDeleteClick

                })}

            />

            <RoomDialog

                open={dialogOpen}

                onClose={() => {

                    setDialogOpen(false);

                    setSelectedRoom(null);

                }}

                selectedRoom={selectedRoom}

            />

            <RoomDrawer

                open={drawerOpen}

                room={selectedRoom}

                onClose={() => {

                    setDrawerOpen(false);

                    setSelectedRoom(null);

                }}

            />

            <ConfirmDeleteDialog

                open={deleteOpen}

                loading={deleteMutation.isPending}

                title="Delete Room"

                message={`Are you sure you want to delete Room "${selectedRoom?.roomNumber}"?`}

                onClose={() => {

                    setDeleteOpen(false);

                    setSelectedRoom(null);

                }}

                onConfirm={handleDelete}

            />

        </CrudPageLayout>

    );

};

export default RoomsPage;