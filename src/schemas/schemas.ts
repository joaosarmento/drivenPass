import joi from "joi"

export const signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});