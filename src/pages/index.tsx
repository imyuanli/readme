import {Button, Divider} from "antd";
import {SelectLang} from 'umi';
import SectionBox from "@/components/section-box";

const Index = () => {
    return (
        <>
            <header className={'flex justify-between items-center px-96 py-4'}>
                <div className={'text-2xl font-bold'}>RMX</div>
                <div className={'flex-center'}>
                    <div className={'flex-center p-2'}>
                        <Button size={'large'} type="text">模板</Button>
                        <Button size={'large'} type="text">特点</Button>
                        <Button size={'large'} type="text">FAQ</Button>
                        <Button size={'large'} type="text">Github</Button>
                    </div>
                    <Divider type={'vertical'}/>
                    <SelectLang/>
                    <Divider type={'vertical'}/>
                    <Button type={'primary'}>登录</Button>
                </div>
            </header>
            <main className={'flex-center flex-col'}>
                <SectionBox>
                    <Button shape={'round'}>
                        在 Github 上给我们一个 star
                    </Button>
                    <div className={'text-5xl font-bold'}>
                        让 <span className={'primary-color'}>README.md</span> 更简单地创造
                    </div>
                    <div className={'flex-center flex-col text-xl text-gray-600'}>
                        <div>用崭新的方式编写README.md</div>
                        <div>RMX允许您快速添加和定制您 README 所需的所有部分</div>
                    </div>
                    <div className={'space-x-4'}>
                        <Button type={'primary'} size={'large'}>开始使用</Button>
                        <Button size={'large'}>模板市场</Button>
                    </div>
                </SectionBox>
                <SectionBox needBg={true}>
                    <div>
                        只专注于内容
                        帮您生成专属的README.md
                    </div>
                </SectionBox>
            </main>
            <footer className={'flex-center py-4'}>
                制作 ♡ by yuanli
            </footer>
        </>
    )
}
export default Index