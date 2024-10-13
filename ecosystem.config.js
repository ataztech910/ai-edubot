module.exports = {
  apps: [
    {
      name: "bot-edubot",
      script: "npm",
      args: "run dev",
      cwd: "./packages/bot",
      watch: true,
    },
  ],
};
