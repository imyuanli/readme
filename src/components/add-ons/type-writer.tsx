import {Button, TextField} from "@mui/material";
import React, {useEffect, useState} from "react";
import DataInput from "@/components/base/data-input";
import BaseTitle from "@/components/base/base-title";
import intl from "react-intl-universal";

interface props {

}

const TypeWriter: React.FunctionComponent<props> = () => {
    const [data, setData] = useState<any>([
        {value: ''}
    ])
    const handler = () => {
        setData([...data, {value: ''}])
    }
    const onChange = (index: number, e: string) => {
        data[index].value = e
    }
    return (
        <div className='mb-8'>
            <div className={'flex flex-col'}>
                {
                    data.map((item: object, index: number) => {
                        return (
                            <TextField
                                key={index}
                                id="standard-basic"
                                label=""
                                variant="standard"
                                onChange={(e) => onChange(index, e.target.value)}
                            />
                        )
                    })
                }
            </div>
            <Button onClick={handler} size='large' variant="contained">+</Button>
            <Button onClick={()=>{console.log(data)}} size='large' variant="contained">?ads</Button>
        </div>
    )
}
export default TypeWriter