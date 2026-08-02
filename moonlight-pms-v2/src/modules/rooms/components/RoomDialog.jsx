import { useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from "@mui/material";

import RoomForm from "./RoomForm";

import {
    useCreateRoom,
    useUpdateRoom
} from "../hooks/useRooms";

const RoomDialog = ({
    open,
    onClose,
    selectedRoom
}) => {

    const createMutation = useCreateRoom();
    const updateMutation = useUpdateRoom();

    const isEdit = Boolean(selectedRoom);

    useEffect(() => {

        if (!open) {

            createMutation.reset();
            updateMutation.reset();

        }

    }, [open]);

    const handleSubmit = async (data) => {

        try {

            if (isEdit) {

                await updateMutation.mutateAsync({

                    id: selectedRoom.id,
                    payload: data

                });

            } else {

                await createMutation.mutateAsync(data);

            }

            onClose();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="lg"
        >

            <DialogTitle>

                {isEdit ? "Edit Room" : "Add Room"}

            </DialogTitle>

            <DialogContent dividers>

                <RoomForm
                    initialValues={selectedRoom}
                    onSubmit={handleSubmit}
                    loading={
                        createMutation.isPending ||
                        updateMutation.isPending
                    }
                />

            </DialogContent>

            <DialogActions>

                <Button
                    onClick={onClose}
                    disabled={
                        createMutation.isPending ||
                        updateMutation.isPending
                    }
                >
                    Cancel
                </Button>

            </DialogActions>

        </Dialog>

    );

};

export default RoomDialog;