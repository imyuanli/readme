import {Link, Outlet} from 'umi';
// import styles from './index.less';
import intl from 'react-intl-universal';
// import {useEffect, useState} from "react";
// import {MenuItem, Select} from "@mui/material";
// import {emit} from "@/locales/emit";
import en from '../locales/en-US'
import zh from '../locales/zh-CN'
import {useEffect, useState} from "react";
import {MenuItem, Select} from "@mui/material";

const locales = {
    "en": en,
    "zh": zh,
};
export default function Layout() {
    const [initDone, setInitDone] = useState(false)
    useEffect(() => {
        let lang = navigator.language.toLowerCase();
        if (lang.indexOf('zh') >= 0) {
            // 假如浏览器语言是中文
            localStorage.setItem("defaultLng", "zh")
        } else {
            // 假如浏览器语言是其它语言
            localStorage.setItem("defaultLng", "en")
        }
        loadLocales()
    })
    //默认
    const  default_local = localStorage.getItem('locale') || localStorage.getItem("defaultLng") || 'zh'
    const loadLocales = () => {
        intl.init({
            currentLocale: default_local,
            locales,
        }).then(() => {
            setInitDone(true)
        })
    }

    const [locale, setLocale] = useState(default_local)
    //切换语言
    const handleChange = (e: any) => {
        let val = e.target.value
        setLocale(val)
        localStorage.setItem('locale', val)
        window.location.reload()
    }
    return (
        <div className='m-3'>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={locale}
                label="Language"
                onChange={handleChange}
            >
                <MenuItem value='zh'>中文</MenuItem>
                <MenuItem value='en'>English</MenuItem>
            </Select>
            {
                initDone && <Outlet/>
            }
        </div>
    );
}
