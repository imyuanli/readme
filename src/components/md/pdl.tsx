import React, {useEffect, useRef, useState} from "react";
import {DEFAULT_LIST} from "@/constants/default";

interface props {
    data: any,
    prefix: any,
    link: any
}

const PDL: React.FunctionComponent<props> = ({prefix, data, link}) => {
    return (
        <>
            {
                DEFAULT_LIST.map((item, index) => {
                    let type = item?.name
                    let p = prefix[type]
                    let l = link[type]
                    let d = data[type]
                    let isD = item?.placeholderData
                    let isL = item?.placeholderLink
                    return (
                        <>
                            {
                                d && l && isD && isL &&
                                <>
                                    <li key={index}>
                                        <span style={{marginRight:'3px'}}>{p}</span>
                                        <a href={l}>{d}</a>
                                    </li>
                                    <br/>
                                </>
                            }
                            {
                                l && isL && !isD &&
                               <>
                                   <li key={index}>
                                       <span style={{marginRight:'3px'}}>{p}</span>
                                       <a href={l}>{l}</a>
                                   </li>
                                   <br/>
                               </>
                            }
                            {
                                d && isD && !isL &&
                                <>
                                    <li key={index}>
                                        <span style={{marginRight:'3px'}}>{p}</span>
                                        <b>{d}</b>
                                    </li>
                                    <br/>
                                </>
                            }
                        </>
                    )
                })
            }
        </>
    )
}

export default PDL