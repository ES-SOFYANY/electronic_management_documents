import pino from 'pino';

const LOGGER = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL || 'error',
});

export default LOGGER;
