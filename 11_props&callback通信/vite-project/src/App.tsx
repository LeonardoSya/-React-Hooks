import React, { useState } from 'react'
import { Button } from 'antd'
import './App.css'

const App: React.FC<any> = () => {
    // const [flag, setFlag] = useState<boolean>(true);
    const [num, setNum] = useState<number>(0);

    // return (
    //     <>
    //         <div>father component</div>
    //         <Button type='primary' onClick={() => setFlag((v) =>!v)}>change state</Button>
    //         <Child flag={flag}>hei,child</Child>
    //     </>
    // )

    function getNum(v: number) {
        setNum(v)
    }

    return (
        <>
            <div>father</div>
            <div>num from child : {num}</div>

            {/* 子传父(状态提升：通过父组件传递的callback，通知父组件 */}
            <Child
                getNum={getNum}
            >
                I'm child
            </Child>
        </>
    )

};

const Child: React.FC<any> = ({ getNum }) => {
    const [num, setNum] = useState<number>(0)

    return (
        <div style={{ border: "1px solid #000", padding: 20 }}>
            <div>child</div>
            <Button
                type='primary'
                onClick={() => {
                    const res = num + 1;
                    setNum(res);
                    getNum(res);  // * 调用从父组件传递过来的callback `getNum`，并将新值res作为参数传递给父组件
                }}
            >
                click to +1 {num}
            </Button>
        </div>
    )

}

export default App;