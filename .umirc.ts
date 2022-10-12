export default {
  npmClient: "npm",
  tailwindcss: {},
  history:{
    type:'hash'
  },
  publicPath: './', // 资源访问路径，默认/
  plugins: ["@umijs/plugins/dist/tailwindcss"],
};
