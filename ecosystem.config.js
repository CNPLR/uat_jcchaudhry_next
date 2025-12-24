module.exports = {
  apps: [
    {
      name: "jcchaudhry",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 6161",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
