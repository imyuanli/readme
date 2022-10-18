import intl from "react-intl-universal";

export const DEFAULT_PREFIX = {
    title: intl.get('title'),
    currentWork: intl.get('currentWork'),
    collaborateOn: intl.get('collaborateOn'),
    helpWith: intl.get('helpWith'),
    currentLearn: intl.get('currentLearn'),
    ama:intl.get('ama'),
    contact:intl.get('contact'),
    resume:intl.get('resume'),
    funFact:intl.get('funFact'),
    portfolio:intl.get('portfolio'),
    blog:intl.get('blog'),
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
    githubName:'',
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
    typeWriter:[
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