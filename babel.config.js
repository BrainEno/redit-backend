module.exports = {
  presets: [
    [
      "env",
      {
        loose: true,
        modules: false,
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-modules-commonjs"],
};
