import { useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from "@mui/material";

import RoomTypeForm from "./RoomTypeForm";
import {
    useCreateRoomType,
    useUpdateRoomType
} from "../hooks/useRoomTypes";

const RoomTypeDialog = ({
    open,
    onClose,
    selectedRoomType
}) => {

    const createMutation = useCreateRoomType();
    const updateMutation = useUpdateRoomType();

    const isEdit = Boolean(selectedRoomType);

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

                    id: selectedRoomType.id,
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
            maxWidth="md"
            fullWidth
        >

            <DialogTitle>

                {isEdit
                    ? "Edit Room Type"
                    : "Add Room Type"}

            </DialogTitle>

            <DialogContent dividers>

                <RoomTypeForm
                    initialValues={selectedRoomType}
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

export default RoomTypeDialog;