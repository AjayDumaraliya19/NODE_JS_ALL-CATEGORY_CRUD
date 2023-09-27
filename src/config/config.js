const Joi = require("joi");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const envVarsSchema = Joi.object({
  PORT: Joi.number().default(3000),
  MONGODB_URL: Joi.string().trim().description("Mongodb url"),
  BASE_URL: Joi.string().trim().description("Base URl!"),
  JWT_SECRET_KEY: Joi.string().description("Jwt secrete key!"),
  SMTP_HOST: Joi.string().description("Server that will send the emails"),
  SMTP_PORT: Joi.number().description("Port to connect to the email server"),
  SMTP_USERNAME: Joi.string().description("Username for email server"),
  SMTP_PASSWORD: Joi.string().description("Password for email server"),
  EMAIL_FROM: Joi.string().description(
    "The from field in the emails sent by the app"
  ),
}).unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);
if (error) {
  console.log("Config Error: ", error);
}

module.exports = {
  port: envVars.PORT,
  mongodb: {
    url: envVars.MONGODB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  base_url: envVars.BASE_URL,
  jwt: {
    secret_key: envVars.JWT_SECRET_KEY,
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    from: envVars.EMAIL_FROM,
  },
};
