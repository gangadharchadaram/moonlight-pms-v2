import { useEffect } from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from "@mui/material";

import BuildingForm from "./BuildingForm";

import {

    useCreateBuilding,

    useUpdateBuilding

} from "../hooks/useBuildings";

const BuildingDialog = ({

    open,

    onClose,

    selectedBuilding

}) => {

    const createMutation = useCreateBuilding();

    const updateMutation = useUpdateBuilding();

    const isEdit = Boolean(selectedBuilding);

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

                    id: selectedBuilding.id,

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

                {

                    isEdit

                        ? "Edit Building"

                        : "Add Building"

                }

            </DialogTitle>

            <DialogContent dividers>

                <BuildingForm

                    initialValues={selectedBuilding}

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
                >

                    Cancel

                </Button>

            </DialogActions>

        </Dialog>

    );

};

export default BuildingDialog;