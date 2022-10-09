import React from "react";
import BaseTitle from "@/components/base/base-title";
import PrefixInput from "@/components/base/prefix-input";
import DataInput from "@/components/base/data-input";

interface props {
    prefix: any,
    handleDataChange: any
    handlePrefixChange: any
    data: any
}

const Work: React.FunctionComponent<props> = ({prefix, data, handleDataChange, handlePrefixChange}) => {
    return (
        <div className='mb-6'>
            <BaseTitle value={'Work'} />
            <div className='flex mb-3'>
                <PrefixInput
                    handlePrefixChange={handlePrefixChange}
                    value={prefix?.currentWork}
                    type={'currentWork'}
                />
                <DataInput
                    handleDataChange={handleDataChange}
                    value={data?.currentWork}
                    type={'currentWork'}
                />
            </div>
            <div className='flex mb-3'>
                <PrefixInput
                    handlePrefixChange={handlePrefixChange}
                    value={prefix?.currentLearn}
                    type={'currentLearn'}
                />
                <DataInput
                    handleDataChange={handleDataChange}
                    value={data?.currentLearn}
                    type={'currentLearn'}
                />
            </div>
            <div className='flex mb-3'>
                <PrefixInput
                    handlePrefixChange={handlePrefixChange}
                    value={prefix?.collaborateOn}
                    type={'collaborateOn'}
                />
                <DataInput
                    handleDataChange={handleDataChange}
                    value={data?.collaborateOn}
                    type={'collaborateOn'}
                />
            </div>
        </div>
    )
}
export default Work