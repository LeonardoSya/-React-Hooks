import React, { useState, useMemo } from 'react'
import './App.css'

const usePow = (list: number[]) => {

  return useMemo(  // * 在此使用useMemo的目的是在flag状态变化时，仅在数组[1,2,3]发生变化时重新计算data，而避免在每次组件渲染时都重新计算
    () =>
      list.map((item: number) => {
        console.log('usePow is called');
        return item ** 2;
      }),
    []  // * 依赖项数组为[]空时，该useMemo的计算结果将在组件的整个生命周期内保持不变
  );
};

const App: React.FC<any> = () => {

  const [flag, setFlag] = useState(true);  // * flag 本应与usePow毫无关系，但是因为每次状态更新都会让组件重新绘制。这就带来了不必要的性能开销
  const data = usePow([1, 2, 3])

  return (
    <>
      <div>num**2: {JSON.stringify(data)}</div>
      <button onClick={() => setFlag(v => !v)}>
        change {JSON.stringify(flag)}
      </button>
    </>
  );
};

export default App;