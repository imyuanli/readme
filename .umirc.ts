export default {
  npmClient: "npm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss","@umijs/plugins/dist/locale"],
  locale: {
    default: 'en-US',
    baseSeparator: '-',
    baseNavigator: true,
    title: false,
    useLocalStorage: true,
  },
};
