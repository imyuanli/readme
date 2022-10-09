import {TextField} from "@mui/material";
import React from "react";

interface props {
    data: any
    handleDataChange: any
}

const SubTitle: React.FunctionComponent<props> = ({data, handleDataChange}) => {
    return (
        <div className='m-3'>
            <div className='text-2xl mb-3'>
                SubTitle
            </div>
            <div className='mr-6'>
                <TextField
                    onChange={(e) => handleDataChange('subtitle', e.target.value)}
                    value={data?.subtitle}
                    id="standard-basic" label=""
                    variant="standard"
                />
            </div>
        </div>
    )
}
export default SubTitle