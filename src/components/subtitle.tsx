import {TextField} from "@mui/material";
import React from "react";
import DataInput from "@/components/base/data-input";
import BaseTitle from "@/components/base/base-title";
import intl from "react-intl-universal";

interface props {
    data: any
    handleDataChange: any
}

const SubTitle: React.FunctionComponent<props> = ({data, handleDataChange}) => {
    return (
        <div className='mb-8'>
            <BaseTitle value={intl.get('bsSubTitle')} />
            <DataInput
                handleDataChange={handleDataChange}
                value={data?.subtitle}
                type={'subtitle'}
            />
        </div>
    )
}
export default SubTitle