import { useState } from 'react'
import useMount from './hooks/useMount';
import useUnmount from './hooks/useUnmount';
import useUnmountedRef from './hooks/useUnmountedRef';

import './App.css'

const Child = () => {
    const unmountedRef = useUnmountedRef();  //* 用于获取组件是否已卸载的状态

    useMount(() => {
        console.log("初始化：", unmountedRef);
    });

    useUnmount(() => {
        console.log("卸载：", unmountedRef);
    });

    return <div>child</div>
}

const Index = () => {
    const [flag, setFlag] = useState<boolean>(false);

    return (
        <div>
            <button onClick={() => setFlag(v => !v)}>
                切换 {flag ? "unmount" : "mount"}
            </button>
            {flag && <Child />}
        </div >
    );
}

export default Index;
