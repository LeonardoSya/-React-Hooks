import { useCallback, useReducer } from 'react'
import './App.css'

const App: React.FC<any> = () => {
  const [count, dispatch] = useReducer((state: number, action: any) => {
    switch (action?.type) {
      case "add":
        console.log('+1');
        return state + action?.payload;
      case "sub":
        console.log('-1');
        return state - action?.payload;
      default:
        return state;
    }
  }, 0);  // * 这个0是state的初始默认值(initialArg)


  // * 使用useCallback来缓存函数，使得每次渲染时都使用相同的函数实例(不让它创建新的函数组件实例了)，从而避免重复打印的问题
  const handleAdd = useCallback(() => {  
    dispatch({ type: "add", payload: 1 });
  }, []);

  const handleSub = useCallback(() => {
    dispatch({ type: "sub", payload: 1 });
  }, []);

  return (
    <>
      <div>count: {count}</div>
      <button onClick={handleAdd}>
        +1
      </button>
      <button onClick={handleSub}>
        -1
      </button>

    </>
  )
}

export default App;