import {Button} from "@mui/material";
import Title from "@/components/title";
import {useState} from "react";
import {DEFAULT_DATA, DEFAULT_PREFIX} from "@/constants/default";
import SubTitle from "@/components/subtitle";
import Work from "@/components/work";

export default function HomePage() {
    const [prefix, setPrefix] = useState(DEFAULT_PREFIX)
    const [data, setData] = useState(DEFAULT_DATA)
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
    const handleFinish = () => {
        console.log(prefix)
        console.log(data)
    }
    return (
        <div className='p-6'>
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
            <Work  prefix={prefix}
                   data={data}
                   handleDataChange={handleDataChange}
                   handlePrefixChange={handlePrefixChange} />
            <Button onClick={handleFinish} variant="contained">生成</Button>
        </div>
    );
}
