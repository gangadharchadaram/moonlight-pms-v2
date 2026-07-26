import {
    Grid,
    TextField,
    FormControlLabel,
    Switch,
    Button,
    Stack
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { roomTypeSchema } from "../validation/roomTypeValidation";
import { useEffect } from "react";

const defaultValues = {

    code: "",
    name: "",
    maxAdults: 1,
    maxChildren: 0,
    basePrice: 0,
    smokingAllowed: false,
    active: true,
    description: ""

};



const RoomTypeForm = ({
    initialValues,
    onSubmit,
    loading
}) => {

const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
} = useForm({
    resolver: yupResolver(roomTypeSchema),
    defaultValues
});

useEffect(() => {

    if (initialValues) {

        reset(initialValues);

    } else {

        reset(defaultValues);

    }

}, [initialValues, reset]);

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <Grid container spacing={3}>

                <Grid size={{ xs: 12, md: 6 }}>
                    

                    <Controller
                        name="code"
                        control={control}
                        render={({ field }) => (

                            <TextField
                                {...field}
                                label="Code"
                                fullWidth
                                required
                                error={!!errors.code}
                                helperText={errors.code?.message}
                            />

                        )}
                    />

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (

                            <TextField
                                {...field}
                                label="Room Type"
                                fullWidth
                                required
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />

                        )}
                    />

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <Controller
                        name="maxAdults"
                        control={control}
                        render={({ field }) => (

                            <TextField
                                {...field}
                                type="number"
                                label="Maximum Adults"
                                fullWidth
                                required
                                error={!!errors.maxAdults}
                                helperText={errors.maxAdults?.message}
                            />

                        )}
                    />

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <Controller
                        name="maxChildren"
                        control={control}
                        render={({ field }) => (

                            <TextField
                                {...field}
                                type="number"
                                label="Maximum Children"
                                fullWidth
                                required
                                error={!!errors.maxChildren}
                                helperText={errors.maxChildren?.message}
                            />

                        )}
                    />

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <Controller
                        name="basePrice"
                        control={control}
                        render={({ field }) => (

                            <TextField
                                {...field}
                                type="number"
                                label="Base Price"
                                fullWidth
                                required
                                error={!!errors.basePrice}
                                helperText={errors.basePrice?.message}
                            />

                        )}
                    />

                </Grid>

                <Grid size={{ xs: 12 }}>

                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => (

                            <TextField
                                {...field}
                                label="Description"
                                fullWidth
                                multiline
                                rows={4}
                            />

                        )}
                    />

                </Grid>

                <Grid size={{ xs: 12 }}>

                    <Controller
                        name="smokingAllowed"
                        control={control}
                        render={({ field }) => (

                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={field.value}
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.checked
                                            )
                                        }
                                    />
                                }
                                label="Smoking Allowed"
                            />

                        )}
                    />

                </Grid>

                <Grid size={{ xs: 12 }}>

                    <Controller
                        name="active"
                        control={control}
                        render={({ field }) => (

                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={field.value}
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.checked
                                            )
                                        }
                                    />
                                }
                                label="Active"
                            />

                        )}
                    />

                </Grid>

                <Grid size={{ xs: 12 }}>

                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                    >

                        <Button
                            variant="contained"
                            type="submit"
                            loading={loading}
                        >
                            Save
                        </Button>

                    </Stack>

                </Grid>

            </Grid>

        </form>

    );

};

export default RoomTypeForm;