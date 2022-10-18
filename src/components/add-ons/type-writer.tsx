import {Button, Card, Checkbox, FormControlLabel, FormGroup, Icon, IconButton, TextField} from "@mui/material";
import React, {useEffect, useState} from "react";
import DataInput from "@/components/base/data-input";
import BaseTitle from "@/components/base/base-title";
import intl from "react-intl-universal";
import OnTitle from "@/components/add-ons/on-title";
import AddIcon from '@mui/icons-material/Add';

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
        <Card className='mb-6 p-6'>
            <OnTitle value={'About other'}/>
            <div className={'flex flex-col'}>
                {
                    data.map((item: object, index: number) => {
                        return (
                            <>
                                <TextField
                                    key={index}
                                    id="standard-basic"
                                    label=""
                                    variant="standard"
                                    className='mb-3'
                                    onChange={(e) => onChange(index, e.target.value)}
                                />
                            </>

                        )
                    })
                }
            </div>
            <div className='flex justify-center items-center'>
                <IconButton onClick={handler}>
                    <AddIcon/>
                </IconButton>
            </div>
            {/*<Button onClick={()=>{console.log(data)}} size='large' variant="contained">?ads</Button>*/}
        </Card>
    )
}
export default TypeWriter