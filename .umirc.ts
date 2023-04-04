export default {
  npmClient: "npm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss","@umijs/plugins/dist/locale"],
  locale: {
    enable: true,
    default: 'en-US',
    baseSeparator: '-',
    baseNavigator: false,
    title: false,
    useLocalStorage: true,
  },
};
