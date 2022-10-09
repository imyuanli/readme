import {TextField} from "@mui/material";
import React from "react";

interface props {
    prefix: any,
    handleDataChange: any
    handlePrefixChange: any
    data: any
}

const Work: React.FunctionComponent<props> = ({prefix, data, handleDataChange, handlePrefixChange}) => {
    return (
        <div className='m-3'>
            <div className='text-2xl mb-3'>
                Work
            </div>
            <div className='flex mb-3'>
                <div className='mr-6'>
                    <TextField
                        onChange={(e) => handlePrefixChange('title', e.target.value)}
                        value={prefix?.currentWork}
                        id="standard-basic" label=""
                        variant="standard"
                    />
                </div>
                <TextField
                    value={data?.currentWork}
                    onChange={(e) => handleDataChange('title', e.target.value)}
                    className='w-1/2'
                    id="standard-basic"
                    label=""
                    variant="standard"
                />
            </div>
            <div className='flex mb-3'>
                <div className='mr-6'>
                    <TextField
                        onChange={(e) => handlePrefixChange('title', e.target.value)}
                        value={prefix?.currentLearn}
                        id="standard-basic" label=""
                        variant="standard"
                    />
                </div>
                <TextField
                    value={data?.currentLearn}
                    onChange={(e) => handleDataChange('title', e.target.value)}
                    className='w-1/2'
                    id="standard-basic"
                    label=""
                    variant="standard"
                />
            </div>
            <div className='flex mb-3'>
                <div className='mr-6'>
                    <TextField
                        onChange={(e) => handlePrefixChange('title', e.target.value)}
                        value={prefix?.collaborateOn}
                        id="standard-basic" label=""
                        variant="standard"
                    />
                </div>
                <TextField
                    value={data?.collaborateOn}
                    onChange={(e) => handleDataChange('title', e.target.value)}
                    className='w-1/2'
                    id="standard-basic"
                    label=""
                    variant="standard"
                />
            </div>
        </div>
    )
}
export default Work