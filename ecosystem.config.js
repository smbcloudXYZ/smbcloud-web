/**
 * PM2 Ecosystem Configuration for smbCloud Web - Production
 *
 * Isolated environment configuration for multi-tenant deployment.
 *
 * Private secrets do not belong in this file.
 * Replace placeholder values on the server copy if you need them, then run:
 *   pm2 restart smbcloud-web --update-env && pm2 save
 *
 * Usage:
 *   mkdir -p /home/git/apps/web/smbcloudweb/logs
 *   cd /home/git/apps/web/smbcloudweb
 *   pm2 start ecosystem.config.js --env production
 *   pm2 restart smbcloud-web
 *   pm2 reload smbcloud-web --update-env
 *   pm2 stop smbcloud-web
 *   pm2 logs smbcloud-web
 *   pm2 monit
 */

module.exports = {
  apps: [
    {
      name: "smbcloud-web",

      // This app runs from the standalone server entrypoint.
      script: "node",
      args: "server.js",

      cwd: "/home/git/apps/web/smbcloudweb",

      instances: 1,
      exec_mode: "fork",

      autorestart: true,
      watch: false,
      max_memory_restart: "1G",

      min_uptime: "10s",
      max_restarts: 10,
      restart_delay: 4000,

      error_file: "/home/git/apps/web/smbcloudweb/logs/pm2-error.log",
      out_file: "/home/git/apps/web/smbcloudweb/logs/pm2-out.log",
      log_file: "/home/git/apps/web/smbcloudweb/logs/pm2-combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,

      env_production: {
        NODE_ENV: "production",
        // The standalone server reads PORT and HOSTNAME from env.
        PORT: "3028",
        HOSTNAME: "127.0.0.1",

        NEXT_TELEMETRY_DISABLED: "1",
        APP_NAME: "smbcloud-web",
        APP_ID: "smbcloud-web-prod",

        // Optional reference placeholders. Replace or remove on the server copy.
        BASE_PATH: "",
        NEXT_UMAMI_ID: "__SET_ON_SERVER_IF_ENABLED__",
        NEXT_PUBLIC_GISCUS_REPO: "__SET_ON_SERVER_IF_ENABLED__",
        NEXT_PUBLIC_GISCUS_REPOSITORY_ID: "__SET_ON_SERVER_IF_ENABLED__",
        NEXT_PUBLIC_GISCUS_CATEGORY: "__SET_ON_SERVER_IF_ENABLED__",
        NEXT_PUBLIC_GISCUS_CATEGORY_ID: "__SET_ON_SERVER_IF_ENABLED__",
      },

      node_args: [
        "--max-old-space-size=2048",
        "--max-http-header-size=16384",
      ].join(" "),

      kill_timeout: 5000,
      wait_ready: false,
      listen_timeout: 10000,
      shutdown_with_message: false,

      vizion: false,
    },
  ],
};
