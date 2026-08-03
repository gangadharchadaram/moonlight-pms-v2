import * as yup from "yup";

export const buildingSchema = yup.object({

    code: yup
        .string()
        .required("Code is required"),

    name: yup
        .string()
        .required("Building name is required"),

    description: yup.string(),

    active: yup.boolean()

});