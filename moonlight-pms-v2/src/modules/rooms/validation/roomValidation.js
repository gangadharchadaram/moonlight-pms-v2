import * as yup from "yup";

export const roomSchema = yup.object({

    roomNumber: yup
        .string()
        .required("Room Number is required"),

    roomName: yup
        .string()
        .required("Room Name is required"),

    roomTypeId: yup
        .number()
        .typeError("Room Type is required")
        .required("Room Type is required"),

    building: yup.string(),

    wing: yup.string(),

    floor: yup
        .number()
        .min(0, "Floor cannot be negative")
        .required("Floor is required"),

    adultCapacity: yup
        .number()
        .min(1, "Minimum 1 adult")
        .required(),

    childCapacity: yup
        .number()
        .min(0)
        .required(),

    bedCount: yup
        .number()
        .min(1)
        .required(),

    roomStatus: yup
        .string()
        .required(),

    housekeepingStatus: yup
        .string()
        .required(),

    smokingAllowed: yup.boolean(),

    active: yup.boolean(),

    description: yup.string()

});