import { registerAs } from "@nestjs/config";
import Joi from "joi";

export const throttle = registerAs("throttle", () => ({
	limit: +process.env.THROTTLE_LIMIT,
	ttl: +process.env.THROTTLE_TTL,
}));

export const throttleConfigValidationSchema = {
	THROTTLE_TTL: Joi.number().required(),
	THROTTLE_LIMIT: Joi.number().required(),
};
