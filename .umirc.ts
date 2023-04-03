export default {
  npmClient: "npm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss","@umijs/plugins/dist/locale"],
  locale: {
    enable: true,
    default: 'zh-CN',
    baseNavigator: true,
    baseSeparator: '-',
  },
};
