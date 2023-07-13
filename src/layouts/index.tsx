import {Outlet} from 'umi';
import {ConfigProvider} from "antd";

export default function App() {
    const config = {
        "token": {
            "colorPrimary": "#cf5659"
        }
    }
    return (
        <ConfigProvider theme={config}>
            <Outlet />
        </ConfigProvider>
    );
}
