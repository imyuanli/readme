export function isValidKey(key: string | number | symbol, object: object): key is keyof typeof object {
    return key in object;
}

export function generateMarkdown(prefix: any, data: any) {
    return` 
<h1 align="center">${prefix.title}，${data.title}</h1>
<h3 align="center">${data.subtitle}</h3>
<p align="left"> <img src="https://komarev.com/ghpvc/?username=imyuanli&label=Profile%20views&color=0e75b6&style=flat" alt="imyuanli" /> </p>
<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=imyuanli" alt="imyuanli" /></a> </p>


- ${prefix.currentWork} **${data.currentWork}**
- ${prefix.currentLearn} **${data.currentWork}**
- ${prefix.collaborateOn} **${data.currentWork}**
<!-- - 🌱 I’m currently learning **https://github.com/rahuldkjain/github-profile-readme-generator**-->
<!-- - 👯 I’m looking to collaborate on **[请问](请问)**-->
<!-- - 🤝 I’m looking for help with [请问请问](请问)-->
<!-- - 👨‍💻 All of my projects are available at [请问](请问)-->
<!-- - 📝 I regularly write articles on [请问](请问)-->
<!-- - 💬 Ask me about **请问**-->
<!-- - 📫 How to reach me **请问**-->
<!-- - 📄 Know about my experiences [请问](请问)-->
<!-- - ⚡ Fun fact **请问**-->
`
}