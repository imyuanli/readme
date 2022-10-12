import React from "react";
import PrefixInput from "@/components/base/prefix-input";
import DataInput from "@/components/base/data-input";
import BaseTitle from "@/components/base/base-title";

interface props {
    prefix: any,
    data: any
    link:any
}

export const Md: React.FunctionComponent<props> = ({prefix,data,link}) => {
    return (
        <div>
            {
                prefix.title && data.title
                &&
                <h1 align="center">{prefix.title}{data.title}</h1>
            }
            {
                data.subtitle
                &&
                <h3 align="center">{data.subtitle}</h3>
            }
            {
                <p align="left"> <img src="https://komarev.com/ghpvc/?username=imyuanli&label=Profile%20views&color=0e75b6&style=flat" alt="imyuanli" /> </p>
            }
            {
                <p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=imyuanli" alt="imyuanli" /></a> </p>
            }
        </div>
    )
}



// export const MdTitle: React.FunctionComponent<props> = ({prefix,data,link}) => {
//     return (
//         <>
//             {prefix.title && data.title && <h1 align="center">{prefix.title}{data.title}</h1>}
//             {/*{*/}
//             {/*    data.subtitle*/}
//             {/*    &&*/}
//             {/*    <h3 align="center">{data.subtitle}</h3>*/}
//             {/*}*/}
//             {/*{*/}
//             {/*    <p align="left"> <img src="https://komarev.com/ghpvc/?username=imyuanli&label=Profile%20views&color=0e75b6&style=flat" alt="imyuanli" /> </p>*/}
//             {/*}*/}
//             {/*{*/}
//             {/*    <p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=imyuanli" alt="imyuanli" /></a> </p>*/}
//             {/*}*/}
//         </>
//     )
// }