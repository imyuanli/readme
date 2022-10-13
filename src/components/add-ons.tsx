import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import React from "react";
import DataInput from "@/components/base/data-input";
import BaseTitle from "@/components/base/base-title";
import intl from "react-intl-universal";

interface props {
    data: any
    handleDataChange: any
    handleCheckChange: any
}

const AddOns: React.FunctionComponent<props> = ({data, handleDataChange, handleCheckChange}) => {
    const checkArr = ['visitorsBadge', 'githubProfileTrophy', 'githubStats', 'topLanguages', 'streakStats',]
    return (
        <div className='mb-8'>
            <BaseTitle value={intl.get('bsAddOns')} />
            <DataInput
                handleDataChange={handleDataChange}
                value={data?.githubName}
                type={'githubName'}
                placeholder={intl.get('githubName')}
            />
            <FormGroup className='w-full'>
                {
                    checkArr.map((item, index) => {
                        return (
                            <FormControlLabel key={index} control={
                                <Checkbox
                                    onChange={(e) => {
                                        handleCheckChange(e.target.value, e.target.checked)
                                    }}
                                    value={item}
                                />} label={intl.get(item)}
                            />
                        )
                    })
                }
            </FormGroup>
        </div>
    )
}
export default AddOns