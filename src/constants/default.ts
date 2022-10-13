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