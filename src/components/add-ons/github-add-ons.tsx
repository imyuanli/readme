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
        <Card  className='mb-8 p-6 '>
            <OnTitle value={'GitHub'} />
            <div className={'mb-3'}>
                <DataInput
                    handleDataChange={handleDataChange}
                    value={data?.githubName}
                    type={'githubName'}
                    placeholder={intl.get('githubName')}
                />
            </div>
            <FormGroup className='w-full'>
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