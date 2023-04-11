export default {
    'template': '模板',
    'edit': '编辑',
    'preview': '预览',
    'use': '已使用模板',
    'no-use': '未使用模板',
    'btn-text': '自定义模板',
    'modal-title': '添加自定义模板',
    'modal-placeholder': '模板名称',
    'copy-success': '复制成功',
    'download-success': '下载成功',
    'reset-title': '恢复初始状态',
    'reset-text': '是否重置您所有自述文件的模板？',
    'lang-change-title': '语言切换',
    'lang-change-text': '切换语言会重置您所有自述文件的模板',
    'title-and-description.name': '标题和描述',
    'title-and-description.markdown': `
# 项目标题

简要说明这个项目是做什么的，是为谁做的

`,
    'installation.name': '安装',
    'installation.markdown': `
## 安装

使用 npm 安装 my-project

\`\`\`bash
  npm install my-project
  cd my-project
\`\`\`
    `,
    'logo.name': 'Logo',
    'logo.markdown': `
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

`,
    'run-locally.name': '在本地运行',
    'run-locally.markdown': `
## 在本地运行

Clone 这个 project

\`\`\`bash
  git clone https://link-to-project
\`\`\`

前往项目目录

\`\`\`bash
  cd my-project
\`\`\`

安装依赖

\`\`\`bash
  npm install
\`\`\`

启动服务器

\`\`\`bash
  npm run start
\`\`\`

`,
    'screenshots.name': '截图',
    'screenshots.markdown': `
## 截图

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

`,
    'env-variables.name': '环境变量',
    'env-variables.markdown': `
## 环境变量

要运行这个项目，你将需要在你的 .env 文件中添加以下环境变量

\`API_KEY\`

\`ANOTHER_API_KEY\`

`,
    'features.name': '特性',
    'features.markdown': `
## 特性

- 光明/黑暗模式切换
- 在线预览
- 全屏模式
- 跨平台

`,
    'usage-examples.name': '使用方法/示例',
    'usage-examples.markdown': `
## 使用方法/示例

\`\`\`javascript
import Component from 'my-project'

function App() {
  return <Component />
}
\`\`\`

`,
    'api.name': 'API 参考',
    'api.markdown': `
## API 参考

#### 获取所有项目

\`\`\`http
  GET /api/items
\`\`\`

| 参数 | 类型     | 描述                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **必选**. 你的 API key |

#### 获取一个项目

\`\`\`http
  GET /api/items/$\{id}
\`\`\`

| 参数 | 类型     | 描述                       |
| :-------- | :------- | :-------------------------------- |
| \`id\`      | \`string\` | **必选**. 要获取的项目的 id |

#### add(num1, num2)

接受两个数字并返回其总和。

`,
    'contributing.name': '贡献',
    'contributing.markdown': `
## 贡献

我们随时欢迎大家的贡献!

请参阅 \`contributing.md\` 了解如何开始贡献。

请遵守本项目的 \`行为准则\`。

`,
    'tests.name': '运行测试',
    'tests.markdown': `
## 运行测试

要运行测试，运行以下命令

\`\`\`bash
  npm run test
\`\`\`

`,
    'license.name': '证书',
    'license.markdown': `
## 证书

[MIT](https://choosealicense.com/licenses/mit/)

`,
    'badges.name': '徽标',
    'badges.markdown': `
## 徽标

从以下位置添加徽章：[shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

`,
    'roadmap.name': '路线图',
    'roadmap.markdown': `
## 路线图

- 其他浏览器支持

- 增加更多的集成

`,
    'authors.name': '作者',
    'authors.markdown': `
## 作者

- [@octokatherine](https://www.github.com/octokatherine)

`,
    'acknowledgement.name': '致谢',
    'acknowledgement.markdown': `
## 致谢

 - [非常棒的 Readme 模板](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [非常棒的 README](https://github.com/matiassingers/awesome-readme)
 - [如何写好 readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

`,
    'support.name': '支持',
    'support.markdown': `
## 支持

如需支持，请发送电子邮件至 fake@fake.com 或加入我们的 Slack 频道。

`,
    'feedback.name': '反馈',
    'feedback.markdown': `
## 反馈

如果你有任何反馈，请联系我们：fake@fake.com

`,
    'related.name': '相关',
    'related.markdown': `
## 相关

以下是一些相关项目

[非常棒的 README](https://github.com/matiassingers/awesome-readme)

`,
    'demo.name': 'Demo',
    'demo.markdown': `
## Demo

插入 gif 图片或演示链接

`,
    'tech.name': '技术',
    'tech.markdown': `
## 技术栈

**客户端:** React, Redux, TailwindCSS

**服务端:** Node, Express

`,
    'optimizations.name': '优化',
    'optimizations.markdown': `
## 优化

你在你的代码中做了哪些优化？如：重构、性能改进、可访问性

`,
    'lessons.name': '教训',
    'lessons.markdown': `
## 经验和教育

你在建设这个项目时学到了什么？你遇到了什么挑战，你是如何克服的？

`,
    'faq.name': 'FAQ',
    'faq.markdown': `
## FAQ

#### 问题 1

回答 1

#### 问题 2

回答 2

`,
    'used-by.name': '谁在使用',
    'used-by.markdown': `
## 谁在使用

该项目被以下公司使用:

- 公司 1
- 公司 2

`,
    'documentation.name': '文档',
    'documentation.markdown': `
## 文档

[文档](https://linktodocumentation)

`,
    'deployment.name': '开发',
    'deployment.markdown': `
## 开发

要部署这个项目，请运行

\`\`\`bash
  npm run deploy
\`\`\`

`,
    'appendix.name': '附录',
    'appendix.markdown': `
## 附录

任何额外的信息都在这里

`,
    'github-intro.name': 'Github - 介绍',
    'github-intro.markdown': `
# 你好, 我是鸢离! 👋

`,
    'github-about-me.name': 'Github - 关于我',
    'github-about-me.markdown': `
## 🚀 关于
我是一个前端开发工程师...

`,
    'github-skills.name': 'Github - 技能',
    'github-skills.markdown': `
## 🛠 技能
Javascript, HTML, CSS...

`,
    'github-links.name': 'Github - 链接',
    'github-links.markdown': `
## 🔗 链接
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)
 **[查看更多](https://shields.io/)**
`,
    'github-other.name': 'Github - 其他',
    'github-other.markdown': `
## 其他常见的 Github 简介部分

👩‍💻 我当前就职于 **[名称](https://example.com)**
        
🧠 我目前在学习 **[名称](https://example.com)**
            
📄 了解我的经历 **[名称](https://example.com)**
    
👨‍💻 我所有项目都在 **[名称](https://example.com)**
    
📝 我定期写的文章在 **[名称](https://example.com)**

👯‍ 我希望能在以下方面进行合作 **[名称](https://example.com)**

🤔 我想寻求帮助的是 **[名称](https://example.com)**

💬 向我咨询 **[名称](https://example.com)**

📫 如何联系我 **[名称](https://example.com)**

😄 代名词 **[名称](https://example.com)**

⚡ 性格方面 **[名称](https://example.com)**

`,
    'github-stats.name': 'Github - 统计卡片',
    'github-stats.markdown': `
## 将imyuanli替换为自己的github名称 
    
[![imyuanli's GitHub stats](https://github-readme-stats.vercel.app/api?username=imyuanli)](https://github.com/anuraghazra/github-readme-stats)

 **[更多参数](https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_cn.md#github-统计卡片)**
`,
    'github-pins.name': 'Github - 更多置顶',
    'github-pins.markdown': `
## 将imyuanli替换为自己的github名称,readme替换为自己的仓库
    
[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=imyuanli&repo=readme)](https://github.com/anuraghazra/github-readme-stats)

 **[更多参数](https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_cn.md#github-更多置顶)**
`,
    'github-languages.name': 'Github - 热门语言卡片',
    'github-languages.markdown': `
## 将imyuanli替换为自己的github名称

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=imyuanli)](https://github.com/anuraghazra/github-readme-stats)

 **[更多参数](https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_cn.md#github-热门语言卡片)**
`,
    'github-streak.name': 'Github - 条纹状数据统计',
    'github-streak.markdown': `
## 将imyuanli替换为自己的github名称

[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=imyuanli)](https://git.io/streak-stats)

 **[更多参数](https://github-readme-streak-stats.herokuapp.com/demo)**
`,
    'github-visitors.name': 'Github - 统计观看次数',
    'github-visitors.markdown': `
## 将imyuanli替换为自己的github名称

![GitHub Profile Views Counter](https://komarev.com/ghpvc/?username=imyuanli)

 **[更多参数](https://github.com/antonkomarev/github-profile-views-counter)**
`,
    'github-trophy.name': 'Github - 奖杯统计',
    'github-trophy.markdown': `
## 将imyuanli替换为自己的github名称

[![trophy](https://github-profile-trophy.vercel.app/?username=imyuanli&theme=onedark)](https://github.com/ryo-ma/github-profile-trophy)

 **[更多参数](https://github.com/ryo-ma/github-profile-trophy)**
`,
};