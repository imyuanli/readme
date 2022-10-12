export default {
  npmClient: "npm",
  tailwindcss: {},
  base: './', // 打包路径，默认是/
  publicPath: './', // 资源访问路径，默认/
  plugins: ["@umijs/plugins/dist/tailwindcss"],
};
