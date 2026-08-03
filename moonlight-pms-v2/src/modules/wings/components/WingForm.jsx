import {
    Grid,
    TextField,
    MenuItem,
    FormControlLabel,
    Switch,
    Button,
    Stack
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

import { wingSchema } from "../validation/wingValidation";
import { useBuildings } from "@/modules/buildings/hooks/useBuildings";

const defaultValues = {

    buildingId: "",

    code: "",

    name: "",

    description: "",

    active: true

};

const WingForm = ({
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

        resolver: yupResolver(wingSchema),

        defaultValues

    });

    const { data: buildings = [] } = useBuildings();

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

                {/* Building */}

                <Grid size={{ xs: 12, md: 6 }}>

                    <Controller
                        name="buildingId"
                        control={control}
                        render={({ field }) => (

                            <TextField
                                {...field}
                                select
                                fullWidth
                                required
                                label="Building"
                                error={!!errors.buildingId}
                                helperText={errors.buildingId?.message}
                            >

                                {buildings.map((building) => (

                                    <MenuItem
                                        key={building.id}
                                        value={building.id}
                                    >
                                        {building.name}
                                    </MenuItem>

                                ))}

                            </TextField>

                        )}
                    />

                </Grid>

                {/* Wing Code */}

                <Grid size={{ xs: 12, md: 6 }}>

                    <Controller
                        name="code"
                        control={control}
                        render={({ field }) => (

                            <TextField
                                {...field}
                                label="Wing Code"
                                fullWidth
                                required
                                error={!!errors.code}
                                helperText={errors.code?.message}
                            />

                        )}
                    />

                </Grid>

                {/* Wing Name */}

                <Grid size={{ xs: 12 }}>

                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (

                            <TextField
                                {...field}
                                label="Wing Name"
                                fullWidth
                                required
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />

                        )}
                    />

                </Grid>

                {/* Description */}

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

                {/* Active */}

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

                {/* Save */}

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

export default WingForm;