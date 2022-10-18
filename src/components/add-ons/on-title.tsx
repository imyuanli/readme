import {TextField} from "@mui/material";
import React from "react";

interface props {
    value: any
}

const OnTitle: React.FunctionComponent<props> = ({value}) => {
    return (
        <div className='text-base mb-3'>{value}</div>
    )
}
export default OnTitle