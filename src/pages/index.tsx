import {Button} from "@mui/material";
import Title from "@/components/title";
import {useState} from "react";
import {DEFAULT_DATA, DEFAULT_PREFIX} from "@/constants/default";
import SubTitle from "@/components/subtitle";
import Work from "@/components/work";
import {generateMarkdown} from "@/utils/util";

export default function HomePage() {
    const [prefix, setPrefix] = useState(DEFAULT_PREFIX)
    const [data, setData] = useState(DEFAULT_DATA)
    const [showMd, setShowMd] = useState(false)
    const [mdContent, setMdContent] = useState(false)
    const handlePrefixChange = (key: any, value: any) => {
        const res = {...data}
        // @ts-ignore
        res[key] = value
        setPrefix(res)
    }
    const handleDataChange = (key: any, value: any) => {
        const res = {...data}
        // @ts-ignore
        res[key] = value
        setData(res)
    }
    const handleGenerate = () => {
        setShowMd(true)
        // @ts-ignore
        setMdContent(generateMarkdown(prefix,data))
    }
    return (
        <div className='p-6'>
            {
                showMd ?
                    <>
                        <div className='whitespace-pre'>
                            {mdContent}
                        </div>
                        <Button onClick={() => {
                            setShowMd(false)
                        }} variant="contained">取消</Button>
                    </>
                    :
                    <>
                        <Title
                            prefix={prefix}
                            data={data}
                            handleDataChange={handleDataChange}
                            handlePrefixChange={handlePrefixChange}
                        />
                        <SubTitle
                            data={data}
                            handleDataChange={handleDataChange}
                        />
                        <Work prefix={prefix}
                              data={data}
                              handleDataChange={handleDataChange}
                              handlePrefixChange={handlePrefixChange}/>
                        <Button onClick={handleGenerate} variant="contained">生成</Button>
                    </>
            }
        </div>
    );
}
