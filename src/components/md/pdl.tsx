import React, {useEffect, useRef, useState} from "react";

interface props {
    data: any,
    prefix: any,
    link: any,
    isDL: boolean,
    type:string
}

const PDL: React.FunctionComponent<props> = ({isDL,type, prefix, data, link}) => {
    return (
        <>
            <li>
                {prefix[type]}
                {
                    isDL ?
                        <a href={link[type]}>data[type]</a>
                        :
                        <b>data[type]</b>
                }
            </li>
        </>
    )
}

export default PDL