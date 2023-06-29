import config from "./configs.json";
export { default as yup } from "./yup";

export const common = config.common;
export const contactData = config.common.contactData;

export const currentConfig = config["production"];
