import React, {useEffect, useRef, useState} from "react";
import {DEFAULT_LIST} from "@/constants/default";
import PDL from "@/components/md/pdl";

interface props {
    setMdContent: any,
    data: any,
    prefix: any,
    link: any,
    isD: boolean,
    isL: boolean,
}

const MarkDown: React.FunctionComponent<props> = ({setMdContent, prefix, data, link}) => {
    const html = useRef<HTMLHeadingElement | null>(null)
    useEffect(() => {
        setMdContent(`${html.current?.outerHTML}`)
    }, [html])

    return (
        <div ref={html}>
            {
                prefix?.title && data?.title
                &&
                <h1 style={{textAlign: 'center'}}>{prefix.title}{data.title}</h1>
            }
            {
                data?.subtitle
                &&
                <h3 style={{textAlign: 'center'}}>{data.subtitle}</h3>
            }
            {
                <>
                    <PDL type={'currentWork'} isDL={true} prefix={prefix} data={data} link={link}/>
                    <PDL type={'collaborateOn'} isDL={true} prefix={prefix} data={data} link={link}/>
                    <PDL type={'helpWith'} isDL={true} prefix={prefix} data={data} link={link}/>
                    <PDL type={'currentLearn'} isDL={false} prefix={prefix} data={data} link={link}/>
                    <PDL type={'ama'} isDL={false} prefix={prefix} data={data} link={link}/>
                    <PDL type={'contact'} isDL={false} prefix={prefix} data={data} link={link}/>
                    <PDL type={'contact'} isDL={false} prefix={prefix} data={data} link={link}/>
                </>
            }
            {

// ${ `- ${prefix.currentWork} **[${data.currentWork}](${link.currentWork})**`}
// ${prefix.collaborateOn && data.collaborateOn && link.collaborateOn && `- ${prefix.collaborateOn} **[${data.collaborateOn}](${link.collaborateOn})**`}
// ${prefix.helpWith && data.helpWith && link.helpWith && `- ${prefix.helpWith} **[${data.helpWith}](${link.helpWith})**`}
// ${prefix.currentLearn && data.currentLearn && `- ${prefix.currentLearn} **${data.currentLearn}**`}
// ${prefix.ama && data.ama && `- ${prefix.ama} **${data.ama}**`}
// ${prefix.contact && data.contact && `- ${prefix.contact} **${data.contact}**`}
// ${prefix.portfolio && link.portfolio && `- ${prefix.portfolio} **[${link.portfolio}](${link.portfolio})**`}
// ${prefix.blog && link.blog && `- ${prefix.blog} **[${link.blog}](${link.blog})**`}
// ${prefix.resume && link.resume && `- ${prefix.resume} **[${link.resume}](${link.resume})**`}
// ${prefix.funFact && data.funFact && `- ${prefix.funFact} **${data.funFact}**`}
            }
        </div>
    )
}
export default MarkDown