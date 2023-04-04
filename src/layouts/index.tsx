import {Outlet} from 'umi';
import {StyleProvider} from '@ant-design/cssinjs';

export default function App() {
    return (
        <StyleProvider hashPriority="high">
            <Outlet/>
        </StyleProvider>
    );
}
