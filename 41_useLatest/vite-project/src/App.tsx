import { useEffect, useState } from 'react'
import './App.css'
import useLatest from './useLatest';

const App = () => {
  const [count, setCount] = useState(0);
  // * 用useLatest包裹count
  const ref = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('count:', count)
      console.log('ref:', ref)
      // setCount(count + 1)
      setCount(ref.current + 1)  //* 此时就能拿到count的最新值
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>useLatest</div>
      <div>count: {count}</div>
    </>
  )

}

export default App;