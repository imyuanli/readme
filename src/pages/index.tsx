import React, {useEffect} from "react";
import {DEFAULT_SECTIONS} from "@/constants/default";
import {Button, Card, Input} from "antd";
import {RedoOutlined} from "@ant-design/icons";
import {useSetState} from "ahooks";

export default function HomePage() {
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
        currentType: 'title-and-description'
    })
    const {useCases, addedCase, currentType} = state
    const handleChangeCase = (index: any) => {
        const res = [...useCases]
        const [data]: any = res.splice(index, 1)
        setState({
            useCases: [...res],
            addedCase: [...addedCase, data],
            currentType: data.type
        })
    }

    const getCurrentItem = () => {
        const res =  addedCase.find((item: any) => item.type == currentType)
        return res.markdown
    }
    return (
        <div className={'p-3 flex h-full'}>
            <div className={'grid grid-cols-1 gap-4 h-full p-3 overflow-auto'}>
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
            </div>
            <div className={'w-3/4 flex h-full'}>
                <div className={'flex-1'}>
                    <div>
                        <Input value={getCurrentItem()}/>
                    </div>
                </div>
                <div className={'flex-1'}>
                    <div>123</div>
                </div>
            </div>
        </div>
    );
}
