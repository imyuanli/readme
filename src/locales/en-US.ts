// export default {
//     title: "Hi 👋, I'm",
//     subtitle: 'A frontend developer from China',
//     currentWork: '🤑 I’m currently working on',
//     collaborateOn: '👯 I’m looking to collaborate on',
//     helpWith: '🤝 I’m looking for help with',
//     currentLearn: '📚 I’m currently learning',
//     ama: '💬 Ask me about',
//     contact: '📫 How to reach me',
//     resume: '📄 Know about my experiences',
//     funFact: '⚡ Fun fact',
//     portfolio: '👨‍💻 All of my projects are available at',
//     blog: '📝 I regularly write articles on',
//
//     btnGen: "Generate README",
//     btnBack: 'back to edit',
//
//     projectName: 'project name',
//     projectLink: 'project link',
//     phLearn: 'Frameworks, courses etc.',
//     phAma: 'react, vue and JavaScript etc',
//     phPortfolio: 'portfolio link',
//     phBlog: 'blog link',
//     phResume: 'resume link',
//     phFunFact: 'I think I am....',
//
//
//     githubName: 'please add github username',
//     visitorsBadge: 'display visitors count badge',
//     githubProfileTrophy: 'display github trophy',
//     githubStats: 'display github profile stats card',
//     topLanguages: 'display top skills',
//     streakStats: 'display github streak stats',
//
//
//
//     bsTitle:'Title',
//     bsSubtitle:'Subtitle',
//     bsDetail:'Detail',
//     bsAddOns:'Add-Ons',
// };

export default [
    {
        id: 'title-and-description',
        name: 'Title and Description',
        markdown: `
# Project Title

A brief description of what this project does and who it's for

`,
    },
    {
        id: 'installation',
        name: 'Installation',
        markdown: `
## Installation

Install my-project with npm

\`\`\`bash
  npm install my-project
  cd my-project
\`\`\`
    `,
    },
    {
        id: 'logo',
        name: 'Logo',
        markdown: `
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

`,
    },
    {
        id: 'run-locally',
        name: 'Run Locally',
        markdown: `
## Run Locally

Clone the project

\`\`\`bash
  git clone https://link-to-project
\`\`\`

Go to the project directory

\`\`\`bash
  cd my-project
\`\`\`

Install dependencies

\`\`\`bash
  npm install
\`\`\`

Start the server

\`\`\`bash
  npm run start
\`\`\`

`,
    },
    {
        id: 'screenshots',
        name: 'Screenshots',
        markdown: `
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

`,
    },
    {
        id: 'env-variables',
        name: 'Environment Variables',
        markdown: `
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

\`API_KEY\`

\`ANOTHER_API_KEY\`

`,
    },
    {
        id: 'features',
        name: 'Features',
        markdown: `
## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

`,
    },
    {
        id: 'usage-examples',
        name: 'Usage/Examples',
        markdown: `
## Usage/Examples

\`\`\`javascript
import Component from 'my-project'

function App() {
  return <Component />
}
\`\`\`

`,
    },
    {
        id: 'api',
        name: 'API Reference',
        markdown: `
## API Reference

#### Get all items

\`\`\`http
  GET /api/items
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |

#### Get item

\`\`\`http
  GET /api/items/$\{id}
\`\`\`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| \`id\`      | \`string\` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

`,
    },
    {
        id: 'contributing',
        name: 'Contributing',
        markdown: `
## Contributing

Contributions are always welcome!

See \`contributing.md\` for ways to get started.

Please adhere to this project's \`code of conduct\`.

`,
    },
    {
        id: 'tests',
        name: 'Running Tests',
        markdown: `
## Running Tests

To run tests, run the following command

\`\`\`bash
  npm run test
\`\`\`

`,
    },
    {
        id: 'license',
        name: 'License',
        markdown: `
## License

[MIT](https://choosealicense.com/licenses/mit/)

`,
    },
    {
        id: 'badges',
        name: 'Badges',
        markdown: `
## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

`,
    },
    {
        id: 'roadmap',
        name: 'Roadmap',
        markdown: `
## Roadmap

- Additional browser support

- Add more integrations

`,
    },
    {
        id: 'authors',
        name: 'Authors',
        markdown: `
## Authors

- [@octokatherine](https://www.github.com/octokatherine)

`,
    },
    {
        id: 'acknowledgement',
        name: 'Acknowledgements',
        markdown: `
## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

`,
    },
    {
        id: 'support',
        name: 'Support',
        markdown: `
## Support

For support, email fake@fake.com or join our Slack channel.

`,
    },
    {
        id: 'feedback',
        name: 'Feedback',
        markdown: `
## Feedback

If you have any feedback, please reach out to us at fake@fake.com

`,
    },
    {
        id: 'related',
        name: 'Related',
        markdown: `
## Related

Here are some related projects

[Awesome README](https://github.com/matiassingers/awesome-readme)

`,
    },
    {
        id: 'demo',
        name: 'Demo',
        markdown: `
## Demo

Insert gif or link to demo

`,
    },
    {
        id: 'tech',
        name: 'Tech',
        markdown: `
## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

`,
    },
    {
        id: 'optimizations',
        name: 'Optimizations',
        markdown: `
## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

`,
    },
    {
        id: 'lessons',
        name: 'Lessons',
        markdown: `
## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

`,
    },
    {
        id: 'faq',
        name: 'FAQ',
        markdown: `
## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2

`,
    },
    {
        id: 'used-by',
        name: 'Used By',
        markdown: `
## Used By

This project is used by the following companies:

- Company 1
- Company 2

`,
    },
    {
        id: 'documentation',
        name: 'Documentation',
        markdown: `
## Documentation

[Documentation](https://linktodocumentation)

`,
    },
    {
        id: 'deployment',
        name: 'Deployment',
        markdown: `
## Deployment

To deploy this project run

\`\`\`bash
  npm run deploy
\`\`\`

`,
    },
    {
        id: 'appendix',
        name: 'Appendix',
        markdown: `
## Appendix

Any additional information goes here

`,
    },
    {
        id: 'github-profile-intro',
        name: 'Github Profile - Introduction',
        markdown: `
# Hi, I'm Katherine! 👋

`,
    },
    {
        id: 'github-profile-about-me',
        name: 'Github Profile - About Me',
        markdown: `
## 🚀 About Me
I'm a full stack developer...

`,
    },
    {
        id: 'github-profile-skills',
        name: 'Github Profile - Skills',
        markdown: `
## 🛠 Skills
Javascript, HTML, CSS...

`,
    },
    {
        id: 'github-profile-links',
        name: 'Github Profile - Links',
        markdown: `
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

`,
    },
    {
        id: 'github-profile-other',
        name: 'Github Profile - Other',
        markdown: `
## Other Common Github Profile Sections
👩‍💻 I'm currently working on...

🧠 I'm currently learning...

👯‍♀️ I'm looking to collaborate on...

🤔 I'm looking for help with...

💬 Ask me about...

📫 How to reach me...

😄 Pronouns...

⚡️ Fun fact...

`,
    },
    {
        id: 'colorreference',
        name: 'Color Reference',
        markdown: `## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |

`,
    },
]