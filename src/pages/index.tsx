import React, {useEffect, useState} from "react";
import {DEFAULT_SECTIONS_LIST} from "@/constants/default";
import {Button, Dropdown, Input, Layout, MenuProps, Modal} from "antd";
import {DragOutlined, PlusOutlined} from "@ant-design/icons";
import {useSetState} from "ahooks";
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import _ from "lodash";
import {index} from "@umijs/utils/compiled/cheerio/lib/api/traversing";
import {nanoid} from "nanoid";

const {Content} = Layout;
export default function HomePage() {
    //全部的值
    const [state, setState] = useSetState<any>({
        sectionList: DEFAULT_SECTIONS_LIST,
        selectList: [
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
        previewData: '',
        isModalOpen: false,
        inputValue: ''
    })
    const {sectionList, selectList, currentType, previewData, isModalOpen, inputValue} = state

    //增加新的case
    const handleChangeCase = (index: any) => {
        const res = [...sectionList]
        const [data]: any = res.splice(index, 1)
        setState({
            sectionList: [...res],
            selectList: [...selectList, data],
            currentType: data.type
        })
    }

    //获取当前md
    const getCurrentMD = () => selectList.find((item: any) => item.type == currentType).markdown

    //编辑器
    const [editorData, setEditorData] = useState<any>("")
    useEffect(() => {
        setEditorData(getCurrentMD())
    }, [currentType])

    //更改addedCase对应的值
    useEffect(() => {
        const res = [...selectList]
        const filterData = res.find((item: any) => item.type == currentType)
        filterData.markdown = editorData
        setState({
            selectList: [...res]
        })
    }, [editorData])

    //预览更新的值
    useEffect(() => {
        const res = selectList.reduce((pre: any, cur: any) => pre + cur.markdown + '\n', "")
        setState({
            previewData: res
        })
    }, [selectList])

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

    //拖拽
    const onDragEnd = (result: any) => {
        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;
        if (sourceIndex === destinationIndex) {
            return;
        }
        const list = [...selectList];
        const [draggedItem] = list.splice(sourceIndex, 1);
        list.splice(destinationIndex, 0, draggedItem);
        setState({
            selectList: [...list]
        })
    }

    //自定义模板
    const addNewSection = () => {
        const res = [...selectList]
        const type = nanoid()
        res.push({
            type,
            name: inputValue,
            markdown: `## ${inputValue}`,
        })
        setState({
            selectList: [...res],
            currentType: type,
            inputValue: "",
            isModalOpen: false
        })
    }

    return (
        <Layout className={'max-h-screen min-h-screen'}>
            <header className={'flex justify-between items-center px-12 bg-gray-800'}>
                <img src="https://readme.so/readme.svg" alt="" className={'h-12'}/>
            </header>
            <Content style={{height: '95vh'}}>
                <div className={'grid grid-cols-5 gap-2 h-full'}>
                    <div className={'col-span-1 h-full overflow-auto p-3 w-full'}>
                        <div className={'is-select mb-3 w-full'}>
                            <div className={'mb-1 text-base'}>已选择模板</div>
                            <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable droppableId={_.uniqueId("droppableId")}>
                                    {(provided: any) => {
                                        return (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                className={'w-full'}
                                            >
                                                {selectList?.map((item: any, index: any) => {
                                                    return (
                                                        <Draggable
                                                            key={item?.name}
                                                            draggableId={item?.name}
                                                            index={index}
                                                        >
                                                            {(provided: any) => {
                                                                return (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        className={'flex-center w-full'}
                                                                    >
                                                                        <Button
                                                                            {...provided.dragHandleProps}
                                                                            type={'text'}
                                                                            icon={<DragOutlined/>}
                                                                        />
                                                                        <Dropdown.Button
                                                                            className={'my-2'}
                                                                            key={index}
                                                                            onClick={() => {
                                                                                setState({
                                                                                    currentType: item.type
                                                                                })
                                                                            }}
                                                                            type={item.type == currentType ? 'primary' : "default"}
                                                                            menu={{items, onClick: onMenuClick}}
                                                                        >
                                                                            {item?.name}
                                                                        </Dropdown.Button>
                                                                    </div>
                                                                )
                                                            }}
                                                        </Draggable>
                                                    )
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        )
                                    }}
                                </Droppable>
                            </DragDropContext>
                            <Button
                                className={'my-1'}
                                block={true}
                                icon={<PlusOutlined/>}
                                onClick={() => {
                                    setState({
                                        isModalOpen: true
                                    })
                                }}
                            >
                                <span className={'font-bold'}>自定义模板</span>
                            </Button>
                        </div>
                        <div className={'mb-1 text-base'}>配置模板</div>
                        {sectionList.map((item: any, index: any) => {
                            return (
                                <Button
                                    className={'my-1'}
                                    block={true}
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
                            previewTheme={'github'}
                            style={{height: '100%', padding: 10}}
                        />
                    </div>
                </div>
            </Content>
            <Modal
                title="添加自定义模板"
                open={isModalOpen}
                onOk={addNewSection}
                onCancel={() => {
                    setState({
                        isModalOpen: false,
                        inputValue: "",
                    })
                }}
            >
                <Input
                    placeholder="模板名称"
                    value={inputValue}
                    onChange={(e: any) => {
                        setState({
                            inputValue: e.target.value
                        })
                    }}
                />
            </Modal>
        </Layout>
    );
}
