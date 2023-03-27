import React from "react";
import {DEFAULT_SECTIONS} from "@/constants/default";
import {Button, Card, Divider} from "antd";
import {RedoOutlined} from "@ant-design/icons";
import {useSetState} from "ahooks";
// import {DEFAULT_DATA, DEFAULT_PREFIX, DEFAULT_LINK} from "@/constants/default";
// import SubTitle from "@/components/subtitle";
// import Detail from "@/components/detail";
// import {generateMarkdown} from "@/utils/util";
// import intl from "react-intl-universal";
// import AddOns from "@/components/add-ons";
// import MarkDown from "@/components/markdown";

export default function HomePage() {
    const [state, setState] = useSetState<any>({
        useCases: DEFAULT_SECTIONS,
        addedCase: []
    })
    const {useCases, addedCase} = state

    const handleChangeCase = (index: any) => {
        const res = [...useCases]
        const data = res.splice(index, 1)
        console.log(data)
        setState({
            useCases: [...res],
            addedCase: [...addedCase, data],
        })
    }
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
        <div className={'p-3 flex h-full'}>
            <div className={'grid grid-cols-1 gap-4 h-full p-3'}>
                <div className={'flex justify-between'}>
                    <span>section</span>
                    <Button
                        icon={<RedoOutlined/>}
                        type="primary"/>
                </div>
                <Card
                    title={'用例'}
                    className={'overflow-auto h-full'}
                >
                    {useCases.map((item: any, index: any) => {
                        return (
                            <div
                                className={'w-full my-3'}
                                key={index}
                                onClick={() => {
                                    handleChangeCase(index)
                                }}
                            >
                                <Button
                                    block={true}
                                    size={'large'}
                                >
                                    {item?.name}
                                </Button>
                            </div>
                        )
                    })}
                </Card>
                <Card
                    title={'已选择'}
                    className={'overflow-auto h-full'}
                >
                    {addedCase.map((item: any, index: any) => {
                        return (
                            <div
                                className={'w-full my-3'}
                                key={index}
                            >
                                <Button
                                    block={true}
                                    size={'large'}
                                    type={'primary'}
                                >
                                    {item?.name}
                                </Button>
                            </div>
                        )
                    })}
                </Card>
            </div>
            <div className={'w-3/4 flex h-full'}>
                <div className={'flex-1'}>
                    <div>12</div>
                </div>
                <div className={'flex-1'}>
                    <div>123</div>
                </div>
            </div>
        </div>
    );
}
