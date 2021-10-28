module.exports = {
  apps: [{
    name: "app",
    script: "serve -s build"
  }],
  deploy: {
    approval: {
      user: "dome",
      host: ["165.227.157.221"],
      ssh_options: "StrictHostKeyChecking=no",
      ref: "origin/master",
      repo: "git@github.com:domvo/cratest.git",
      path: "/home/dome/cratest",
      'post-setup': "npm install && npm run build && pm2 startOrRestart ecosystem.config.json",
      'post-deploy': "npm install && npm run build && pm2 startOrRestart ecosystem.config.json",
    },
  }
}