import React, {useEffect, useRef} from "react";
import PDL from "@/components/md/pdl";

interface props {
    setMdContent: any,
    data: any,
    prefix: any,
    link: any
}

const MarkDown: React.FunctionComponent<props> = ({setMdContent, prefix, data, link}) => {
    const html = useRef<HTMLHeadingElement | null>(null)
    useEffect(() => {
        let inner = html.current?.innerHTML
        let innerSplit = inner?.replaceAll("<br>", "\n")
        setMdContent(innerSplit)
    }, [html])

    return (
        <div ref={html}>
            {prefix?.title && data?.title && <>
                <h1 style={{textAlign: 'center'}}>{prefix.title}{data.title}</h1>
                <br/>
            </>}
            {data?.subtitle && <>
                <h3 style={{textAlign: 'center'}}>{data.subtitle}</h3>
                <br/>
            </>}
            {data?.visitorsBadge && <>
                <img
                    src={`https://komarev.com/ghpvc/?username=${data.githubName}`}
                    alt={data.githubName}/>
                <br/>
            </>}
            {data?.githubProfileTrophy && <>
                <img src={`https://github-profile-trophy.vercel.app/?username=${data.githubName}`}
                     alt={data.githubName}/>
                <br/>
            </>}
            {<PDL prefix={prefix} data={data} link={link}/>}
            {data?.topLanguages && <><img
                src={`https://github-readme-stats.vercel.app/api/top-langs?username=${data.githubName}`}
                alt={data.githubName}/><br/></>}
            {data?.githubStats && <><img
                src={`https://github-readme-stats.vercel.app/api?username=${data.githubName}`}
                alt={data.githubName}/><br/></>}
            {data?.streakStats && <><img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${data.githubName}`}
                alt={data.githubName}/><br/></>}
            {data?.activityGraph && <><img
                src={`https://activity-graph.herokuapp.com/graph?username=${data.githubName}`}
                alt={data.githubName}/><br/></>}
            {<img src="https://readme-typing-svg.herokuapp.com/?lines=第一句话;第二句话" />}
                        {/*<div align="center">*/}
            {/*    <img src="https://metrics.lecoq.io/sun0225SUN?template=classic&config.timezone=Asia%2FShanghai">*/}
            {/*</div>*/}
        </div>
    )
}
export default MarkDown