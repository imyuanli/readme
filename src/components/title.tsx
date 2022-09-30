import {TextField} from "@mui/material";
import intl from 'react-intl-universal';
import {useEffect, useState} from "react";

export default function Title() {
    // const [title,setTitle] = useState()
    console.log(intl.get('title'))
    // useEffect(()=>{
    //     console.log("dasd",title)
    // },[intl.get('title')])
    return (
        <div className='p-6'>
            <div className=''>
                <div className=''>
                    Title
                </div>
                <TextField className='mr-3' value={intl.get('title')} id="standard-basic" label="" variant="standard"/>
                <TextField className='w-1/4' id="standard-basic" label="" variant="standard"/>
            </div>
        </div>
    );
}
