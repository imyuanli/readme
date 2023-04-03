import React, {useEffect, useState} from "react";
import {DEFAULT_README_TEMPLATE} from "@/constants/default";
import {Button, Card, Dropdown, Input, Layout, Modal} from "antd";
import {
    CopyOutlined,
    DownloadOutlined,
    DragOutlined,
    ExclamationCircleFilled,
    PlusOutlined,
    RedoOutlined
} from "@ant-design/icons";
import {useLocalStorageState, useSetState} from "ahooks";
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import _ from "lodash";
import {nanoid} from "nanoid";

const {confirm} = Modal;
const {Content} = Layout;
export default function HomePage() {
    //默认模板
    const [templateList, setTemplateList] = useLocalStorageState<any | undefined>(
        'templateList',
        {
            defaultValue: DEFAULT_README_TEMPLATE,
        },
    );

    //选择的模板
    const [selectIdArr, setSelectIdArr] = useLocalStorageState<any | undefined>(
        'selectIdArr',
        {
            defaultValue: ['title-and-description'],
        },
    );

    //当前模板
    const [currentId, setCurrentId] = useLocalStorageState<any | undefined>(
        'currentId',
        {
            defaultValue: 'title-and-description',
        },
    );

    //模板中是否包含已选择的
    const isHaveInTemplate = (id: string) => selectIdArr.includes(id)

    //获取已经选择的模板
    const getSelectTemplate: any = () => selectIdArr.map((id: any) => templateList.find((item: any) => item.id === id))

    //剩余的值
    const [state, setState] = useSetState<any>({
        previewData: '',
        isModalOpen: false,
        inputValue: '',
        isRestModal: false
    })
    const {previewData, isModalOpen, inputValue, isRestModal} = state

    //选择模板
    const handleSelectTemplate = (id: string) => {

        setSelectIdArr([...selectIdArr, id])
        setCurrentId(id)
    }

    //获取当前md
    const getCurrentMarkdown = () => currentId ? templateList.find((item: any) => item.id == currentId).markdown : "请先选择一个模板来编辑内容"

    //编辑器
    const [editorData, setEditorData] = useState<any>("")
    useEffect(() => {
        setEditorData(getCurrentMarkdown())
    }, [currentId])

    //更改模板的值
    useEffect(() => {
        if (currentId) {
            const res = [...templateList]
            const filterData = res.find((item: any) => item.id == currentId)
            filterData.markdown = editorData
            setTemplateList([...res])
        }
    }, [editorData])

    //预览
    useEffect(() => {
        setState({
            previewData: getSelectTemplate().reduce((pre: any, cur: any) => pre + cur.markdown, '')
        })
    }, [selectIdArr, templateList])

    //拖拽
    const onDragEnd = (result: any) => {
        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;
        if (sourceIndex === destinationIndex) {
            return;
        }
        const idArr = [...selectIdArr];
        const [draggedItem] = idArr.splice(sourceIndex, 1);
        idArr.splice(destinationIndex, 0, draggedItem);
        setSelectIdArr([...idArr])
    }

    //自定义模板
    const addNewTemplate = () => {
        const res = [...templateList]
        const id = nanoid()
        res.push({
            id,
            name: inputValue,
            markdown: `## ${inputValue}`,
        })
        setTemplateList([...res])
        setSelectIdArr([...selectIdArr, id])
        setCurrentId(id)
        setState({
            isModalOpen: false,
            inputValue: ""
        })
    }

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
    const onMenuClick = (e: any, item: any) => {
        let key = e.key
        if (key == 1) {
            reSetSection(item.id)
        } else {
            deleteSection(item.id)
        }
    };

    //重置
    const reSetSection = (id: string) => {
        const defaultRes = DEFAULT_README_TEMPLATE.find((item: any) => item.id == id)
        const res = [...templateList]
        const list = res.find((item: any) => item.id == id)
        list.markdown = defaultRes ? defaultRes.markdown : `## ${list.name}`
        setTemplateList([...res])
        setEditorData(getCurrentMarkdown())
    }

    //删除
    const deleteSection = (id: string) => {
        const res = selectIdArr.filter((item: any) => item !== id)
        setSelectIdArr([...res])
        if (currentId === id) {
            setCurrentId(null)
        }

    }

    //恢复默认状态
    const handleRestModal = () => {
        confirm({
            title: '恢复初始状态',
            icon: <ExclamationCircleFilled/>,
            content: '是否重置您所有自述文件的模板',
            okText: '确认',
            cancelText: '取消',
            onOk() {
                restoreInitialState()
            },
        });
    }
    const restoreInitialState = () => {
        setTemplateList(DEFAULT_README_TEMPLATE)
        setSelectIdArr(['title-and-description'])
        setCurrentId('title-and-description')
        setState({
            isRestModal: false
        })
    }

    return (
        <Layout className={'max-h-screen h-screen'}>
            <header className={'h-[5vh] flex justify-between items-center px-9 bg-gray-800'}>
                <div>
                    <img src="https://readme.so/readme.svg" alt="" className={'h-12'}/>
                </div>
            </header>
            <Content className={'h-[95vh] max-[95vh]'}>
                <div className={'grid grid-cols-5 gap-2 h-full'}>
                    <Card
                        title={'模板'}
                        className={'col-span-1 h-full overflow-hidden'}
                        extra={
                            <Button
                                onClick={handleRestModal}
                                type={"primary"}
                                icon={<RedoOutlined/>}
                            />
                        }
                        bodyStyle={{
                            height:'95%',
                            overflow:'auto',
                        }}
                    >
                        <div className={'mb-1 text-base'}>已使用模板</div>
                        <div className={'mb-3 w-full'}>
                            <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable droppableId={_.uniqueId("droppableId")}>
                                    {(provided: any) => {
                                        return (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                className={'is-select w-full'}
                                            >
                                                {getSelectTemplate().map((item: any, index: any) => {
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
                                                                                setCurrentId(item.id)
                                                                            }}
                                                                            type={item.id == currentId ? 'primary' : "default"}
                                                                            menu={{
                                                                                items, onClick: (e) => {
                                                                                    onMenuClick(e, item)
                                                                                }
                                                                            }}
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
                        <div className={'mb-1 text-base'}>未使用模板</div>
                        {templateList.map((item: any) => {
                            if (!isHaveInTemplate(item.id)) {
                                return (
                                    <Button
                                        className={'my-1'}
                                        block={true}
                                        type="dashed"
                                        key={item.id}
                                        onClick={() => {
                                            handleSelectTemplate(item.id)
                                        }}
                                    >
                                        {item?.name}
                                    </Button>
                                )
                            }
                        })}
                    </Card>
                    <Card
                        title={'编辑'}
                        className={'col-span-2 h-full'}
                        bodyStyle={{
                            padding:12,
                            height:'95%',
                        }}
                    >
                        <MdEditor
                            editorId={'editor'}
                            modelValue={editorData}
                            preview={false}
                            onChange={setEditorData}
                            showCodeRowNumber={true}
                            style={{height: '100%'}}
                            footers={[]}
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
                    </Card>
                    <Card
                        title={'预览'}
                        className={'col-span-2 h-full overflow-hidden'}
                        extra={<div>
                            <Button
                                icon={<CopyOutlined/>}
                                type={'primary'}
                                className={'mr-3'}
                            />
                            <Button
                                icon={<DownloadOutlined/>}
                                type={'primary'}
                            />
                        </div>}
                        bodyStyle={{
                            height:'95%',
                            overflow:'auto',
                        }}
                    >
                        <MdEditor
                            editorId={'preview'}
                            previewOnly={true}
                            modelValue={previewData}
                            previewTheme={'github'}
                            codeTheme={'github'}
                            showCodeRowNumber={true}
                        />
                    </Card>
                </div>
            </Content>
            <Modal
                title="添加自定义模板"
                open={isModalOpen}
                onOk={addNewTemplate}
                onCancel={() => {
                    setState({
                        isModalOpen: false,
                        inputValue: "",
                    })
                }}
                okText={'确认'}
                cancelText={'取消'}
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
