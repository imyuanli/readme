import {Card, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import React from "react";
import DataInput from "@/components/base/data-input";
import BaseTitle from "@/components/base/base-title";
import intl from "react-intl-universal";
import OnTitle from "@/components/add-ons/on-title";

interface props {
    data: any
    handleDataChange: any
    handleCheckChange: any
}

const SocialContact: React.FunctionComponent<props> = ({data, handleDataChange, handleCheckChange}) => {
    return (
        <div className={'m-3'}>
            <Card style={{minWidth:'400px'}}  className='p-6'>
                <OnTitle value={'Social'} />
                <div className='mb-3'>
                    <TextField
                        value={data?.githubName}
                        onChange={(e) => handleDataChange('githubName', e.target.value)}
                        className='w-full'
                        id="standard-basic"
                        label=""
                        variant="standard"
                        placeholder={intl.get('githubName')}
                    />
                </div>
            </Card>
        </div>
    )
}
export default SocialContact