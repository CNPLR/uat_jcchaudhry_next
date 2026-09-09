module.exports = {
  apps: [
    {
      name: 'jcchudary',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: '1', // Utilizes all available CPU cores (cluster mode)
      exec_mode: 'cluster', // Enables load balancing across cores
      cwd: './', // Points to the root of your application
      env: {
        NODE_ENV: 'production',
        PORT: 3000 // Change this if you want to run on a different port
      }
    }
  ]
};