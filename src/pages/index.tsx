import React, {useEffect, useState} from "react";
import {DEFAULT_SECTIONS} from "@/constants/default";
import {Button, Dropdown, MenuProps} from "antd";
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

    // 清除添加的数据
    const items = [
        {
            key: '1',
            label: '重置',
        },
        {
            key: '2',
            label: '删除',
        },
    ];
    const onMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };
    return (
        <div className={'grid grid-cols-5 gap-1 h-full'}>
            <div className={'col-span-1 grid grid-cols-1 gap-2 h-full overflow-auto p-3 w-full'}>
                <div className={'flex justify-between'}>
                    <span>section</span>
                    <Button icon={<RedoOutlined/>} type="primary"/>
                </div>
                <div>已选择</div>
                {addedCase.map((item: any, index: any) => {
                    return (
                        <Dropdown.Button
                            key={index}
                            onClick={() => {
                                setState({
                                    currentType: item.type
                                })
                            }}
                            style={{width:'100%'}}
                            type={item.type == currentType ? 'primary' : "default"}
                            menu={{items, onClick: onMenuClick}}
                        >
                            {item?.name}
                        </Dropdown.Button>
                    )
                })}
                <div className={'mt-3'}>当前用例</div>
                {useCases.map((item: any, index: any) => {
                    return (
                        <Button
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
            </div>
            <div className={'col-span-2 h-full'}>
                <MdEditor
                    modelValue={editorData}
                    preview={false}
                    onChange={setEditorData}
                    showCodeRowNumber={true}
                    footers={['markdownTotal']}
                    style={{height: '100%'}}
                    noUploadImg={true}
                    toolbars={[
                        'bold',
                        'underline',
                        'italic',
                        'strikeThrough',
                        'title',
                        'sub',
                        'sup',
                        'quote',
                        'unorderedList',
                        'orderedList',
                        'task',
                        'codeRow',
                        'code',
                        'link',
                        'image',
                        'table',
                        'mermaid',
                        'pageFullscreen',
                        'htmlPreview',
                    ]}
                />
            </div>
            <div className={'col-span-2 overflow-auto h-full'}>
                <MdEditor
                    previewOnly={true}
                    modelValue={previewData}
                    previewTheme={'vuepress'}
                    style={{height: '100%', padding: 10}}
                />
            </div>
        </div>
    );
}
