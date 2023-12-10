import { useState } from 'react'
import './App.css'
import useUpdate from './hooks/useUpdate'

const App = () => {
  const update = useUpdate();

  return (
    <>
      <div>time: {Date.now()}</div>
      <button onClick={() => update()}>
        update
      </button>
    </>
  )
}

export default App
