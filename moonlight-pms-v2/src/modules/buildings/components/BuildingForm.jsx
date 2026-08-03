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
import { useEffect } from "react";

import { buildingSchema } from "../validation/buildingValidation";

const defaultValues = {

    code: "",

    name: "",

    description: "",

    active: true

};

const BuildingForm = ({
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

        resolver: yupResolver(buildingSchema),

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
                                label="Building Code"
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
                                label="Building Name"
                                fullWidth
                                required
                                error={!!errors.name}
                                helperText={errors.name?.message}
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
                        name="active"
                        control={control}
                        render={({ field }) => (

                            <FormControlLabel

                                label="Active"

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
                            type="submit"
                            variant="contained"
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

export default BuildingForm;