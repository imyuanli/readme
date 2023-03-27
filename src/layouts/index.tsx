import {Link, Outlet} from 'umi';
import {Layout} from "antd";

const {Header, Footer, Content} = Layout;

// // import styles from './index.less';
// import intl from 'react-intl-universal';
// // import {useEffect, useState} from "react";
// // import {MenuItem, Select} from "@mui/material";
// // import {emit} from "@/locales/emit";
// import en from '../locales/en-US'
// import zh from '../locales/zh-CN'
// import {useEffect, useState} from "react";
//
// const locales = {
//     "en": en,
//     "zh": zh,
// };
// let DEFAULT_PREFIX = {}


const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {

};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};

export default function App() {
    // const [initDone, setInitDone] = useState(false)
    // useEffect(() => {
    //     let lang = navigator.language.toLowerCase();
    //     if (lang.indexOf('zh') >= 0) {
    //         // 假如浏览器语言是中文
    //         localStorage.setItem("defaultLng", "zh")
    //     } else {
    //         // 假如浏览器语言是其它语言
    //         localStorage.setItem("defaultLng", "en")
    //     }
    //     loadLocales()
    // })
    // //默认
    // const  default_local = localStorage.getItem('locale') || localStorage.getItem("defaultLng") || 'zh'
    // const loadLocales = () => {
    //     intl.init({
    //         currentLocale: default_local,
    //         locales,
    //     }).then(() => {
    //         DEFAULT_PREFIX = locales
    //         setInitDone(true)
    //     })
    // }
    //
    // const [locale, setLocale] = useState(default_local)
    // //切换语言
    // const handleChange = (e: any) => {
    //     let val = e.target.value
    //     setLocale(val)
    //     localStorage.setItem('locale', val)
    //     window.location.reload()
    // }
    // const context = {
    //     DEFAULT_PREFIX
    // }
    return (
        <Layout className={'max-h-screen min-h-screen'}>
            <Header style={{height:'5vh'}} className={'flex justify-between items-center'}>
                <img src="https://readme.so/readme.svg" alt="" className={'h-12'}/>
            </Header>
            <Content style={{height:'92vh'}}>
                <Outlet/>
            </Content>
            <Footer style={{height:'3vh'}}>Footer</Footer>
        </Layout>
    );
}
