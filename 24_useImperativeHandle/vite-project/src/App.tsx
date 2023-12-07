import React, { useState, useRef, useImperativeHandle } from 'react'
import './App.css'

const App: React.FC<any> = () => {
    const ref = useRef<any>(null);

    return (
        <>
            <button onClick={() => ref.current.add()}>
                btn on father, click to + 1
            </button>
            <Child childRef={ref} />  //* 将父组件的ref通过属性传递给子组件
            {/* 父组件通过ref.current访问子组件时，由于useImperativeHandle，只能获取到add，其他子组件内部的状态和方法不会被父组件直接访问，增强了组件的封装性 */}
        </>
    );
}

const Child = ({ childRef }: any) => {

    const [count, setCount] = useState(0);

    useImperativeHandle(childRef, () => ({
        add  //* 使用useImperativeHandle暴露方法，将子组件的add方法暴露给父组件
    }))

    const add = () => {
        setCount(v => v + 1);
    }

    return (
        <div>
            <p>click: {count}</p>
            <button onClick={() => add()}>btn on son, click to + 1</button>
        </div>
    )
}


export default App;