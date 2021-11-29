import dotenv from 'dotenv';

dotenv.config();

export default {
  someEnvValue: process.env.SOME_ENV_VAR as string,
};
