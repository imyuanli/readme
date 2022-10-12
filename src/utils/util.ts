export function generateMarkdown(prefix: any, data: any, link: any) {
    return ` 
${prefix.title && data.title && `<h1 align="center">${prefix.title}${data.title}</h1>`}
${data.subtitle && `<h3 align="center">${data.subtitle}</h3>`}
<!--<p align="left"> <img src="https://komarev.com/ghpvc/?username=imyuanli&label=Profile%20views&color=0e75b6&style=flat" alt="imyuanli" /> </p>-->
<!--<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=imyuanli" alt="imyuanli" /></a> </p>-->

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
`
}