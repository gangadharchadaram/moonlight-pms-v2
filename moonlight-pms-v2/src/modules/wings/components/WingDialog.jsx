import { useEffect } from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";

import WingForm from "./WingForm";

import {
    useCreateWing,
    useUpdateWing,
} from "../hooks/useWings";

const WingDialog = ({
    open,
    onClose,
    selectedWing,
}) => {

    const createMutation = useCreateWing();

    const updateMutation = useUpdateWing();

    const isEdit = Boolean(selectedWing);

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

                    id: selectedWing.id,

                    payload: data,

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

                {isEdit ? "Edit Wing" : "Add Wing"}

            </DialogTitle>

            <DialogContent dividers>

                <WingForm
                    initialValues={selectedWing}
                    onSubmit={handleSubmit}
                    loading={
                        createMutation.isPending ||
                        updateMutation.isPending
                    }
                />

            </DialogContent>

            <DialogActions>

                <Button onClick={onClose}>
                    Cancel
                </Button>

            </DialogActions>

        </Dialog>

    );

};

export default WingDialog;