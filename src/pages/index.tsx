import {Alert, AlertTitle, Button, Card, Checkbox, FormControlLabel, FormGroup, Snackbar} from "@mui/material";
import Title from "@/components/title";
import React, {useState} from "react";
import {DEFAULT_DATA, DEFAULT_PREFIX, DEFAULT_LINK} from "@/constants/default";
import SubTitle from "@/components/subtitle";
import Detail from "@/components/detail";
import {generateMarkdown} from "@/utils/util";
import intl from "react-intl-universal";
import AddOns from "@/components/add-ons";
import MarkDown from "@/components/markdown";

export default function HomePage() {
    const [prefix, setPrefix] = useState(DEFAULT_PREFIX)
    const [data, setData] = useState(DEFAULT_DATA)
    const [link, setLink] = useState(DEFAULT_LINK)
    const [showMd, setShowMd] = useState(false)
    const [mdContent, setMdContent] = useState()
    const handlePrefixChange = (key: any, value: any) => {
        const res = {...prefix}
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

    const [open, setOpen] = useState(false)
    const handleCheckChange = (key: any, value: any) => {
        if (!data?.githubName) {
            setOpen(true)
        }
        const res = {...data}
        // @ts-ignore
        res[key] = value
        setData(res)
    }
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleLinkChange = (key: any, value: any) => {
        const res = {...link}
        // @ts-ignore
        res[key] = value
        setLink(res)
    }

    const handleGenerate = () => {
        setShowMd(true)
        // @ts-ignore
        setMdContent(generateMarkdown(prefix, data, link))
    }

    return (
        <div className='p-6'>
            {
                showMd ?
                    <>
                        <div className='whitespace-pre-wrap w-full flex justify-center items-center border-2 bg-blue-50 p-6'>
                            <MarkDown setMdContent={setMdContent} prefix={prefix} data={data} link={link}/>
                        </div>
                        <div className='w-full flex justify-center items-center mt-3'>
                            <Button size={'large'} onClick={() => {
                                setShowMd(false)
                            }} variant="contained">
                                {intl.get('btnBack')}
                            </Button>
                        </div>
                    </>
                    :
                    <>
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
                        <Detail prefix={prefix}
                                data={data}
                                link={link}
                                handleDataChange={handleDataChange}
                                handlePrefixChange={handlePrefixChange}
                                handleLinkChange={handleLinkChange}
                        />
                        <AddOns
                            data={data}
                            handleDataChange={handleDataChange}
                            handleCheckChange={handleCheckChange}
                        />
                        <Snackbar anchorOrigin={{horizontal: 'center', vertical: 'top'}} open={open}
                                  autoHideDuration={2000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="warning" sx={{width: '100%'}}>
                                Please add github username to use these others add-ons
                            </Alert>
                        </Snackbar>
                        <div className='w-full flex justify-center items-center'>
                            <Button onClick={handleGenerate} size='large' variant="contained">
                                {intl.get('btnGen')}
                            </Button>
                        </div>
                    </>
            }
        </div>
    );
}
