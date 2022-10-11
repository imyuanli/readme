import {TextField} from "@mui/material";
import React from "react";

interface props {
    value: any,
    type: any,
    handleLinkChange: any
}

const LinkInput: React.FunctionComponent<props> = ({value, type, handleLinkChange}) => {
    return (
        <div className='ml-6 w-1/3'>
            <TextField
                value={value}
                onChange={(e) => handleLinkChange(type, e.target.value)}
                className='w-full'
                id="standard-basic"
                label=""
                variant="standard"
                placeholder='Link'
            />
        </div>
    )
}
export default LinkInput