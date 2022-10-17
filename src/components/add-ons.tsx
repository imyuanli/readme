import React from "react";
import BaseTitle from "@/components/base/base-title";
import intl from "react-intl-universal";
import GitHubAddOns from "@/components/add-ons/github-add-ons";

interface props {
    data: any
    handleDataChange: any
    handleCheckChange: any
}

const AddOns: React.FunctionComponent<props> = ({data, handleDataChange, handleCheckChange}) => {
    return (
        <div className='mb-8'>
            <BaseTitle value={intl.get('bsAddOns')}/>
            <div className='flex flex-wrap w-full'>
                <div className='w-5/11 m-3'>
                    <GitHubAddOns
                        data={data}
                        handleDataChange={handleDataChange}
                        handleCheckChange={handleCheckChange}
                    />
                </div>
                <div className='w-5/11 m-3'>
                    <GitHubAddOns
                        data={data}
                        handleDataChange={handleDataChange}
                        handleCheckChange={handleCheckChange}
                    />
                </div>
                <div className='w-5/11 m-3'>
                    <GitHubAddOns
                        data={data}
                        handleDataChange={handleDataChange}
                        handleCheckChange={handleCheckChange}
                    />
                </div>
            </div>
        </div>
    )
}
export default AddOns