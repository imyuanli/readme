import {TextField} from "@mui/material";
import intl from 'react-intl-universal';
import {useEffect, useState} from "react";

export default function Title({}) {
    return (
        <div>
            <div className='text-2xl mb-3'>
                Title
            </div>
            <div className='flex'>
                <div className='mr-6'>
                    <TextField   value={intl.get('title')} id="standard-basic" label="" variant="standard"/>
                </div>
                <TextField className='w-1/4' id="standard-basic" label="" variant="standard"/>
            </div>
        </div>
    );
}
