import intl from "react-intl-universal";

export const DEFAULT_PREFIX = {
    title: intl.get('title'),
    currentWork: intl.get('currentWork'),
    collaborateOn: intl.get('collaborateOn'),
    helpWith: intl.get('helpWith'),
    currentLearn: intl.get('currentLearn'),
    ama: intl.get('ama'),
    contact: intl.get('contact'),
    resume: intl.get('resume'),
    funFact: intl.get('funFact'),
    portfolio: intl.get('portfolio'),
    blog: intl.get('blog'),
};


export const DEFAULT_DATA = {
    title: '',
    subtitle: intl.get('subtitle'),
    currentWork: '',
    collaborateOn: '',
    helpWith: '',
    currentLearn: '',
    ama: '',
    contact: '',
    funFact: '',
    githubName: '',
    //单选框
    visitorsBadge: false,
    githubProfileTrophy: false,
    githubStats: false,
    // githubStatsOptions: {
    //     theme: '',
    //     titleColor: '',
    //     textColor: '',
    //     bgColor: '',
    //     hideBorder: false,
    //     cacheSeconds: null,
    //     locale: 'en',
    // },
    topLanguages: false,
    // topLanguagesOptions: {
    //     theme: '',
    //     titleColor: '',
    //     textColor: '',
    //     bgColor: '',
    //     hideBorder: false,
    //     cacheSeconds: null,
    //     locale: 'en',
    // },
    streakStats: false,
    // streakStatsOptions: {
    //     theme: '',
    // },
    // devDynamicBlogs: false,
    // mediumDynamicBlogs: false,
    // rssDynamicBlogs: false,
    typeWriter: [
        {value: ''}
    ]
};
//
export const DEFAULT_LINK = {
    currentWork: '',
    collaborateOn: '',
    helpWith: '',
    portfolio: '',
    blog: '',
    resume: '',
};


// export const DEFAULT_SOCIAL = {
//     github: '',
//     dev: '',
//     linkedin: '',
//     codepen: '',
//     stackoverflow: '',
//     kaggle: '',
//     codesandbox: '',
//     fb: '',
//     instagram: '',
//     twitter: '',
//     dribbble: '',
//     behance: '',
//     medium: '',
//     youtube: '',
//     codechef: '',
//     hackerrank: '',
//     codeforces: '',
//     leetcode: '',
//     topcoder: '',
//     hackerearth: '',
//     geeks_for_geeks: '',
//     discord: '',
//     rssurl: '',
// };


export const DEFAULT_LIST = [
    {
        name: 'currentWork',
        placeholderData: intl.get('projectName'),
        placeholderLink: intl.get('projectLink'),
    },
    {
        name: 'collaborateOn',
        placeholderData: intl.get('projectName'),
        placeholderLink: intl.get('projectLink'),
    },
    {
        name: 'helpWith',
        placeholderData: intl.get('projectName'),
        placeholderLink: intl.get('projectLink'),
    },
    {
        name: 'currentLearn',
        placeholderData: intl.get('phLearn'),
    },
    {
        name: 'ama',
        placeholderData: intl.get('phAma'),
    },
    {
        name: 'contact',
        placeholderData: 'example@gmail.com',
    },
    {
        name: 'portfolio',
        placeholderLink: intl.get('phPortfolio'),
    },
    {
        name: 'blog',
        placeholderLink: intl.get('phBlog'),
    },
    {
        name: 'resume',
        placeholderLink: intl.get('phResume'),
    },
    {
        name: 'funFact',
        placeholderData: intl.get('phFunFact'),
    },
]


export const DEFAULT_SECTIONS_LIST = [
    {
        type: 'installation',
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
        type: 'logo',
        name: 'Logo',
        markdown: `
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

`,
    },
    {
        type: 'run-locally',
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
        type: 'screenshots',
        name: 'Screenshots',
        markdown: `
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

`,
    },
    {
        type: 'env-variables',
        name: 'Environment Variables',
        markdown: `
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

\`API_KEY\`

\`ANOTHER_API_KEY\`

`,
    },
    {
        type: 'features',
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
        type: 'usage-examples',
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
        type: 'api',
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
        type: 'contributing',
        name: 'Contributing',
        markdown: `
## Contributing

Contributions are always welcome!

See \`contributing.md\` for ways to get started.

Please adhere to this project's \`code of conduct\`.

`,
    },
    {
        type: 'tests',
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
        type: 'license',
        name: 'License',
        markdown: `
## License

[MIT](https://choosealicense.com/licenses/mit/)

`,
    },
    {
        type: 'badges',
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
        type: 'roadmap',
        name: 'Roadmap',
        markdown: `
## Roadmap

- Additional browser support

- Add more integrations

`,
    },
    {
        type: 'authors',
        name: 'Authors',
        markdown: `
## Authors

- [@octokatherine](https://www.github.com/octokatherine)

`,
    },
    {
        type: 'acknowledgement',
        name: 'Acknowledgements',
        markdown: `
## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

`,
    },
    {
        type: 'support',
        name: 'Support',
        markdown: `
## Support

For support, email fake@fake.com or join our Slack channel.

`,
    },
    {
        type: 'feedback',
        name: 'Feedback',
        markdown: `
## Feedback

If you have any feedback, please reach out to us at fake@fake.com

`,
    },
    {
        type: 'related',
        name: 'Related',
        markdown: `
## Related

Here are some related projects

[Awesome README](https://github.com/matiassingers/awesome-readme)

`,
    },
    {
        type: 'demo',
        name: 'Demo',
        markdown: `
## Demo

Insert gif or link to demo

`,
    },
    {
        type: 'tech',
        name: 'Tech',
        markdown: `
## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

`,
    },
    {
        type: 'optimizations',
        name: 'Optimizations',
        markdown: `
## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

`,
    },
    {
        type: 'lessons',
        name: 'Lessons',
        markdown: `
## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

`,
    },
    {
        type: 'faq',
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
        type: 'used-by',
        name: 'Used By',
        markdown: `
## Used By

This project is used by the following companies:

- Company 1
- Company 2

`,
    },
    {
        type: 'documentation',
        name: 'Documentation',
        markdown: `
## Documentation

[Documentation](https://linktodocumentation)

`,
    },
    {
        type: 'deployment',
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
        type: 'appendix',
        name: 'Appendix',
        markdown: `
## Appendix

Any additional information goes here

`,
    },
    {
        type: 'github-profile-intro',
        name: 'Github Profile - Introduction',
        markdown: `
# Hi, I'm Katherine! 👋

`,
    },
    {
        type: 'github-profile-about-me',
        name: 'Github Profile - About Me',
        markdown: `
## 🚀 About Me
I'm a full stack developer...

`,
    },
    {
        type: 'github-profile-skills',
        name: 'Github Profile - Skills',
        markdown: `
## 🛠 Skills
Javascript, HTML, CSS...

`,
    },
    {
        type: 'github-profile-links',
        name: 'Github Profile - Links',
        markdown: `
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

`,
    },
    {
        type: 'github-profile-other',
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
        type: 'colorreference',
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

