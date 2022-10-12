import {Button} from "@mui/material";
import Title from "@/components/title";
import {useState} from "react";
import {DEFAULT_DATA, DEFAULT_PREFIX, DEFAULT_LINK} from "@/constants/default";
import SubTitle from "@/components/subtitle";
import Work from "@/components/work";
import {generateMarkdown} from "@/utils/util";
import intl from "react-intl-universal";
import {Md} from "@/components/md";

export default function HomePage() {
    const [prefix, setPrefix] = useState(DEFAULT_PREFIX)
    const [data, setData] = useState(DEFAULT_DATA)
    const [link, setLink] = useState(DEFAULT_LINK)
    const [showMd, setShowMd] = useState(false)
    const [mdContent, setMdContent] = useState(false)
    const handlePrefixChange = (key: any, value: any) => {
        const res = {...prefix}
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

    const handleLinkChange = (key: any, value: any) => {
        const res = {...link}
        // @ts-ignore
        res[key] = value
        setLink(res)
    }

    const handleGenerate = () => {
        setShowMd(true)
        // @ts-ignore
        setMdContent(generateMarkdown(prefix, data, link))
    }
    return (
        <div className='p-6'>
            {
                showMd ?
                    <>
                        <div className='whitespace-pre w-full flex justify-center items-center border-2 bg-blue-50 p-6'>
                            <Md prefix={prefix} data={data} link={link}/>
                            {

                            }
                        </div>

                        <div className='w-full flex justify-center items-center mt-3'>
                            <Button size={'large'} onClick={() => {
                                setShowMd(false)
                            }} variant="contained">
                                {intl.get('btnBack')}
                            </Button>
                        </div>
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
                              link={link}
                              handleDataChange={handleDataChange}
                              handlePrefixChange={handlePrefixChange}
                              handleLinkChange={handleLinkChange}
                        />
                        <div className='w-full flex justify-center items-center'>
                            <Button onClick={handleGenerate} size='large' variant="contained">
                                {intl.get('btnGen')}
                            </Button>
                        </div>
                    </>
            }
        </div>
    );
}
