module.exports = {
  apps: [
    {
      name: "jcchaudhry",

      // Next.js production server
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",

      // EC2 application directory
      cwd: "./",

      // Production environment
      env: {
        NODE_ENV: "production",
        PORT: 3000
      },

      // PM2
      instances: 1,
      exec_mode: "fork",
      watch: false,
      autorestart: true,

      // Restart if memory exceeds 1GB
      max_memory_restart: "1G",

      // Logs
      error_file: "/var/log/pm2/jcchaudhry-error.log",
      out_file: "/var/log/pm2/jcchaudhry-out.log",
      time: true
    }
  ]
};