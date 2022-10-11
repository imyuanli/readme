import React from "react";
import BaseTitle from "@/components/base/base-title";
import PrefixInput from "@/components/base/prefix-input";
import DataInput from "@/components/base/data-input";
import LinkInput from "@/components/base/link-input";

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

    const current = ['currentWork','currentLearn','collaborateOn']
    return (
        <div className='mb-8'>
            <BaseTitle value={'Work'}/>
            {
                current.map((item,index)=>{
                    return(
                        <div className='flex mb-3'>
                            <PrefixInput
                                handlePrefixChange={handlePrefixChange}
                                value={prefix[item]}
                                type={item}
                            />
                            <DataInput
                                handleDataChange={handleDataChange}
                                value={data[item]}
                                type={item}
                            />
                            <LinkInput
                                handleLinkChange={handleLinkChange}
                                value={link[item]}
                                type={item}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Work