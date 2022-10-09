import React from "react";
import PrefixInput from "@/components/base/prefix-input";
import DataInput from "@/components/base/data-input";
import BaseTitle from "@/components/base/base-title";

interface props {
    prefix: any,
    handlePrefixChange: any
    data: any
    handleDataChange: any
}

const Title: React.FunctionComponent<props> = ({prefix, handlePrefixChange, data, handleDataChange}) => {
    return (
        <div className='mb-6'>
            <BaseTitle value={'Title'} />
            <div className='flex'>
                <PrefixInput
                    handlePrefixChange={handlePrefixChange}
                    value={prefix?.title}
                    type={'title'}
                />
                <DataInput
                    handleDataChange={handleDataChange}
                    value={data?.title}
                    type={'title'}
                />
            </div>
        </div>
    )
}
export default Title