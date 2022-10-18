import React from "react";
import BaseTitle from "@/components/base/base-title";
import intl from "react-intl-universal";
import GitHubAddOns from "@/components/add-ons/github-add-ons";
import TypeWriter from "@/components/add-ons/type-writer";
import OtherAddOns from "@/components/add-ons/other-add-ons";

interface props {
    data: any
    handleDataChange: any
    handleCheckChange: any
}

const AddOns: React.FunctionComponent<props> = ({data, handleDataChange, handleCheckChange}) => {
    return (
        <div className='mb-8'>
            <BaseTitle value={intl.get('bsAddOns')}/>
            <GitHubAddOns
                data={data}
                handleDataChange={handleDataChange}
                handleCheckChange={handleCheckChange}
            />
            <OtherAddOns
                data={data}
                handleDataChange={handleDataChange}
                handleCheckChange={handleCheckChange}/>
            {/*<TypeWriter />*/}
        </div>
    )
}
export default AddOns