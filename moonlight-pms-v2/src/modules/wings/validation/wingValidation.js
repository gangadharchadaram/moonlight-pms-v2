import * as yup from "yup";

export const wingSchema = yup.object({

    buildingId: yup
        .number()
        .required("Building is required"),

    code: yup
        .string()
        .required("Wing code is required"),

    name: yup
        .string()
        .required("Wing name is required"),

    description: yup.string(),

    active: yup.boolean()

});