type Config = {
  BACKEND_BASE_API: string;
};

const config: Config = {
  BACKEND_BASE_API: 'https://codingtest.op.gg/api'
};

const CONFIG = Object.freeze(config);

export default CONFIG;
