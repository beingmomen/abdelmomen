module.exports = {
  apps: [
    {
      name: "beingmomen",
      port: "9731",
      exec_mode: "cluster",
      instances: 1,
      script: "./.output/server/index.mjs",
    },
  ],
};
