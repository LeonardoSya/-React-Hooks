import React, { useDeferredValue, useId, useState } from 'react'
import './App.css'

const getList = (key: any) => {
    const arr = [];
    for (let i = 0; i < 10000; i++) {
        if (String(i).includes(key)) {
            arr.push(<li key={i}>{i}</li>)
        }
    }
    return arr;
};

const App: React.FC<any> = () => {

    const id = useId();
    console.log('id: ', id);
    // 订阅
    const [input, setInput] = useState("")
    const deferredValue = useDeferredValue(input);
    console.log('value: ', input);
    console.log('deferredValue: ', deferredValue);

    // * 通过useD优化了输入框的搜索功能，以在处理大量数据时提高性能 —— 用户输入的关键字在实际计算之前可能会有一些延迟，这有助于平滑用户界面的响应性
    return (
        <>
            <input type="text" value={input}
                onChange={(e: any) => setInput(e.target.value)}
            />
            <div id={id}>
                <ul>{deferredValue ? getList(deferredValue) : null}</ul>
            </div>
        </>
    )
}

export default App
