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
      // Pre-setup command or path to a script on your local machine
      // 'pre-setup': "source ~/.nvm/nvm.sh",
      // Post-setup commands or path to a script on the host machine
      // eg: placing configurations in the shared dir etc
      // 'post-setup': "npm install && npm run build && pm2 startOrRestart ecosystem.config.json",
      'post-setup': "pwd",
      // pre-deploy action
      // 'pre-deploy-local': "echo 'This is a local executed command'",
      // post-deploy action
      'post-deploy': "pwd && ls -la",
    },
  }
}