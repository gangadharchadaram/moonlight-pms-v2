import * as yup from "yup";

export const roomTypeSchema = yup.object({

    code: yup
        .string()
        .trim()
        .required("Code is required.")
        .max(20),

    name: yup
        .string()
        .trim()
        .required("Room Type Name is required.")
        .max(100),

    maxAdults: yup
        .number()
        .typeError("Maximum Adults is required.")
        .required()
        .min(1)
        .max(20),

    maxChildren: yup
        .number()
        .typeError("Maximum Children is required.")
        .required()
        .min(0)
        .max(20),

    basePrice: yup
        .number()
        .typeError("Base Price is required.")
        .required()
        .min(0),

    smokingAllowed: yup.boolean(),

    active: yup.boolean(),

    description: yup
        .string()
        .nullable()
        .max(500)

});