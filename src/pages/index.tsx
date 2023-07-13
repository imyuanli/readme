import {Button, Divider} from "antd";
import {SelectLang} from 'umi';
import SectionBox from "@/components/section-box";
import {useEffect, useRef} from "react";
import {VerticalAlignMiddleOutlined} from "@ant-design/icons";
import {useSetState} from "ahooks";

const Index = () => {
    const parentRef: any = useRef()
    const imgBoxRef: any = useRef()
    const [state, setState] = useSetState({
        left: 500,
        sidesWidth: 0,
        isDrag: false,
    })
    const {sidesWidth, left, isDrag} = state
    useEffect(() => {
        setState({
            sidesWidth: (parentRef?.current.offsetWidth - imgBoxRef?.current.offsetWidth) / 2
        })
        console.log()
    }, [])
    //鼠标移动
    const handleMouseMove = (e) => {
        if (!isDrag) return
        const left = e.clientX - sidesWidth
        if (left < 0) {
            setState({left: 0})
            return
        }
        if (left > imgBoxRef?.current.offsetWidth) {
            setState({
                left: imgBoxRef?.current.offsetWidth,
            })
            return
        }
        setState({left})
    }
    const handleMouseUp = () => {
        setState({
            isDrag: false
        })
    }
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
    }, [isDrag])

    return (
        <>
            <header className={'max-w-7xl mx-auto p-4 flex justify-between items-center'}>
                <div className={'text-2xl font-bold'}>RMX</div>
                <div className={'flex-center'}>
                    <div className={"hidden md:block"}>
                        <div className={'flex-center p-2'}>
                            <Button size={'large'} type="text">模板</Button>
                            <Button size={'large'} type="text">特点</Button>
                            <Button size={'large'} type="text">FAQ</Button>
                            <Button size={'large'} type="text">Github</Button>
                        </div>
                    </div>
                    <div className={"block md:hidden"}>
                        ???
                    </div>
                    <Divider type={'vertical'}/>
                    <SelectLang/>
                    <Divider type={'vertical'}/>
                    <Button type={'primary'}>登录</Button>
                </div>
            </header>
            <main>
                <SectionBox>
                    <div className={'flex-center flex-col space-y-4 md:space-y-8 px-4'}>
                        <Button shape={'round'}>
                            在 Github 上给我们一个 star
                        </Button>
                        <div className={'text-3xl md:text-4xl lg:text-5xl font-bold text-center'}>
                            <span className={'primary-color'}> RMX </span>
                            更好地创造 README.md
                        </div>
                        <div
                            className={'flex-center flex-col text-base md:text-lg lg:text-xl text-gray-600 space-y-2 text-center'}>
                            <div>用崭新的方式编写 README.md</div>
                            <div>允许您快速添加和定制 README.md 所需的所有部分</div>
                        </div>
                        <div className={'space-x-4'}>
                            <Button type={'primary'} size={'large'}>开始使用</Button>
                            <Button size={'large'}>模板市场</Button>
                        </div>
                    </div>
                </SectionBox>
                <SectionBox needBg={true}>
                    <div ref={parentRef} className={'w-full h-full relative flex-center flex-col space-y-8'}>
                        <div className={'flex-center flex-col space-y-4'}>
                            <div className={'text-3xl'}>简化步骤</div>
                            <div>快速帮您生成专属的 README</div>
                        </div>
                        <div className={'w-full h-full flex-center'}>
                            <div
                                ref={imgBoxRef}
                                className={'z-10 max-w-6xl min-h-[350px] md:min-h-[650px] w-full relative shadow-[0_25px_50px_15px] shadow-lg shadow-red-500/20 mx-4'}
                            >
                                <div
                                    className={`bg-cover h-full w-full absolute bg-no-repeat bg-[url('/img_3.png')]`}/>
                                <div
                                    style={{width: left}}
                                    className={`hidden md:block bg-cover h-full absolute bg-no-repeat bg-[url('/img_4.png')]`}
                                />
                                <div className={'hidden md:block'}>
                                    <div
                                        style={{left}}
                                        className={'h-full absolute w-1 bg-[#cf5659] flex-center rounded-md'}
                                    >
                                        <Button
                                            onMouseDown={() => {
                                                setState({isDrag: true})
                                            }}
                                            size={'large'}
                                            type={'primary'}
                                            shape={'circle'}
                                            icon={<VerticalAlignMiddleOutlined/>}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <svg
                            class="absolute left-0 -bottom-[15%] w-full"
                            viewBox="0 0 1919 377"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 368.265L35.6081 355.891C71.003 343.305 142.219 318.558 213.222 309.171C284.225 299.998 355.441 306.398 426.444 303.625C497.447 300.638 568.664 288.691 639.667 302.131C710.67 315.571 781.886 354.825 852.889 353.331C923.892 351.838 995.108 310.025 1066.11 290.398C1137.11 270.771 1208.33 273.758 1279.33 295.731C1350.34 317.705 1421.55 359.091 1492.56 371.891C1563.56 384.691 1634.77 368.905 1705.78 364.425C1776.78 359.731 1848 366.131 1883.39 369.331L1919 372.531V176.265H1883.39C1848 176.265 1776.78 176.265 1705.78 176.265C1634.77 176.265 1563.56 176.265 1492.56 176.265C1421.55 176.265 1350.34 176.265 1279.33 176.265C1208.33 176.265 1137.11 176.265 1066.11 176.265C995.108 176.265 923.892 176.265 852.889 176.265C781.886 176.265 710.67 176.265 639.667 176.265C568.664 176.265 497.447 176.265 426.444 176.265C355.441 176.265 284.225 176.265 213.222 176.265C142.219 176.265 71.003 176.265 35.6081 176.265H0V368.265Z"
                                fill="#E64F6D"
                            />
                            <path
                                d="M0 8.53113L35.6081 20.9044C71.003 33.4911 142.219 58.2378 213.222 67.6245C284.225 76.7978 355.441 70.3978 426.444 73.1711C497.447 76.1578 568.664 88.1045 639.667 74.6645C710.67 61.2245 781.886 21.9711 852.889 23.4645C923.892 24.9578 995.108 66.7711 1066.11 86.3978C1137.11 106.024 1208.33 103.038 1279.33 81.0645C1350.34 59.0911 1421.55 17.7044 1492.56 4.90444C1563.56 -7.89556 1634.77 7.8911 1705.78 12.3711C1776.78 17.0644 1848 10.6645 1883.39 7.46446L1919 4.26446V200.531H1883.39C1848 200.531 1776.78 200.531 1705.78 200.531C1634.77 200.531 1563.56 200.531 1492.56 200.531C1421.55 200.531 1350.34 200.531 1279.33 200.531C1208.33 200.531 1137.11 200.531 1066.11 200.531C995.108 200.531 923.892 200.531 852.889 200.531C781.886 200.531 710.67 200.531 639.667 200.531C568.664 200.531 497.447 200.531 426.444 200.531C355.441 200.531 284.225 200.531 213.222 200.531C142.219 200.531 71.003 200.531 35.6081 200.531H0V8.53113Z"
                                fill="#E64F6D"
                            />
                            <path
                                d="M0 145.064L35.6081 140.158C71.003 135.038 142.219 125.224 213.222 124.798C284.225 124.371 355.441 133.758 426.444 135.464C497.447 137.171 568.664 131.624 639.667 121.598C710.67 111.571 781.886 97.4912 852.889 87.8912C923.892 78.2912 995.108 73.1712 1066.11 77.2245C1137.11 81.0645 1208.33 93.8645 1279.33 101.758C1350.34 109.438 1421.55 112.424 1492.56 113.704C1563.56 115.198 1634.77 115.198 1705.78 119.891C1776.78 124.371 1848 133.758 1883.39 138.238L1919 142.931V200.531H1883.39C1848 200.531 1776.78 200.531 1705.78 200.531C1634.77 200.531 1563.56 200.531 1492.56 200.531C1421.55 200.531 1350.34 200.531 1279.33 200.531C1208.33 200.531 1137.11 200.531 1066.11 200.531C995.108 200.531 923.892 200.531 852.889 200.531C781.886 200.531 710.67 200.531 639.667 200.531C568.664 200.531 497.447 200.531 426.444 200.531C355.441 200.531 284.225 200.531 213.222 200.531C142.219 200.531 71.003 200.531 35.6081 200.531H0V145.064Z"
                                fill="#D03472"
                            />
                        </svg>
                    </div>
                </SectionBox>
            </main>
            <footer className={`py-16 bg-[#262626] flex-center flex-col`}>
                <div className={'text-white text-base'}>
                    © Copyright 鸢离 {new Date().getFullYear()}. All Rights Reserved.
                </div>
            </footer>
        </>
    )
}
export default Index