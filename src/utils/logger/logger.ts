const LOGGING_ENABLED = __DEV__;

const logger = {
  log: (...args: any[]) => {
    if (!LOGGING_ENABLED) return;
    console.log(...args);
  },
};

export default logger;
