import {TextField} from "@mui/material";
import React from "react";

interface props {
    prefix: any,
    handleDataChange: any
    handlePrefixChange: any
    data: any
}

const Title: React.FunctionComponent<props> = ({prefix, data, handleDataChange, handlePrefixChange}) => {
    return (
        <div>
            <div className='text-2xl mb-3'>
                Title
            </div>
            <div className='flex'>
                <div className='mr-6'>
                    <TextField
                        onChange={(e) => handlePrefixChange('title', e.target.value)}
                        value={prefix?.title}
                        id="standard-basic" label=""
                        variant="standard"
                    />
                </div>
                <TextField
                    value={data?.title}
                    onChange={(e) => handleDataChange('title', e.target.value)}
                    className='w-1/2'
                    id="standard-basic"
                    label=""
                    variant="standard"
                />
            </div>
        </div>
    )
}
export default Title