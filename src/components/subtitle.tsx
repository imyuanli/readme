import {TextField} from "@mui/material";
import React from "react";
import DataInput from "@/components/base/data-input";
import BaseTitle from "@/components/base/base-title";

interface props {
    data: any
    handleDataChange: any
}

const SubTitle: React.FunctionComponent<props> = ({data, handleDataChange}) => {
    return (
        <div className='mb-6'>
            <BaseTitle value={'SubTitle'} />
            <DataInput
                handleDataChange={handleDataChange}
                value={data?.subtitle}
                type={'subtitle'}
            />
        </div>
    )
}
export default SubTitle