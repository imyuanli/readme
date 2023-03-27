import React, {useState} from "react";
import Item from "antd/es/list/Item";
import {DEFAULT_SECTIONS} from "@/constants/default";
import {Button} from "antd";
// import {DEFAULT_DATA, DEFAULT_PREFIX, DEFAULT_LINK} from "@/constants/default";
// import SubTitle from "@/components/subtitle";
// import Detail from "@/components/detail";
// import {generateMarkdown} from "@/utils/util";
// import intl from "react-intl-universal";
// import AddOns from "@/components/add-ons";
// import MarkDown from "@/components/markdown";

export default function HomePage() {
    // const [prefix, setPrefix] = useState(DEFAULT_PREFIX)
    // const [data, setData] = useState(DEFAULT_DATA)
    // const [link, setLink] = useState(DEFAULT_LINK)
    // const [showMd, setShowMd] = useState(false)
    // const [mdContent, setMdContent] = useState()
    // const handlePrefixChange = (key: any, value: any) => {
    //     const res = {...prefix}
    //     // @ts-ignore
    //     res[key] = value
    //     setPrefix(res)
    // }
    // const handleDataChange = (key: any, value: any) => {
    //     const res = {...data}
    //     // @ts-ignore
    //     res[key] = value
    //     setData(res)
    // }
    //
    // const [open, setOpen] = useState(false)
    // const handleCheckChange = (key: any, value: any) => {
    //     if (!data?.githubName) {
    //         setOpen(true)
    //     }
    //     const res = {...data}
    //     // @ts-ignore
    //     res[key] = value
    //     setData(res)
    // }
    // const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
    //     setOpen(false);
    // };
    // const handleLinkChange = (key: any, value: any) => {
    //     const res = {...link}
    //     // @ts-ignore
    //     res[key] = value
    //     setLink(res)
    // }
    //
    // const handleGenerate = () => {
    //     setShowMd(true)
    //     // @ts-ignore
    //     // setMdContent(generateMarkdown(prefix, data, link))
    // }

    return (
        <div className={'p-6 flex h-full'}>
            <div className={'w-1/5'}>
                <div>section</div>
                <div>
                    {
                        DEFAULT_SECTIONS.map((item,index)=>{
                            return(
                                <div key={index}>
                                    <Button>{1}</Button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={'w-4/5'}>
                123
            </div>
        </div>
    );
}
