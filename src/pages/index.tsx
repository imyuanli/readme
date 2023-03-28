import React, {useEffect, useRef, useState} from "react";
import {DEFAULT_SECTIONS} from "@/constants/default";
import {Button, Card, Input} from "antd";
import {RedoOutlined} from "@ant-design/icons";
import {useSetState} from "ahooks";
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default function HomePage() {
    //全部的值
    const [state, setState] = useSetState<any>({
        useCases: DEFAULT_SECTIONS,
        addedCase: [
            {
                type: 'title-and-description',
                name: 'Title and Description',
                markdown: `
# Project Title

A brief description of what this project does and who it's for
`,
            }
        ],
        currentType: 'title-and-description',
        editorData: '',
        previewData: ''
    })
    const {useCases, addedCase, currentType, previewData} = state

    //增加新的case
    const handleChangeCase = (index: any) => {
        const res = [...useCases]
        const [data]: any = res.splice(index, 1)
        setState({
            useCases: [...res],
            addedCase: [...addedCase, data],
            currentType: data.type
        })
    }

    //获取当前md
    const getCurrentMD = () => addedCase.find((item: any) => item.type == currentType).markdown

    //编辑器
    const [editorData, setEditorData] = useState<any>("")
    useEffect(() => {
        setEditorData(getCurrentMD())
    }, [currentType])

    //更改addedCase对应的值
    useEffect(() => {
        const res = [...addedCase]
        const filterData = res.find((item: any) => item.type == currentType)
        filterData.markdown = editorData
        setState({
            addedCase: [...res]
        })
    }, [editorData])

    //预览更新的值
    useEffect(() => {
        const res = addedCase.reduce((pre: any, cur: any) => pre + cur.markdown + '\n', "")
        setState({
            previewData: res
        })
    }, [addedCase])

    return (
        <div className={'p-6 grid grid-cols-7 gap-4 h-full'}>
            <Card className={'col-span-1 grid grid-cols-1 gap-4 h-full p-3 overflow-auto'}>
                <div className={'flex justify-between'}>
                    <span>section</span>
                    <Button icon={<RedoOutlined/>} type="primary"/>
                </div>
                <div>已选择</div>
                {addedCase.map((item: any, index: any) => {
                    return (
                        <Button
                            key={index}
                            block={true}
                            size={'large'}
                            type={item.type == currentType ? 'primary' : "default"}
                            onClick={() => {
                                setState({
                                    currentType: item.type
                                })
                            }}
                        >
                            {item?.name}
                        </Button>
                    )
                })}
                <div className={'mt-3'}>当前用例</div>
                {useCases.map((item: any, index: any) => {
                    return (
                        <Button
                            block={true}
                            size={'large'}
                            type="dashed"
                            key={index}
                            onClick={() => {
                                handleChangeCase(index)
                            }}
                        >
                            {item?.name}
                        </Button>
                    )
                })}
            </Card>
            <div className={'col-span-3 h-full'}>
                <MdEditor
                    modelValue={editorData}
                    preview={false}
                    onChange={setEditorData}
                    previewTheme={'vuepress'}
                    noPrettier={true}
                    showCodeRowNumber={true}
                    footers={['markdownTotal']}
                    style={{height: '100%'}}
                />
            </div>
            <Card className={'col-span-3 overflow-auto'}>
                <MdEditor
                    previewOnly={true}
                    modelValue={previewData}
                    previewTheme={'vuepress'}
                />
            </Card>
        </div>
    );
}
