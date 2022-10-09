import {TextField} from "@mui/material";
import React from "react";

interface props {
    value: any
}

const BaseTitle: React.FunctionComponent<props> = ({value}) => {
    return (
        <div className='text-2xl mb-3'>{value}</div>
    )
}
export default BaseTitle