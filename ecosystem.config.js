module.exports = {
  apps: [
    {
      name: 'red-dot-zone',
      script: 'npx',
      interpreter: 'none',
      args: 'serve -p 2020 -s build -T',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user: 'node',
      host: '89.216.56.189',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
    },
  },
};
