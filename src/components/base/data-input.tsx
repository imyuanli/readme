import {TextField} from "@mui/material";
import React from "react";

interface props {
    value: any,
    type: any,
    handleDataChange: any
}

const DataInput: React.FunctionComponent<props> = ({value, type, handleDataChange}) => {
    return (
        <TextField
            value={value}
            onChange={(e) => handleDataChange(type, e.target.value)}
            className='w-1/2'
            id="standard-basic"
            label=""
            variant="standard"
        />
    )
}
export default DataInput