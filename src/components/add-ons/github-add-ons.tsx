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

const GitHubAddOns: React.FunctionComponent<props> = ({data, handleDataChange, handleCheckChange}) => {
    const githubCheckArr = ['visitorsBadge', 'githubProfileTrophy', 'githubStats', 'topLanguages', 'streakStats']
    return (
        <Card  className='mb-8 p-6'>
            <OnTitle value={'GitHub'} />
            <div style={{width:'50%'}} className='mb-3'>
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
            <FormGroup style={{flexDirection:'row',justifyContent: 'space-between'}}>
                {
                    githubCheckArr.map((item, index) => {
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
        </Card>
    )
}
export default GitHubAddOns