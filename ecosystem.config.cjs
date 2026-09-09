module.exports = {
  apps: [{
    name: "jcchaudhry",
    script: "node_modules/next/dist/bin/next",
    args: "start",
    cwd: "./",
    instances: 1,
    exec_mode: "fork",
    watch: false,
    autorestart: true,
    max_memory_restart: "1G",

    env: {
      NODE_ENV: "development",
      PORT: 3000
    },

    env_uat: {
      NODE_ENV: "production",
      PORT: 3000,
      NEXT_PUBLIC_API_URL: "https://uat5.jcchaudhry.com"
    },

    env_production: {
      NODE_ENV: "production",
      PORT: 3000,
      NEXT_PUBLIC_API_URL: "https://www.jcchaudhry.com"
    }
  }]
};