import { useEffect } from "react";
import {
    Grid,
    TextField,
    MenuItem,
    Button,
    Stack,
    FormControlLabel,
    Switch
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { roomSchema } from "../validation/roomValidation";
import { useRoomTypes } from "@/modules/roomtypes/hooks/useRoomTypes";

const ROOM_STATUS = [
    "AVAILABLE",
    "OCCUPIED",
    "RESERVED",
    "OUT_OF_SERVICE"
];

const HOUSEKEEPING_STATUS = [
    "CLEAN",
    "DIRTY",
    "INSPECTED"
];

const defaultValues = {
    roomNumber: "",
    roomName: "",
    roomTypeId: "",
    building: "",
    wing: "",
    floor: 1,
    adultCapacity: 2,
    childCapacity: 0,
    bedCount: 1,
    roomStatus: "AVAILABLE",
    housekeepingStatus: "CLEAN",
    smokingAllowed: false,
    active: true,
    description: ""
};

const RoomForm = ({
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
        resolver: yupResolver(roomSchema),
        defaultValues
    });

    const { data: roomTypes = [] } = useRoomTypes();

    console.log("Room Types:", roomTypes);
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

                {/* Room Number */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Controller
                        name="roomNumber"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Room Number"
                                fullWidth
                                required
                                error={!!errors.roomNumber}
                                helperText={errors.roomNumber?.message}
                            />
                        )}
                    />
                </Grid>

                {/* Room Name */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Controller
                        name="roomName"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Room Name"
                                fullWidth
                                required
                                error={!!errors.roomName}
                                helperText={errors.roomName?.message}
                            />
                        )}
                    />
                </Grid>

                {/* Room Type */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Controller
                        name="roomTypeId"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                select
                                fullWidth
                                label="Room Type"
                                error={!!errors.roomTypeId}
                                helperText={errors.roomTypeId?.message}
                            >
                                {roomTypes.map((roomType) => (
                                    <MenuItem
                                        key={roomType.id}
                                        value={roomType.id}
                                    >
                                        {roomType.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}
                    />
                </Grid>

                {/* Building */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Controller
                        name="building"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Building"
                                fullWidth
                            />
                        )}
                    />
                </Grid>

                {/* Wing */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Controller
                        name="wing"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Wing"
                                fullWidth
                            />
                        )}
                    />
                </Grid>

                {/* Floor */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Controller
                        name="floor"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                type="number"
                                label="Floor"
                                fullWidth
                                error={!!errors.floor}
                                helperText={errors.floor?.message}
                            />
                        )}
                    />
                </Grid>

                {/* Adult Capacity */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Controller
                        name="adultCapacity"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                type="number"
                                label="Adults"
                                fullWidth
                                error={!!errors.adultCapacity}
                                helperText={errors.adultCapacity?.message}
                            />
                        )}
                    />
                </Grid>

                {/* Child Capacity */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Controller
                        name="childCapacity"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                type="number"
                                label="Children"
                                fullWidth
                                error={!!errors.childCapacity}
                                helperText={errors.childCapacity?.message}
                            />
                        )}
                    />
                </Grid>

                {/* Bed Count */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Controller
                        name="bedCount"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                type="number"
                                label="Bed Count"
                                fullWidth
                                error={!!errors.bedCount}
                                helperText={errors.bedCount?.message}
                            />
                        )}
                    />
                </Grid>

                {/* Room Status */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Controller
                        name="roomStatus"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                select
                                fullWidth
                                label="Room Status"
                            >
                                {ROOM_STATUS.map((status) => (
                                    <MenuItem
                                        key={status}
                                        value={status}
                                    >
                                        {status}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}
                    />
                </Grid>

                {/* Housekeeping */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Controller
                        name="housekeepingStatus"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                select
                                fullWidth
                                label="Housekeeping Status"
                            >
                                {HOUSEKEEPING_STATUS.map((status) => (
                                    <MenuItem
                                        key={status}
                                        value={status}
                                    >
                                        {status}
                                    </MenuItem>
                                ))}
                            </TextField>
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

                {/* Smoking Allowed */}
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
                                            field.onChange(e.target.checked)
                                        }
                                    />
                                }
                                label="Smoking Allowed"
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
                                control={
                                    <Switch
                                        checked={field.value}
                                        onChange={(e) =>
                                            field.onChange(e.target.checked)
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

export default RoomForm;