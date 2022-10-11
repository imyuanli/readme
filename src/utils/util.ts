export function generateMarkdown(prefix: any, data: any,link:any) {
    return` 
<h1 align="center">${prefix.title}，${data.title}</h1>
<h3 align="center">${data.subtitle}</h3>
<p align="left"> <img src="https://komarev.com/ghpvc/?username=imyuanli&label=Profile%20views&color=0e75b6&style=flat" alt="imyuanli" /> </p>
<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=imyuanli" alt="imyuanli" /></a> </p>


- ${prefix.currentWork} **[${data.currentWork}](${link.currentWork})**
- ${prefix.currentLearn} **[${data.currentLearn}](${link.currentLearn})**
- ${prefix.collaborateOn} **[${data.collaborateOn}](${link.collaborateOn})**

`
}