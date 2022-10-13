export function generateMarkdown(prefix: any, data: any, link: any) {
    return ` 
${prefix.title && data.title && `<h1 align="center">${prefix.title}${data.title}</h1>`}
${data.subtitle && `<h3 align="center">${data.subtitle}</h3>`}
${data.visitorsBadge && `<p align="left"> <img src="https://komarev.com/ghpvc/?username=${data.githubName}&label=Profile%20views&color=0e75b6&style=flat" alt="${data.githubName}" /> </p>`}
${data.githubProfileTrophy && `<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=${data.githubName}" alt="${data.githubName}" /></a> </p>`}

${prefix.currentWork && data.currentWork && link.currentWork && `- ${prefix.currentWork} **[${data.currentWork}](${link.currentWork})**`}
${prefix.collaborateOn && data.collaborateOn && link.collaborateOn && `- ${prefix.collaborateOn} **[${data.collaborateOn}](${link.collaborateOn})**`}
${prefix.helpWith && data.helpWith && link.helpWith && `- ${prefix.helpWith} **[${data.helpWith}](${link.helpWith})**`}
${prefix.currentLearn && data.currentLearn && `- ${prefix.currentLearn} **${data.currentLearn}**`}
${prefix.ama && data.ama && `- ${prefix.ama} **${data.ama}**`}
${prefix.contact && data.contact && `- ${prefix.contact} **${data.contact}**`}
${prefix.portfolio && link.portfolio && `- ${prefix.portfolio} **[${link.portfolio}](${link.portfolio})**`}
${prefix.blog && link.blog && `- ${prefix.blog} **[${link.blog}](${link.blog})**`}
${prefix.resume && link.resume && `- ${prefix.resume} **[${link.resume}](${link.resume})**`}
${prefix.funFact && data.funFact && `- ${prefix.funFact} **${data.funFact}**`}

${data.topLanguages && `<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=${data.githubName}&show_icons=true&locale=en&layout=compact" alt="${data.githubName}" /></p>`}

${data.githubStats && `<p><img align="center" src="https://github-readme-stats.vercel.app/api?username=${data.githubName}&show_icons=true&locale=en" alt="${data.githubName}" /></p>`}

${data.streakStats && `<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=${data.githubName}&" alt="${data.githubName}" /></p>`}

`
}