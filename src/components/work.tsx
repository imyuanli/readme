import React from "react";
import BaseTitle from "@/components/base/base-title";
import PrefixInput from "@/components/base/prefix-input";
import DataInput from "@/components/base/data-input";
import LinkInput from "@/components/base/link-input";
import intl from "react-intl-universal";

interface props {
    prefix: any,
    handleDataChange: any
    handlePrefixChange: any
    data: any
    handleLinkChange: any,
    link: any
}

const Work: React.FunctionComponent<props> = ({
                                                  prefix,
                                                  data,
                                                  link,
                                                  handleDataChange,
                                                  handlePrefixChange,
                                                  handleLinkChange
                                              }) => {
    const result = [
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
    return (
        <div className='mb-8'>
            <BaseTitle value={'Work'}/>
            {
                result.map((item, index) => {
                    return (
                        <div className='flex mb-3' key={index}>
                            <PrefixInput
                                handlePrefixChange={handlePrefixChange}
                                value={prefix[item?.name]}
                                type={item}
                            />
                            {
                                item?.placeholderData &&
                                <DataInput
                                    handleDataChange={handleDataChange}
                                    value={data[item?.name]}
                                    type={item}
                                    placeholder={item?.placeholderData}
                                />
                            }
                            {
                                item?.placeholderLink &&
                                <LinkInput
                                    handleLinkChange={handleLinkChange}
                                    value={link[item?.name]}
                                    type={item}
                                    placeholder={item?.placeholderLink}
                                />
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Work