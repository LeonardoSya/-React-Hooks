import React, { useRef, useState } from 'react'
import './App.css';

const App: React.FC<any> = () => {

  const scrollRef = useRef<any>(null);
  const [scrollTop, setScrollTop] = useState<number>(0);

  return (
    <>
      <div>scrollTop: {scrollTop}</div>
    </>
  );
}

export default App;