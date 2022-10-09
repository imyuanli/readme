import {TextField} from "@mui/material";
import React from "react";

interface props {
    value: any,
    type: any,
    handlePrefixChange: any
}

const PrefixInput: React.FunctionComponent<props> = ({value, type, handlePrefixChange}) => {
    return (
        <div className='mr-6 w-1/4'>
            <TextField
                onChange={(e) => handlePrefixChange(type, e.target.value)}
                value={value}
                className='w-full'
                id="standard-basic"
                label=""
                variant="standard"
            />
        </div>
    )
}
export default PrefixInput