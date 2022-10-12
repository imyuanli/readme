import {TextField} from "@mui/material";
import React from "react";

interface props {
    value: any,
    type: any,
    handleDataChange: any
    placeholder?:string
}

const DataInput: React.FunctionComponent<props> = ({value, type, handleDataChange,placeholder}) => {
    return (
        <div className='w-1/3 mr-6'>
            <TextField
                value={value}
                onChange={(e) => handleDataChange(type, e.target.value)}
                className='w-full'
                id="standard-basic"
                label=""
                variant="standard"
                placeholder={placeholder}
            />
        </div>
    )
}
export default DataInput