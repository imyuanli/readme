import {TextField} from "@mui/material";
import React from "react";

interface props {
    value: any,
    type: any,
    handleLinkChange: any
    placeholder:string
}

const LinkInput: React.FunctionComponent<props> = ({value, type, handleLinkChange,placeholder}) => {
    return (
        <div className='w-1/3'>
            <TextField
                value={value}
                onChange={(e) => handleLinkChange(type, e.target.value)}
                className='w-full'
                id="standard-basic"
                label=""
                variant="standard"
                placeholder={placeholder}
            />
        </div>
    )
}
export default LinkInput