export default {
  npmClient: "npm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss","@umijs/plugins/dist/locale"],
  locale: {
    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    baseNavigator: true,
    baseSeparator: '-',
    default: 'zh-CN',
    title: false,
    useLocalStorage: true,
  },
};
